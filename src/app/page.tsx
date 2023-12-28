'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col justify-center text-center gap-y-3'>
      <Link href='/counter' className='text-blue-500 underline font-bold'>
        GO TO COUNTER APP
      </Link>
      <Link href='/memo' className='text-blue-500 underline font-bold'>
        GO TO MEMO APP
      </Link>
      <Link href='/form' className='text-blue-500 underline font-bold'>
        GO TO FORM APP
      </Link>
    </div>
  );
}
