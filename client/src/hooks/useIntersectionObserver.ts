import { useCallback, useRef } from 'react';
import { IntersectionObserverProps } from '../interfaces/common';

export const useIntersectionObserver = ({ fetchNextPage, hasNextPage, isFetchingNextPage }: IntersectionObserverProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastEventRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, isFetchingNextPage, hasNextPage]
  );

  return lastEventRef;
};
