import { CSSProperties, MouseEventHandler, TouchEventHandler } from 'react';

export type Coordinates = { x: number; y: number };
export const INITIAL_TRANSFORM = { x: 0, y: 0 };
export const initialStyle = { transform: `translate(${INITIAL_TRANSFORM.x}px, ${INITIAL_TRANSFORM.y}px)` };
export type UseMovementReturn = {
  style: CSSProperties;
  onMouseDown: MouseEventHandler<HTMLElement>;
  onTouchStart: TouchEventHandler<HTMLElement>;
};

export type Outside = {
  y: 'top' | 'bottom';
  x: 'left' | 'right';
};
