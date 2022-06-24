const GridCart = document.querySelector(".grid-cart");


export function createItemCart(){
    let compra = localStorage.getItem("Compra")
    let compraArray = JSON.parse(compra);
    //////
    compraArray.map(compra => {
        const itemCart = document.createElement("div"),
            itemCartName = document.createElement("p"),
            itemCartPrice = document.createElement("p"),
            deleteBTN = document.createElement("button");
        itemCart.classList.add("item-cart")

        itemCartName.textContent = compra.name;
        itemCartPrice.textContent = compra.price;
        deleteBTN.textContent = "Delete"
        deleteBTN.addEventListener("click", () => {  
                const index = compraArray.indexOf(compra) 
                compraArray.splice(index,1)
                console.log(compra);
                localStorage.setItem("Compra",JSON.stringify(compraArray))
        })

        itemCart.appendChild(itemCartName);
        itemCart.appendChild(itemCartPrice);
        itemCart.appendChild(deleteBTN)
        GridCart.appendChild(itemCart);
    })
}
