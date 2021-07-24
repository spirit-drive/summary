import { MutableRefObject, useEffect, useRef } from 'react';

export const useClosedWhenMounted = (root: MutableRefObject<HTMLDivElement>, opened: boolean): void => {
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      if (root.current) {
        mounted.current = true;
        if (!opened) {
          root.current.style.height = '0'; // eslint-disable-line no-param-reassign
        }
      }
    }
  }, [opened, root]);
};
