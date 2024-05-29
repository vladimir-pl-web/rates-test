import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import {NextIntlClientProvider} from 'next-intl';
import {getMessages,  getTranslations,
  unstable_setRequestLocale} from 'next-intl/server';
import { ReactNode } from "react";
import LocaleSwitcher from "@/src/pageComponents/localeSwitcher/switcher";
import styles from "./main.module.scss";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});
  return {
    title: t('title')
  };
}

export default async function RootLayout({
  children,
  params: {locale}
}: Props) {

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased py-8 px-16",
          fontSans.variable
        )}>
        <NextIntlClientProvider messages={messages}>
       
            <div className={cn(styles.locale)}>
            <LocaleSwitcher />
            </div>
         
            {children}
       
        </NextIntlClientProvider>
          </body>
    </html>
  );
}
