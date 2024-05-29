import { getRates } from "@/api/getRates";
import styles from "./currencies.module.scss"
import { cn } from "@/lib/utils";
import CurrenciesList from "@/src/pageComponents/currencies/currenciesList";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/src/config";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}


type Props = {
  params: {locale: string};
};

export default async function Currencies({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const rates = await getRates()
  
  return (
      <div className={cn(styles.main)}>
        <CurrenciesList localCurrency={rates.currency} currencies={rates.rates}/>
      </div>
  );
}