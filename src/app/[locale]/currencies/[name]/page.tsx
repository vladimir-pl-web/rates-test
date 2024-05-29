import { getCurrency } from "@/api/getCurrencyInfo"
import { getRates } from "@/api/getRates"
import Converter from "@/src/pageComponents/currencies/converter"
import styles from "./currency.module.scss"
import { cn } from "@/lib/utils"
import ConverterHeader from "@/src/pageComponents/currencies/converterHeader"

interface Params {
    params: {
        name: string,
    }
}
  

export async function generateStaticParams() {
    const rates = await getRates()

    return rates.rates.map((element) => {
        return [
            {name:element.name}, 
        ]
    })
}

export default async function Currency({params:{name}}: Params) {
    const rateList = await getRates()
    const currency = await getCurrency(name)
    const currencyInfo = currency.data[name][0]
    const {rates} = rateList
    const rate = rates.find((el)=>el.name === name)
  
    
    return (
        <div className={cn(styles.main)}>
        <ConverterHeader 
        name={name}  
        currencyAbbr={currencyInfo?.name}
        /> 
        <Converter 
             name={name}
            locale="EUR"
            rate={rate?.rate ? Number(rate.rate) : 0}
            />
            
        </div>
    )
}
