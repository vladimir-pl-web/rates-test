

export async function getRates(): Promise<RatesResponse> {
    
    try{
        const res = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=EUR', {
            next: { revalidate: 60 }
        })
    
        const data = await res.json()
    
        const mappedResult:RatesResponse = {currency:'', rates: []}
    
        if(data){
        const ratesObj = data.data.rates
        const ratesArr:IRates[] = []
      
        for (const [key, value] of Object.entries(ratesObj)) {
            const cryptoCurrency = {name:key, rate:value} as IRates
            ratesArr.push(cryptoCurrency)
          }
         mappedResult.currency = data.data.currency ? data.data.currency : "EUR";
         mappedResult.rates = ratesArr
        }
        
        return mappedResult
    }

    catch(error){
    throw new Error('Failed to fetch exchange rates');
}
}