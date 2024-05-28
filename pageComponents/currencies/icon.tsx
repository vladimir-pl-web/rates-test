

"use client"
import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";


export enum ICONS_MESSAGES {
    ICON = "error"
}


export default function Icon ({name}:IconProps){

    const defaultSrc: string = "/na.png"
    const [iconError, setIconError] = useState<boolean>(false) 

    
const onErrorHandler = useCallback((type:string)=>{
    if(type === ICONS_MESSAGES.ICON) {
        setIconError(true)
    }
},[])

    return(
        <Image 
        src={ !iconError ? `/currencyIcons/${name.toLowerCase()}.svg` : `/currencyIcons/generic.svg`} 
        fill={true}
        loading="eager"
        placeholder="blur"
        blurDataURL={defaultSrc}
        onLoad={()=>setIconError(false)}
        onError={(error)=>setIconError(true)}
        alt={"currency icon"} />

    )
}

