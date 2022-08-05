import { cleanHTML } from "./cleanHTML.js";
export const cartButton = document.querySelector(".cart-btn"),
cartContainer = document.querySelector(".cart-container"),
cart = document.querySelector(".cart"),
cartTotal = document.querySelector(".cart-total p"),
cartBtnPurchase = document.querySelector(".button-purchase"),
cartQuantity = document.querySelector(".cart-quantity");


export class itemCart {
    constructor(name,img,price,qnt,id){
        this.name = name
        this.price = price
        this.qnt = qnt
        this.id = id
        this.img = img
    }
}

export function buyProduct(val){
    if(val.value == "buyBtn") { // Guarda los valores del item a comprar
        let comprasArray = []; // Crea array para el localStorage
        let name = val.parentNode.parentNode.children[0].textContent;
        let image = val.parentNode.parentNode.children[1].getAttribute("src")
        let price = parseInt(val.parentNode.parentNode.children[3].textContent);
        let quantity = parseInt(val.parentNode.children[1].value);
        let id = parseInt(val.parentNode.parentNode.getAttribute("id"))
        let booleano = false; // Valor booleano para confirmar obj en el array
        
        let buyitem = new itemCart(name,image,price,quantity,id); // Crea el objeto del item a comprar 
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
            
            

            
        }else {
            comprasArray.push(buyitem); 
            localStorage.setItem("Compra",JSON.stringify(comprasArray)); // Se inserta el array con obj al local
            
            cleanHTML(cartContainer)
            let compraArray = JSON.parse(localStorage.getItem("Compra"));
            compraArray.map(elem => createItemCart(elem));    
            
            
        }
        cleanHTML(cartContainer)
        let compraArray = JSON.parse(localStorage.getItem("Compra"));
        compraArray.map(elem => createItemCart(elem));   
        totalPrice();// Precio total
        cartTotalQuantity()
            
    }   
}


export function createItemCart (){
    if(localStorage.getItem("Compra") != null){
        cleanHTML(cartContainer)//
        let array = JSON.parse(localStorage.getItem("Compra"));
        for(let i=0;i < array.length;i++){
            const cartDiv = document.createElement("div");
            cartDiv.classList.add("cart-item");
            cartDiv.innerHTML = `
                <div>              
                    <button value="delete-item">Cancelar Compra</button>
                </div>
                <p>${array[i].name}</p>
                <img src=${array[i].img}>
                <span>$${array[i].price}</span>
                <input min="1" type="number" value="${array[i].qnt}"></input>
                `

            cartContainer.appendChild(cartDiv)
        }
    }
}


cartContainer.addEventListener("click",(e) =>{
    deleteItemCart(e.target)
})

function deleteItemCart(e){
    if(e.value == "delete-item"){
        let name = e.parentElement.parentElement.children[1].textContent;
        let compraArray = JSON.parse(localStorage.getItem("Compra"));
        compraArray.map((item,i) => {
            if(item.name == name){
                compraArray.splice(i,1)
                e.parentElement.parentElement.remove()
            }
        })
        localStorage.setItem("Compra",JSON.stringify(compraArray))
        // console.log(name);
        totalPrice(compraArray)// Total del precio
        cartTotalQuantity()
    }
}


export function totalPrice(){
    if(localStorage.getItem("Compra") != null){
        let compraArray = JSON.parse(localStorage.getItem("Compra"));
        let total = 0;
        if(compraArray.length == 0){
            cartTotal.textContent = `Total : `
        }
        compraArray.forEach(obj => {
            total += (obj.price * obj.qnt);
            // console.log(total);
            cartTotal.textContent = `Total : ${total} $`;
            
        })  
    }  
    }

function CompletePurchase () {
    let compraArray = JSON.parse(localStorage.getItem("Compra"));
    if(compraArray.length > 0){
        compraArray = "[]";
        localStorage.setItem("Compra",compraArray)
        totalPrice()
        cartTotalQuantity()
        cleanHTML(cartContainer);
        
        cartContainer.innerHTML = `
        <div class=complete-purchase>
            <p>Compra completada con exito </p>
        </div>    
        `
    }
}
// console.log(cartBtnPurchase);
cartBtnPurchase.addEventListener("click", CompletePurchase)

export function cartTotalQuantity(){
    if(localStorage.getItem("Compra") != null){
        let compraArray = JSON.parse(localStorage.getItem("Compra"));
        let buyQuantity = compraArray.length
        cartQuantity.textContent = buyQuantity;
        console.log(buyQuantity);
    }
}