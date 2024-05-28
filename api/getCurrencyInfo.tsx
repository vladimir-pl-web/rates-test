
export async function getCurrency(name:string): Promise<ICoinInfo> {
 
    try{
        const res = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=${name}`,{
            headers:{
                'X-CMC_PRO_API_KEY': '7193c981-4986-4128-87eb-9c5e09c1a58d',
            }
        })
        return res.json()
    }

    catch(error){
        throw new Error(`Failed to fetch ${name} crypto info`);
}
}

