import {Productos} from "./bd.js";
import {createItemCart} from "./cart.js";
const Grid = document.querySelector(".grid-container");
///////


function pushLocalStorage (name, price) {
    let Compra = [];
    let obj = {name: name, price: price};
    if(localStorage.getItem("Compra")){
        Compra = JSON.parse(localStorage.getItem("Compra"));
    }
    Compra.push(obj)
    localStorage.setItem("Compra",JSON.stringify(Compra))
}
///////
function createItem(bd) {
    const item = document.createElement("div"),
        itemName = document.createElement("p"),
        itemPrice = document.createElement("p"),
        button = document.createElement("button");

    item.classList.add("item")
    button.textContent = "Comprar";
    itemName.textContent = bd.name;
    itemPrice.textContent = bd.price;
    /////
    button.addEventListener("click",() => pushLocalStorage(bd.name,bd.price))
    button.addEventListener("click", () => {
        let compra = localStorage.getItem("Compra")
        let compraArray = JSON.parse(compra);
        createItemCart(compraArray)
    })
    /////
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(button);
    Grid.appendChild(item);
}

Productos.map(item => createItem(item))
// window.addEventListener("storage",createItemCart())
// window.addEventListener("DOMContentLoaded", createItemCart)