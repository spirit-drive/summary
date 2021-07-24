import { MutableRefObject, useEffect } from 'react';
import { useActionWrapper } from './useActionWrapper';

export const useCloseOpen = ({
  opened,
  root,
  open,
  close,
}: {
  opened: boolean;
  root: MutableRefObject<HTMLDivElement>;
  open: () => Promise<unknown>;
  close: () => Promise<unknown>;
}): void => {
  const actionWrapper = useActionWrapper();

  useEffect(() => {
    if (root.current) {
      const height = parseFloat(window.getComputedStyle(root.current).height);
      if (opened) {
        if (height < root.current.scrollHeight) {
          actionWrapper(open);
        }
      } else if (height > 0) {
        actionWrapper(close);
      }
    }
  }, [close, opened, open, actionWrapper, root]);
};
