import { Products, obj, products } from "./bd.js";
import { itemFilter, createItems, FilterInput } from "./createItem.js";
import { cleanHTML } from "./cleanHTML.js";

export const shopContainerGrid = document.querySelector(".container-shop"), // DOM Elements //
    shopFilter = document.querySelector(".buttons-filter"),
    shopBtnShow = document.querySelector(".btn-showshop"),
    inputFilter = document.querySelector(".input-filter"),
    cartButton = document.querySelector(".cart-btn");
    

window.addEventListener("DOMContentLoaded",createItems(products,shopContainerGrid));// Crea items del shop //
const shopItems = document.querySelectorAll(".item"); // Guarda los items del shop //

shopFilter.addEventListener("click",(event) =>{ // Filtra los productos con los botones //
    itemFilter(shopItems, event.target.value);
    console.log(event.target.value);
})

inputFilter.addEventListener("input",(e) => { // Filtra los productos con el input //
    FilterInput(shopItems,e.target.value)
    console.log(e.target.value);
})

console.log(shopItems[1].children[0].textContent);
// console.log(shopItems);


