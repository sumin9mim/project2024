import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <Link href='/boardlist'>Board</Link>
    </main>
  );
}

const HookForm = () => {
  const {} = useForm();
  return (
    <form>
      <input type='text' placeholder='ID' />
      <input type='password' placeholder='PW' />
      <input type='number' placeholder='AGE' />
      <input type='submit' />
    </form>
  );
};
