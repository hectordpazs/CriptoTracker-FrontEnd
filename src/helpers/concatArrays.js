


export const concatArrays = () => {
    return (getState) => {
    const { wallet: { investedCoins } } = getState();

    const arrayWithId = investedCoins.filter(currencie=> currencie.id!==undefined);
    const arrayWithoutId = investedCoins.filter(currencie => (currencie.id === undefined));

    const prices = arrayWithoutId.map(currencie => {
        return {
            price: currencie.price
        }
    });

    return console.log(prices)
}}