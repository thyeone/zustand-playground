'use client';

import useIsMounted from '@/hooks/useIsMounted';
import { useMemos } from '@/store/useMemoStore';

export default function MemoList() {
  const isMounted = useIsMounted();
  const memos = useMemos();

  if (!isMounted) return null;

  return (
    <ul className='ml-5 mt-5 list-disc'>
      {memos.map((memo, index) => (
        <li key={index}>{memo}</li>
      ))}
    </ul>
  );
}
