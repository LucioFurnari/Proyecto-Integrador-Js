import { Products, obj } from "./bd.js";
import { createItemShop } from "./createItem.js";

export const shopContainerGrid = document.querySelector(".container-shop"),
    shopBtnFilter = document.querySelector(".buttons-filter"),
    shopSelector = document.querySelector(".shop-filter");

function createItems(arr){
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
    <h3>${arr.name}</h3>
    <img src=${arr.img}>
    <p class="item-description">${arr.description}</p>
    <span>${arr.price} $</span>
    <button class="buy-btn">Comprar</button>
    `
    shopContainerGrid.appendChild(item);
}

// function createOptions(val){
//     const option = document.createElement("option");
//     option.textContent = val.name;
//     shopSelector.appendChild(option);
// }

function createBtn(val){
    const button = document.createElement("button");
    button.textContent = val.name;
    button.addEventListener("focus",(event) => obj.map((item) => createItemShop(event.target.textContent,item)));
    // button.addEventListener("click", e => console.log(e.target.textContent))

        // if(button.textContent == e.name){
        //     cleanHTML()
        //     // createItems(e)
        //     e.products.map(createItemShop)
        // }
    shopBtnFilter.appendChild(button);
}


window.addEventListener("DOMContentLoaded",Products.map(createItems));
obj.map(createBtn)

// Products.map(createOptions)
// shopSelector.addEventListener("change", (event) => {
//     console.log(event.target.value);
// })
