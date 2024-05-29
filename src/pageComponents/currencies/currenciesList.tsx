
import Link from "next/link"
import styles from './currencies.module.scss'
import { cn } from "@/lib/utils"
import { TypographyH2, TypographyP } from "@/src/components/typography/typography"
import {useTranslations} from 'next-intl';

interface ICurrenciesList{
    currencies: IRates[]
    localCurrency: string
}


export default  function CurrenciesList({currencies, localCurrency}:ICurrenciesList) {
    const t = useTranslations('Currencies');

    return (
        <div className={cn(styles.container)}>
           <TypographyH2>{t("header")}</TypographyH2>
           <div className={styles.info}>
           <TypographyP>{t("relation")}</TypographyP>
           <TypographyP>{t("for_example")}</TypographyP>
           <TypographyP>{t("for_converting")} </TypographyP>
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