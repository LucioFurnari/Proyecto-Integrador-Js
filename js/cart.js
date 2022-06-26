const GridCart = document.querySelector(".grid-cart");

function DeleteCartItem(array,item){
    const index = array.indexOf(item) 
        array.splice(index,1)
        localStorage.setItem("Compra",JSON.stringify(array))
}

export function createItemCart(array){
    //////
    array.map(compra => {
        const itemCart = document.createElement("div"),
            itemCartName = document.createElement("p"),
            itemCartPrice = document.createElement("p"),
            deleteBTN = document.createElement("button");
        itemCart.classList.add("item-cart")

        itemCartName.textContent = compra.name;
        itemCartPrice.textContent = compra.price;
        //Boton
        deleteBTN.textContent = "Delete"
        deleteBTN.addEventListener("click",() => DeleteCartItem(array,compra))
        //
        itemCart.appendChild(itemCartName);
        itemCart.appendChild(itemCartPrice);
        itemCart.appendChild(deleteBTN)
        GridCart.appendChild(itemCart);
    })
}
