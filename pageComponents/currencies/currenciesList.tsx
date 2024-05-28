
import Link from "next/link"
import styles from './currencies.module.scss'
import { cn } from "@/lib/utils"
import { TypographyH2, TypographyP } from "@/components/typography/typography"

interface ICurrenciesList{
    currencies: IRates[]
    localCurrency: string
}


export default  function CurrenciesList({currencies, localCurrency}:ICurrenciesList) {
    return (
        <div className={cn(styles.container)}>
           <TypographyH2>Crypto Currency List</TypographyH2>
           <div className={styles.info}>
           <TypographyP>Rates shown as a relation CURRENCY/Euro</TypographyP>
           <TypographyP>For example: BTC/64067.54 means 1 BTC =  64067.54 EUR</TypographyP>
           <TypographyP>For converting click appropriate currency </TypographyP>
           </div>

            <ul className={cn(styles.list, "custom-scroll overflow-y-auto overflow-x-hidden")}>

                {
                    currencies.map(({name, rate})=>{
                        const currencyToEuro = 1/Number(rate)

                        return(
                            <li key={name} className={styles.item}>
                            <Link 
                            href={`/currencies/${name}`}
                            className={styles.link}
                            >
                                {name}/{currencyToEuro.toFixed(2)}
                                </Link>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}