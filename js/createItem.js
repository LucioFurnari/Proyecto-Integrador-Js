import { shopContainerGrid } from "./app.js";
import { cleanHTML } from "./cleanHTML.js";

export function createItemShop(btn,val){
    if(btn == val.name){
        cleanHTML(shopContainerGrid)
        for(let i=0; i < val.products.length;i++){
            const itemShop = document.createElement("div");
            itemShop.classList.add("item")
            itemShop.innerHTML = `
                <h3>${val.products[i].name}</h3>
            `;
            shopContainerGrid.appendChild(itemShop);
        }
    }
};

export function createItems(arr, elem){
    for(let i=0; i < arr.length;i++){
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
            <h3>${arr[i].name}</h3>
            <img src=${arr[i].img}>
            <p class="item-description">${arr[i].description}</p>
            <span>${arr[i].price} $</span>
            <button class="buy-btn">Comprar</button>
            `
        elem.appendChild(item);
    }
}

export function createBtnCategory(arr,elem){
    
}