
export const cartButton = document.querySelector(".cart-btn"),
cartContainer = document.querySelector(".cart");

export class itemCart {
    constructor(name,price,qnt){
        this.name = name
        this.price = price
        this.qnt = qnt
    }
}

// let objitem = new itemCart("Chocolate Negro",150,2);
