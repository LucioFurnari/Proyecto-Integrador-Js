import { Products, obj, products } from "./bd.js";
import { itemFilter, createItems } from "./createItem.js";
import { cleanHTML } from "./cleanHTML.js";

export const shopContainerGrid = document.querySelector(".container-shop"),
    shopFilter = document.querySelector(".buttons-filter"),
    shopBtnShow = document.querySelector(".btn-showshop");
    

window.addEventListener("DOMContentLoaded",createItems(products,shopContainerGrid));
// shopBtnShow.addEventListener("click",() => {
//     cleanHTML(shopContainerGrid)
//     createItems(products,shopContainerGrid)})
const shopItems = document.querySelectorAll(".item"); // Guarda los items del shop //
shopFilter.addEventListener("click",(event) =>{
    itemFilter(shopItems, event.target.value);
    console.log(event.target.value);
})


console.log(shopItems);


