'use client';

import { useMemoActions } from '@/store/useMemoStore';
import { useState } from 'react';

export default function Form() {
  const [input, setInput] = useState('');
  const { updateMemo, resetMemo } = useMemoActions();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) return;

    updateMemo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleOnSubmit} className='flex flex-col items-center mt-5'>
      <div>
        <label htmlFor='memo-input' className='font-bold'>
          What memo do you want to leave?
        </label>
        <input
          id='memo-input'
          value={input}
          onChange={handleOnChange}
          className='rounded w-full border-black border px-3 py-1 mt-2'
        />
      </div>
      <button className='w-20 h-10 text-white bg-orange-500 text-sm rounded mt-10 mb-3'>제출하기</button>
      <button onClick={resetMemo} className='w-20 h-10 text-white text-sm bg-orange-500 rounded'>
        초기화
      </button>
    </form>
  );
}
