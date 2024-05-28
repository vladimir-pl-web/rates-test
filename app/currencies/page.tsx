import { getRates } from "@/api/getRates";
import CurrenciesList from "@/pageComponents/currencies/currenciesList";
import styles from "./currencies.module.scss"
import { cn } from "@/lib/utils";

export default async function Currencies() {
  const rates = await getRates()
  
  return (
      <div className={cn(styles.main)}>
        <CurrenciesList localCurrency={rates.currency} currencies={rates.rates}/>
      </div>
  );
}