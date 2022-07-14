import { shopContainerGrid } from "./app.js";
import { cleanHTML } from "./cleanHTML.js";

export function createItemShop(btn,val){
    if(btn == val.name){
        cleanHTML()
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