import { products } from "./bd.js";
import { itemFilter, createItems, FilterInput } from "./createItem.js";
import { cleanHTML } from "./cleanHTML.js";
import { cartButton, cartContainer, itemCart, buyProduct, createItemCart } from "./cart.js";

export const shopContainerGrid = document.querySelector(".container-shop"), // DOM Elements //
    shopFilter = document.querySelector(".buttons-filter"),
    shopBtnShow = document.querySelector(".btn-showshop"),
    inputFilter = document.querySelector(".input-filter");
    
    

window.addEventListener("DOMContentLoaded",createItems(products,shopContainerGrid));// Crea items del shop //
const shopItems = document.querySelectorAll(".item"); // Guarda los items del shop //


shopFilter.addEventListener("click",(event) =>{ // Filtra los productos con los botones //
    itemFilter(shopItems, event.target.value);
    // console.log(event.target.value);
})

inputFilter.addEventListener("input",(e) => { // Filtra los productos con el input //
    let inputValue = e.target.value.toLowerCase()
    shopItems.forEach(elem => {
        const isVisible = elem.children[0].textContent.toLowerCase().includes(inputValue)
        elem.classList.toggle("item",isVisible);
        elem.classList.toggle("item-hide",!isVisible);          
    })
    // FilterInput(shopItems,e.target.value)
    // console.log(e.target.value);
})


///// Boton del carrito /////

cartButton.addEventListener("click",() => {
    cartContainer.classList.toggle("cart-hide");
    });
//////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////
// Probando obj con class //
let objitem = new itemCart("Chocolate blanco",120,1);
console.log(objitem);

/////

window.addEventListener("click",e => {
    buyProduct(e.target);
    // console.log(e.target.value)
})

// let compraArray = JSON.parse(localStorage.getItem("Compra"));
// compraArray.map(elem => createItemCart(elem));    


let compraArray = JSON.parse(localStorage.getItem("Compra"));
compraArray.map(elem => createItemCart(elem));    
cartContainer.removeChild(cartContainer.firstChild)