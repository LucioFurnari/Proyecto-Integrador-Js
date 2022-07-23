
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

// let objitem = new itemCart("Chocolate Negro",150,2);
