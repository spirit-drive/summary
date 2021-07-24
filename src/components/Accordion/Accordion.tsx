import React, { HTMLAttributes, memo, useCallback, useMemo, useRef } from 'react';
import cn from 'clsx';
import { useClosedWhenMounted } from './useClosedWhenMounted';
import { useCloseOpen } from './useCloseOpen';
import { useAction } from './useAction';
import s from './Accordion.sass';

export type Props = HTMLAttributes<HTMLDivElement> & {
  opened: boolean;
  duration?: number;
};

export const DEFAULT_DURATION = 300;

export const Accordion = memo<Props>(
  ({ children, className, style = {}, opened, duration = DEFAULT_DURATION, ...props }) => {
    const root = useRef<HTMLDivElement>(null);

    const start = useCallback(() => {
      root.current.style.height = `${root.current.scrollHeight}px`;
    }, []);

    const open = useAction(
      {
        start,
        end() {
          root.current.style.height = 'auto';
        },
      },
      duration
    );
    const close = useAction({
      start,
      end() {
        root.current.style.height = '0';
      },
    });

    useClosedWhenMounted(root, opened);

    useCloseOpen({ open, close, opened, root });

    const $style = useMemo(() => ({ ...style, transitionDuration: `${duration}ms` }), [duration, style]);

    return (
      <div {...props} ref={root} className={cn(s.root, className)} style={$style}>
        {children}
      </div>
    );
  }
);
