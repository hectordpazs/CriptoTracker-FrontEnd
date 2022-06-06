

export const getPrice = async (coin) => {
    
    const resp = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}`);
    const body = await resp.json();

    return body[0].current_price;
    
}