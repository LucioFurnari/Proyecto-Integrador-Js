import { Products } from "./bd.js";

const shopContainerGrid = document.querySelector(".container-shop");

function createItems(arr){
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
    <h3>${arr.name}</h3>
    <img src=${arr.img}>
    <p class="item-description">${arr.description}</p>
    <span>${arr.price}</span>
    `
    shopContainerGrid.appendChild(item);
}

Products.map(createItems)