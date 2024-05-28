"use client"

import { cn } from "@/lib/utils"
import styles from "./currencies.module.scss"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import { TypographyP } from "@/components/typography/typography"
import { CustomButton } from "@/components/button/button"
import Image from "next/image";
import arrows from "../../public/arrows.svg"

const Converter:FC<IConverter> = ({name, locale, rate})=>{
    const[ascending, setAscending] = useState<boolean>(true)
    const[inputLeft, setInputLeft] = useState<number>(1)
    const[inputRight, setInputRight] = useState<number>(0)

    console.log(rate, "rate")

    useEffect(()=>{
        const inputRightDynamic = ascending ? (inputLeft / rate) :(inputLeft* rate)
        setInputRight(inputRightDynamic )
    },[ascending, inputLeft, rate])

    const infoString = useMemo(()=>{
        const leftName = ascending ? name : locale
        const rightName = ascending ? locale : name

        return `${inputLeft.toFixed(2)} ${leftName} = ${inputRight.toFixed(2)} ${rightName}`
    },[ascending, inputLeft, inputRight, locale, name])

    const onDirectionHandler = useCallback(()=>{
        setAscending((prev)=>!prev)

    },[])

    return(
    <div className={cn(styles.converter)}>
        <TypographyP>
            {infoString}
        </TypographyP>
    <div className={styles.inputs}>
    <CustomButton
    onClick={onDirectionHandler} 
    >
        <Image 
        src={arrows}
        alt="arrows"
        width={28}
        height={28}
        />
    </CustomButton>
    </div>

    </div>)
}

export default Converter