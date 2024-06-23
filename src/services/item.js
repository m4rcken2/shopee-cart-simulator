
async function createItem(name, quantity, price){
    return {
        name,
        quantity,
        price,
        subtotal: ()=> quantity * price
    }

}

export default createItem