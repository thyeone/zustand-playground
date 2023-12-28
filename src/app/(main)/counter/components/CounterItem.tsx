'use client';

import { useCount, useCounterActions } from '@/store/useCounterStore';

const NUMBER = 5;

export default function CounterItem() {
  const count = useCount();
  const { increase, decrease, customIncrease } = useCounterActions();

  return (
    <>
      <h2 className='font-bold text-xl'>{count}</h2>
      <button className='w-fit px-2 h-8 bg-blue-400 rounded text-white text-xs' onClick={increase}>
        증가
      </button>
      <button className='w-fit px-2 h-8 bg-blue-400 rounded text-white text-xs' onClick={decrease}>
        감소
      </button>
      <button className='w-fit px-2 h-8 bg-blue-400 rounded text-white text-xs' onClick={() => customIncrease(NUMBER)}>
        {`${NUMBER}만큼 증가`}
      </button>
    </>
  );
}
