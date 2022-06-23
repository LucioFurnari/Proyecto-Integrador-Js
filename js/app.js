
const Grid = document.querySelector(".grid-container");
const GridCart = document.querySelector(".grid-cart");
///////
const Compra = [];
    console.log(Compra);

function pushLocalStorage (name, price) {
    let obj = {name: name, price: price};
    Compra.push(obj)
    localStorage.setItem("Compra",JSON.stringify(Compra))
}
///////

function createItem(bd) {
    const item = document.createElement("div"),
        itemName = document.createElement("p"),
        itemPrice = document.createElement("p"),
        button = document.createElement("button");

    item.classList.add("item")
    button.textContent = "Comprar";
    itemName.textContent = bd.name;
    itemPrice.textContent = bd.price;
    /////
    button.addEventListener("click",() => pushLocalStorage(bd.name,bd.price))
    /////
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(button);
    Grid.appendChild(item);
}

Productos.map(item => createItem(item))