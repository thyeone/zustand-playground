import CounterItem from './components/CounterItem';

export default function Counter() {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-y-5'>
      <h1 className='text-4xl font-bold'>Counter App</h1>
      <CounterItem />
    </div>
  );
}
