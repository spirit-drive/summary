// prevent action if other action in a process
import { useCallback, useRef } from 'react';

export type ActionWrapper = (action: () => Promise<unknown>) => void;

export const useActionWrapper = (): ActionWrapper => {
  const processing = useRef(false);
  return useCallback<ActionWrapper>((action) => {
    if (!processing.current) {
      processing.current = true;
      action().then(() => {
        processing.current = false;
      });
    }
  }, []);
};
