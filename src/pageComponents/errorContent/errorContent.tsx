'use client';
import { useRouter } from 'next/navigation'
import styles from "./errorContent.module.scss"
import { cn } from "@/lib/utils";
import { TypographyH2 } from '@/src/components/typography/typography';
import { CustomButton } from '@/src/components/button/button';
import {useTranslations} from 'next-intl';


 
export default function ErrorContent({
  errorMessage,
  path,
  btnText
//   reset,
}: IErrorBoundary) {
  const t = useTranslations('Errors');
  const router = useRouter()

  return (
    <div className={cn(styles.error)} title={t("errors_page")}>
      <TypographyH2 
      classNames='border-none p-0'
      >{errorMessage}</TypographyH2>
      <CustomButton
        onClick={
          () => {
            router.push(path)
            
          }
        }
      >
        {btnText}
      </CustomButton>
    </div>
  );
}