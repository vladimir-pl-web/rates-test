import { getCurrency } from "@/api/getCurrencyInfo"
import { getRates } from "@/api/getRates"
import styles from "./currency.module.scss"
import { TypographyH2 } from "@/components/typography/typography"
import { cn } from "@/lib/utils"
import Icon from "@/pageComponents/currencies/icon"
import Converter from "@/pageComponents/currencies/converter"

interface Params {
    params: {
        name: string,

    }
}

export default async function Currency({params:{name}}: Params) {
    const rateList = await getRates()
    const currency = await getCurrency(name)
    const currencyInfo = currency.data[name][0]
    const {rates} = rateList
    const rate = rates.find((el)=>el.name === name)
    
    return (
        <div className={cn(styles.main)}>

        <TypographyH2 classNames={cn(styles.header)} > 
        <Icon 
            name={name}
            width={28}
            height={28}
            /> 
            Convert {currencyInfo?.name}({name}) 
            </TypographyH2>
                <Converter 
                name={name}
                locale="EUR"
                rate={rate?.rate ? Number(rate.rate) : 0}
                />
            
        </div>
    )
}

export async function generateStaticParams() {
    const rates = await getRates()

    return rates.rates.map((element) => {
        return [
            {name:element.name}, 
        ]
    })
}