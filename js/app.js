import { products } from "./bd.js";
import { itemFilter, createItems, FilterInput } from "./createItem.js";
import { cleanHTML } from "./cleanHTML.js";
import { cartButton, cart, cartContainer, itemCart, buyProduct, createItemCart, totalPrice, cartTotalQuantity } from "./cart.js";

// DOM Elements //
export const shopContainerGrid = document.querySelector(".container-shop"), // Shop grid
    shopFilter = document.querySelector(".buttons-filter"), // Btns container
    // shopBtnShow = document.querySelector(".btn-showshop"), // Btn Muestra todo el shop
    inputFilter = document.querySelector(".input-filter");
    
    createItems(products,shopContainerGrid)// Crea items del shop //);
    
//////////////////// Filtro /////////////////////////////
    const shopItems = document.querySelectorAll(".item"); // Guarda los items del shop //
    shopFilter.addEventListener("click",(event) =>{ 
        itemFilter(shopItems, event.target.value); // Filtra los productos con los botones //
    })

    inputFilter.addEventListener("input",(e) => FilterInput(shopItems,e.target.value) );// Filtra los productos con el input //


///// Boton del carrito /////

cartButton.addEventListener("click",() => { // Aparece y desaparece el carrito
    cart.classList.toggle("cart-hide");
    });

window.addEventListener("click",e => { // Deja comprar los items del shop
    buyProduct(e.target);
    cartItemQuantity()
    // console.log(e.target.value)
})
    totalPrice()// Precio total se muestra al iniciar la pagina
    cleanHTML(cartContainer)//
    createItemCart()
    cartTotalQuantity()

///////////////////////////////


function cartItemQuantity() {
    let itemQntCart = document.querySelectorAll(".cart-item input");
    console.log(itemQntCart);
    itemQntCart.forEach(item => {
        item.addEventListener("change", (e) => {
        let compraArray = JSON.parse(localStorage.getItem("Compra")); // Resumir este codigo
         // console.log(item.parentElement.firstElementChild.textContent);
        let name = item.parentElement.firstElementChild.textContent;
        let value = parseInt(e.target.value);
        compraArray.map(elem => {
            if(elem.name == name){
                elem.qnt = value;
            }
            localStorage.setItem("Compra",JSON.stringify(compraArray))
        })
        totalPrice(compraArray)// Precio total se muestra al iniciar la pagina
         // console.log(e.target.value);
        })
    })
}


