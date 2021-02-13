export class Product {
    // id:      Number
    product: String
    price:   Number

    public setProduct(product:Product){
        this.product = product.product
        this.price = product.price
    }

    // public setProducto(product:String, price:Number){
    //     this.product = product
    //     this.price = price
    // }

    public getProduct(){
        return Product
    }

}
