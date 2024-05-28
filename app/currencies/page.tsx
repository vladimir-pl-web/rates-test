import { getRates } from "@/api/getRates";
import CurrenciesList from "@/pageComponents/currencies/currenciesList";
import Image from "next/image";

export default async function Currencies() {
  const rates = await getRates()
  
  return (
      <div className="w-full items-center justify-center font-mono text-sm lg:flex">
        <CurrenciesList localCurrency={rates.currency} currencies={rates.rates}/>
      </div>
  );
}