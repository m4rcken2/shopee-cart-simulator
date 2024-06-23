
async function addItem(userCart, item){
    userCart.push(item)
}

async function calculateTotal(userCart){
  const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
   console.log(`$${result}USD`)
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name)

    if (index != -1) {
        userCart.splice(index, 1)
    }
}

async function displayCart(userCart){
    console.log("Shopee cart list:")
    let index = 1
    userCart.forEach(item => {
        console.log(`${index++}. ${item.name} -- ${item.price} | ${item.quantity}x | Subtotal: $${item.subtotal()}USD
            `)
    });
}

async function removeItem(userCart, item){
  // find the index of the itens
    const indexFound = userCart.findIndex((p)=> p.name == item.name )

    if(indexFound == -1){
        connsole.log('Item not found')
        return
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
    return
  }

if (userCart[indexFound].quantity == 1){
    userCart.splice(indexFound, 1)
    return
}

}




export {
    addItem,
    calculateTotal,
    deleteItem,
    displayCart,
    removeItem,
}