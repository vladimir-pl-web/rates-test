'use client';
 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  const router = useRouter()

 useEffect(() => {
   // Optionally log the error to an error reporting service
   console.error(error);
 }, [error]);


  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">{error.message} Try again later</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={

          () => router.push('/')
        }
      >
        Back to Main page
      </button>
    </main>
  );
}