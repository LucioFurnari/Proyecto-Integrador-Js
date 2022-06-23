const Productos = [
    {name: "Producto 1",price: 200},
    {name: "Producto 2",price: 300},
    {name: "Producto 3",price: 300},
    {name: "Producto 4",price: 300},
    {name: "Producto 5",price: 300},
    {name: "Producto 6",price: 300},
    {name: "Producto 1",price: 200,},
    {name: "Producto 2",price: 300},
    {name: "Producto 3",price: 300},
    {name: "Producto 4",price: 300},
    {name: "Producto 5",price: 300},
    {name: "Producto 6",price: 300},
];

function createItemCart(){
    let compra = localStorage.getItem("Compra")
    JSON.parse(compra);
    //////
    compra.map(compra => {
        const itemCart = document.createElement("div"),
            itemCartName = document.createElement("p"),
            itemCartPrice = document.createElement("p");
        itemCart.classList.add("item-cart")

        itemCartName.textContent = compra.name;
        itemCartPrice.textContent = compra.price;
        itemCart.appendChild(itemCartName);
        itemCart.appendChild(itemCartPrice);
        GridCart.appendChild(itemCart);
    })
}

