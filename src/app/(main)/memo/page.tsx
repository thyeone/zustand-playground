import Form from './components/Form';
import MemoList from './components/MemoList';

export default function Memo() {
  return (
    <>
      <h1 className='text-2xl text-center font-bold mt-4'>Memo App</h1>
      <Form />
      <MemoList />
    </>
  );
}
