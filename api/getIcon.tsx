

export async function getIcon(name:string): Promise<{error:boolean}> {
 
    try{
        const res = await fetch(`http://localhost:3000/currencyIcons/${name.toLowerCase()}.svg`)
        return {error:false}
    }

    catch(error){
    return {error:true}
}
}