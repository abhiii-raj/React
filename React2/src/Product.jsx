import "./Product.css"

function Product({title, price = -1, quantity}){
    return (
        <div className="Product">
            <h1>Name: {title}</h1>
            <h3>Price: {price}</h3>
            <h3>Quantity: {quantity}</h3>
        </div>
    )
}

export default Product;