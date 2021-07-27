import { useCallback, useEffect, useRef } from 'react';

export type Action = () => Promise<void>;

export const useAction = ({ start, end }: { start: () => void; end: () => void }, duration = 0): Action => {
  const mounted = useRef(true);
  useEffect(
    () => (): void => {
      mounted.current = false;
    },
    []
  );
  return useCallback<Action>(
    () =>
      new Promise((resolve) => {
        start();
        setTimeout(() => {
          setTimeout(() => {
            if (mounted.current) {
              end();
              resolve(undefined);
            }
          });
        }, duration);
      }),
    [duration, end, start]
  );
};
