"use client"

import { cn } from "@/lib/utils"
import styles from "./currencies.module.scss"
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from "react"
import { TypographyP } from "@/src/components/typography/typography"
import { CustomButton } from "@/src/components/button/button"
import Image from "next/image";
import arrows from "../../../public/arrows.svg"
import { Input } from "@/src/components/input/input"

export enum Directions{
    LEFT = "left",
    RIGHT = "right"
}

const Converter:FC<IConverter> = ({name, locale, rate})=>{
    const[ascending, setAscending] = useState<boolean>(true)
    const[inputLeft, setInputLeft] = useState<number>(1)
    const[inputRight, setInputRight] = useState<number>(0)

    console.log(rate, "rate")

    useEffect(()=>{
        const inputRightDynamic = ascending ? (inputLeft / rate) : (inputLeft* rate)

        setInputRight(inputRightDynamic)
    },[ascending, inputLeft,  rate])

    const infoString = useMemo(()=>{
        const leftName = ascending ? name : locale
        const rightName = ascending ? locale : name

        return `${inputLeft.toFixed(2)} ${leftName} = ${inputRight.toFixed(2)} ${rightName}`
    },[ascending, inputLeft, inputRight, locale, name])

    const onDirectionHandler = useCallback(()=>{
        setAscending((prev)=>!prev)
    },[])

    const onInputsHandler = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        const data = e.target.value
            setInputLeft(+data)
    },[])

    return(
    <div className={cn(styles.converter)}>
        <TypographyP>
            {infoString}
        </TypographyP>
    <div className={cn(styles.content)}>
    <div className={styles.inputs}>

    <div className={cn(styles.inputBox)}>
    <Input
    type="number"
    step={0.01}
    value={inputLeft}
    onChange={(event)=>onInputsHandler(event)}
    />
    <div className={cn(styles.label)}>
        {ascending ? name : locale}
    </div >
    </div>

    <div className={cn(styles.inputBox)}>
    <Input 
    type="number"
    value={inputRight.toFixed(2)}
    disabled={true}
    />
    <div className={cn(styles.label)}>
    {ascending ? locale : name}
    </div>
    </div>
    </div>
    <div className={cn(styles.button)}>
    <CustomButton
    onClick={onDirectionHandler} 
    >
        <Image 
        src={arrows}
        alt="arrows"
        width={30}
        height={30}
        />

    </CustomButton>
    </div>
    </div>

    </div>)
}

export default Converter


