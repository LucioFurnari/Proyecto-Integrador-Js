import { cleanHTML } from "./cleanHTML.js";
export const cartButton = document.querySelector(".cart-btn"),
cartContainer = document.querySelector(".cart");


export class itemCart {
    constructor(name,price,qnt,id){
        this.name = name
        this.price = price
        this.qnt = qnt
        this.id = id
    }
}

export function buyProduct(val){
    if(val.value == "buyBtn") { // Guarda los valores del item a comprar
        let comprasArray = []; // Crea array para el localStorage
        let name = val.parentNode.parentNode.children[0].textContent
        let price = parseInt(val.parentNode.parentNode.children[3].textContent);
        let quantity = parseInt(val.parentNode.children[1].value);
        let id = parseInt(val.parentNode.parentNode.getAttribute("id"))
        let booleano = false; // Valor booleano para confirmar obj en el array
        
        let buyitem = new itemCart(name,price,quantity,id); // Crea el objeto del item a comprar 
        if(localStorage.getItem("Compra")){
            let localSt = JSON.parse(localStorage.getItem("Compra"));// Llama al item del localStorage
            comprasArray = localSt; // Ahora el array pasa a ser el contenido del local
            comprasArray.forEach(elem => { // Busca si hay un obj en el array que tenga la misma ID que la compra
                if(elem.id == buyitem.id){ 
                    booleano = true;
                    elem.qnt += buyitem.qnt; // Si encuentra, solamente suma el valor qnt con el de la compra
                }
            });
            if(booleano == false){ // Si es false pushea el nuevo obj al array
                comprasArray.push(buyitem) // Se pushea el obj al nuevo array
            }

            localStorage.setItem("Compra",JSON.stringify(comprasArray)); // Se inserta el nuevo item al local
            
            cleanHTML(cartContainer)
            let compraArray = JSON.parse(localStorage.getItem("Compra"));
            compraArray.map(elem => createItemCart(elem));   
        }else {
            comprasArray.push(buyitem); 
            localStorage.setItem("Compra",JSON.stringify(comprasArray)); // Se inserta el array con obj al local
            
            cleanHTML(cartContainer)
            let compraArray = JSON.parse(localStorage.getItem("Compra"));
            compraArray.map(elem => createItemCart(elem));    
            
        }

    }   
}


export function createItemCart (obj){
    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cart-item");
    cartDiv.innerHTML = `
        <p>${obj.name}</p>
        <span>${obj.price}</span>
        <input type="number" value="${obj.qnt}"></input>
        `
    
    cartContainer.appendChild(cartDiv)
}

