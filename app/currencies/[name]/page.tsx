import { getRates } from "@/api/getRates"


interface Params {
    params: {
        name: string,

    }
}

export default async function Currency({params:{name}}: Params) {
    const rateList = await getRates()
    const {rates} = rateList
    
    const rate = rates.find((el)=>el.name === name)

    return (
        <div>
            <h1>{name} {rate?.rate}</h1>
        </div>
    )
}

export async function generateStaticParams() {
    const rates = await getRates()

    return rates.rates.map((element) => {
        return [
            {name:element.name, rate: element.rate}, 
        ]
    })
}