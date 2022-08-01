
export function createItems(arr, elem){ // Crea card de los productos //
    for(let i=0; i < arr.length;i++){
        const item = document.createElement("div");
        item.setAttribute("category",arr[i].category);
        item.setAttribute("id",arr[i].id)
        item.classList.add("item");
        item.innerHTML = `
        <h3>${arr[i].name}</h3>
        <img src=${arr[i].img}>
        <p class="item-description">${arr[i].description}</p>
        <span>${arr[i].price} $</span>
        <div>
            <button class="buy-btn" value="buyBtn">Comprar</button>
            <input type="number" min=1 value=1>
        </div>
        `
        elem.appendChild(item);
    }
}

export function itemFilter(node,val){ // Filtra los productos del shop a travez de los botones //
    if(val != undefined){
        for(let j=0; j<node.length;j++){
            node[j].classList.remove("item");
            node[j].classList.add("item-hide");
            if(node[j].getAttribute("category") == val){
                node[j].classList.add("item");
                node[j].classList.remove("item-hide");
            }
            if(val == "shop"){
                node[j].classList.add("item");
                node[j].classList.remove("item-hide");
            }
            // console.log(node[j].getAttribute("category"));
        }
    }
}

export function FilterInput(node,val){
    let inputValue = val.toLowerCase()
    node.forEach(elem => {
        const isVisible = elem.children[0].textContent.toLowerCase().includes(inputValue)
        elem.classList.toggle("item",isVisible);
        elem.classList.toggle("item-hide",!isVisible);          
    })
};
