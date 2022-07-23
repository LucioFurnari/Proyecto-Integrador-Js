import { products } from "./bd.js";
import { itemFilter, createItems, FilterInput } from "./createItem.js";
import { cleanHTML } from "./cleanHTML.js";
import { cartButton, cartContainer, itemCart } from "./cart.js";

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
    FilterInput(shopItems,e.target.value)
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

// const buyButton = document.querySelectorAll(".buy-btn"); // Guarda todos los botones de compra //

// buyButton.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         let name = e.target.parentNode.parentNode.children[0].textContent;
//         let price = btn.parentNode.parentNode.children[2].textContent;
//         let quantity = btn.parentNode.children[1].value;
//         let buyitem = new itemCart(name, price, quantity);
//         console.log(buyitem);
//         // console.log(btn.parentNode.parentNode.children[0].textContent);
//         console.log(btn.parentNode.parentNode.childNodes);
//         // console.log(btn);
//     })
// })

/////////////////

let comprasArray = []; // Crea array para el localStorage


function buyProduct(val){
    if(val.value == "buyBtn") { // Guarda los valores del item a comprar
        let name = val.parentNode.parentNode.children[0].textContent
        let price = parseInt(val.parentNode.parentNode.children[3].textContent);
        let quantity = parseInt(val.parentNode.children[1].value);
        let id = parseInt(val.parentNode.parentNode.getAttribute("id"))
        
        let buyitem = new itemCart(name,price,quantity,id); // Crea el objeto del item a comprar 
        if(localStorage.getItem("Compra")){
            let localSt = JSON.parse(localStorage.getItem("Compra"));// Llama al item del localStorage
            comprasArray = localSt; // Ahora el array pasa a ser el contenido del local
            comprasArray.push(buyitem) // Se pushea el obj al nuevo array
            comprasArray.map(elem =>{
                if(buyitem.id == elem.id){
                    elem.qnt += buyitem.qnt;
                }
            })
            localStorage.setItem("Compra",JSON.stringify(comprasArray)); // Se inserta el nuevo item al local
        }else {
            comprasArray.push(buyitem); 
            localStorage.setItem("Compra",JSON.stringify(comprasArray)); // Se inserta el array con obj al local
        }
        
    }       
}

window.addEventListener("click",e => {
    buyProduct(e.target);
    // console.log(e.target.value)
})



