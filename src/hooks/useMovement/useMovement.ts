import {
  CSSProperties,
  MouseEventHandler,
  TouchEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Coordinates, initialStyle, UseMovementReturn } from './types';
import { getCoordinatesForOutside } from './helpers';
import s from './useMovement.sass';

export const useMovement = (): UseMovementReturn => {
  const [isMove, setIsMove] = useState(false);

  const firstClick = useRef<Coordinates>(null);
  const [translate, setTranslate] = useState<Coordinates>({ x: 0, y: 0 });
  const savedPrevTransform = useRef<Coordinates>(translate);
  const translateCopy = useRef(translate);
  useEffect(() => {
    translateCopy.current = translate;
  }, [translate]);

  const target = useRef<HTMLElement>();
  const startMoving = useCallback((element: HTMLElement) => {
    target.current = element;
  }, []);

  const onMouseDown = useCallback<MouseEventHandler<HTMLElement>>(
    (e) => {
      startMoving(e.currentTarget as HTMLElement);
      setIsMove(true);
      firstClick.current = {
        x: e.screenX,
        y: e.screenY,
      };
    },
    [startMoving]
  );

  const onTouchStart = useCallback<TouchEventHandler<HTMLElement>>(
    (e) => {
      startMoving(e.currentTarget as HTMLElement);
      setIsMove(true);
      firstClick.current = {
        x: e.touches[0].screenX,
        y: e.touches[0].screenY,
      };
    },
    [startMoving]
  );

  const addTransitionClass = useCallback(() => {
    target.current.classList.add(s.transition);
  }, []);

  const removeTransitionClass = useCallback(() => {
    target.current.classList.remove(s.transition);
  }, []);

  const transitionEnd = useCallback(() => {
    removeTransitionClass();
    target.current.removeEventListener('transitionend', transitionEnd);
  }, [removeTransitionClass]);

  const moveFromOutside = useCallback(() => {
    setTranslate((prev) => {
      const newCoords = getCoordinatesForOutside(target.current, savedPrevTransform.current);
      if (prev.x === newCoords.x && prev.y === newCoords.y) return prev;
      target.current.classList.add(s.transition);
      addTransitionClass();
      target.current.addEventListener('transitionend', transitionEnd);
      savedPrevTransform.current = { ...newCoords };
      return newCoords;
    });
  }, [addTransitionClass, transitionEnd]);

  const isMoveCopy = useRef(isMove);
  useEffect(() => {
    isMoveCopy.current = isMove;
  }, [isMove]);

  const wasMoved = useRef(false);
  const onEnd = useCallback(() => {
    if (wasMoved.current) {
      savedPrevTransform.current = { ...translateCopy.current };
      moveFromOutside();
      wasMoved.current = false;
    }
    setIsMove(false);
  }, [moveFromOutside]);

  const style = useMemo<CSSProperties>(() => {
    if (!firstClick.current) return initialStyle;
    return {
      transform: `translate(${translate.x}px, ${translate.y}px)`,
    };
  }, [translate]);

  const onMouseMove = useCallback((e) => {
    if (isMoveCopy.current) {
      e.preventDefault();
      e.stopPropagation();
      wasMoved.current = true;
      setTranslate({
        x: e.screenX - firstClick.current.x + savedPrevTransform.current.x,
        y: e.screenY - firstClick.current.y + savedPrevTransform.current.y,
      });
    }
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (isMoveCopy.current) {
      e.preventDefault();
      e.stopPropagation();
      wasMoved.current = true;
      setTranslate({
        x: e.touches[0].screenX - firstClick.current.x + savedPrevTransform.current.x,
        y: e.touches[0].screenY - firstClick.current.y + savedPrevTransform.current.y,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchend', onEnd);
    return (): void => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
  }, [onEnd, onMouseMove, onTouchMove]);

  return useMemo<UseMovementReturn>(
    () => ({
      onTouchStart,
      style,
      onMouseDown,
    }),
    [onTouchStart, style, onMouseDown]
  );
};
