
// export function createItemShop(btn,val){
//     if(btn == val.name){
//         cleanHTML(shopContainerGrid)
//         for(let i=0; i < val.products.length;i++){
//             const itemShop = document.createElement("div");
//             itemShop.classList.add("item")
//             itemShop.innerHTML = `
//                 <h3>${val.products[i].name}</h3>
//             `;
//             shopContainerGrid.appendChild(itemShop);
//         }
//     }
// };

export function createItems(arr, elem){ // Crea card de los productos //
    for(let i=0; i < arr.length;i++){
        const item = document.createElement("div");
        item.setAttribute("category",arr[i].category);
        item.classList.add("item");
        item.innerHTML = `
        <h3>${arr[i].name}</h3>
        <img src=${arr[i].img}>
        <p class="item-description">${arr[i].description}</p>
        <span>${arr[i].price} $</span>
        <button class="buy-btn">Comprar</button>
        `
        elem.appendChild(item);
    }
}

export function itemFilter(node,val){ // Filtra los productos del shop a travez de los botones //
    if(val != undefined){
        for(let j=0; j<node.length;j++){
            node[j].classList.add("item");
            node[j].classList.remove("item-hide");
            if(node[j].getAttribute("category") != val){
                node[j].classList.remove("item");
                node[j].classList.toggle("item-hide");
            }
            if(val == "shop"){
                node[j].classList.add("item");
                node[j].classList.remove("item-hide");
            }
            console.log(node[j].getAttribute("category"));
        }
    }
}

export function FilterInput(node,val){
    for(let l=0; l<node.length; l++){
        node[l].classList.toggle("item");
        node[l].classList.add("item-hide");
        if(node[l].children[0].textContent.includes(val)){
            node[l].classList.add("item");
            node[l].classList.remove("item-hide");
        }
    }
    
}