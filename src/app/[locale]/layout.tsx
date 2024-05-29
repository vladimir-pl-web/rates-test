import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import {NextIntlClientProvider} from 'next-intl';
import {getMessages,  getTranslations,
  unstable_setRequestLocale} from 'next-intl/server';
import { locales } from "@/src/config";
import { ReactNode } from "react";


  export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
  }
  
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
    <html lang={locale}>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
          </body>
    </html>
  );
}
