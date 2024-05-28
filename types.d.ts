

interface IRates{
    name:string, rate:string, 
}

interface RatesResponse{
    currency: string;
    rates: IRates[]
}

interface IDataFetchError{
    message:string;
    error:boolean
}


interface IHeaderProps{
    children: string | ReactNode;
    classNames?: string
}

interface IconProps{
    name:string;
}

