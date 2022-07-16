import { Products, obj } from "./bd.js";
import { createItemShop, createItems } from "./createItem.js";
import { cleanHTML } from "./cleanHTML.js";

export const shopContainerGrid = document.querySelector(".container-shop"),
    shopBtnFilter = document.querySelector(".buttons-filter"),
    shopBtnShow = document.querySelector(".btn-showshop");
    
function createBtn(val){
    const button = document.createElement("button");
    button.textContent = val.name;
    button.addEventListener("focus",(event) => obj.map((item) => createItemShop(event.target.textContent,item)));
    shopBtnFilter.appendChild(button);
}


window.addEventListener("DOMContentLoaded",createItems(Products,shopContainerGrid));
shopBtnShow.addEventListener("click",() => {
    cleanHTML(shopContainerGrid)
    createItems(Products,shopContainerGrid)})
obj.map(createBtn)

