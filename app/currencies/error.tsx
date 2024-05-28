'use client';
 
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import styles from "./currencies.module.scss"
import { cn } from "@/lib/utils";
import { TypographyH2 } from '@/components/typography/typography';
import { CustomButton } from '@/components/button/button';
 
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
    <main className={cn(styles.error)}>
      <TypographyH2 
      classNames='border-none p-0'
      >{error.message}. Try again later</TypographyH2>
      <CustomButton
        onClick={
          () => {
            reset()
            
          }
        }
      >
        Back to Main page
      </CustomButton>
    </main>
  );
}