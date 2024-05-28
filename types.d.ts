

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
    width: number;
    height:number
}

interface ICoinInfo {
    status: Status;
    data: Data;
  }
  interface Data {
    [key:string]: key[];
  }
  interface key {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs?: number;
    date_added: string;
    tags: Tag[];
    max_supply?: number;
    circulating_supply?: number;
    total_supply: number;
    is_active: number;
    infinite_supply: boolean;
    platform?: Platform;
    cmc_rank?: any;
    is_fiat: number;
    self_reported_circulating_supply?: any;
    self_reported_market_cap?: any;
    tvl_ratio?: any;
    last_updated: string;
    quote: Quote;
  }
  interface Quote {
    [currency:string]: currency;
  }
  interface currency {
    price?: any;
    volume_24h?: number;
    volume_change_24h?: number;
    percent_change_1h?: number;
    percent_change_24h?: number;
    percent_change_7d?: number;
    percent_change_30d?: number;
    percent_change_60d?: number;
    percent_change_90d?: number;
    market_cap?: any;
    market_cap_dominance?: number;
    fully_diluted_market_cap?: number;
    tvl?: any;
    last_updated: string;
  }
  interface Platform {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    token_address: string;
  }
  interface Tag {
    slug: string;
    name: string;
    category: string;
  }
  interface Status {
    timestamp: string;
    error_code: number;
    error_message?: any;
    elapsed: number;
    credit_count: number;
    notice?: any;
  }

