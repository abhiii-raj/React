import "./Product.css"

function Product({title, price = -1, quantity, features}){
    return (
        <div className="Product">
            <h1>Name: {title}</h1>
            <h3>Price: {price}</h3>
            <h3>Quantity: {quantity}</h3>
            <p>{features}</p>
        </div>
    )
}

export default Product;