

"use client"
import Image from "next/image";
import genericIcon from "../../public/currencyIcons/generic.svg"
import {memo, useCallback, useMemo, useState } from "react";


export default function Icon ({name, height, width}:IconProps){
    const [iconError, setIconError] = useState<boolean>(false) 

const onErrorHandler = useCallback((data:boolean)=>{
    setIconError(data)
},[])


const icon = useMemo(()=>{
    return <Image 
    src={ iconError ? genericIcon :`/currencyIcons/${name.toLowerCase()}.svg` } 
    width={width}
    height={height}
    loading="eager"
    className="transition-opacity opacity-0 duration-300"
    onLoad={(image)=>{
        image.currentTarget.classList.remove("opacity-0")
        onErrorHandler(false)
    }}
    onError={()=>onErrorHandler(true)}
    alt={"currency icon"} />
},[height, iconError, name, onErrorHandler, width])


    return(
        <>
        {icon}
        </>

    )
}


