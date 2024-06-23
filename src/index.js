import createItem from "./services/item.js"
import { addItem, calculateTotal, displayCart, deleteItem, removeItem } from "./services/cart.js"

const myCart= []

// create itens
const item1 = await createItem("Keyboard & Mouse", 2, 14.99)
const item2 = await createItem("Desktop", 1, 150)
const item3 = await createItem("Mini portable printer", 5, 12.3)
const item4 = await createItem("Mousepad", 3, 7.99)
const item5 = await createItem("Laptop(Lenovo)", 1, 120.99)

// add item to my Cart
await addItem(myCart, item1)
await addItem(myCart, item2)
await addItem(myCart, item3)
await addItem(myCart, item4)
await addItem(myCart, item5)

//delete one item by name
await deleteItem(myCart, item5.name)

// remove an item
await removeItem(myCart, item4)

// display the cart
await displayCart(myCart)

console.log('Shopee Total Cart is:')
await calculateTotal(myCart)
