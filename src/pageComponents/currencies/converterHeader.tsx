import styles from "./currencies.module.scss"
import { TypographyH2 } from "@/src/components/typography/typography"
import { cn } from "@/lib/utils"
import { FC } from "react"
import Icon from "@/src/pageComponents/currencies/icon"
import {useTranslations} from 'next-intl';

const ConverterHeader:FC<IConverterHeader> = ({name, currencyAbbr})=>{
    const t = useTranslations('Currencies');
    return(
        <TypographyH2 classNames={cn(styles.header)} > 
        <Icon 
            name={name}
            width={28}
            height={28}
            /> 
            {t("convert")} {currencyAbbr}({name}) 
        </TypographyH2>


    )
}

export default ConverterHeader