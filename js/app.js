import { products } from "./bd.js";
import { itemFilter, createItems, FilterInput } from "./createItem.js";
import { cleanHTML } from "./cleanHTML.js";
import { cartButton, cart, cartContainer, itemCart, buyProduct, createItemCart, totalPrice } from "./cart.js";

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
    cart.classList.toggle("cart-hide");
    });
//////////////////////////////////


window.addEventListener("click",e => {
    buyProduct(e.target);
    // console.log(e.target.value)
})

// let compraArray = JSON.parse(localStorage.getItem("Compra"));
// compraArray.map(elem => createItemCart(elem));    




    cleanHTML(cartContainer)
    let compraArray = JSON.parse(localStorage.getItem("Compra"));
    compraArray.map(elem => createItemCart(elem));   
    compraArray.map(obj => totalPrice(obj));
    
    const itemQntCart = document.querySelectorAll(".cart-item input");
    itemQntCart.forEach(item => {
        item.addEventListener("change", (e) => {
            // console.log(item.parentElement.firstElementChild.textContent);
            let name = item.parentElement.firstElementChild.textContent;
            let value = parseInt(e.target.value);
            compraArray.map(elem => {
                if(elem.name == name){
                    elem.qnt = value;
                }
                localStorage.setItem("Compra",JSON.stringify(compraArray))
            })
            
            console.log(e.target.value);
        })
    })
    console.log(itemQntCart);
    
    
    

