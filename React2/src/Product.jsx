import "./Product.css"

function Product({title, price = -1, quantity, features}){
    return (
        <div className="Product">
            <h1>Name: {title}</h1>
            <h3>Price: {price}</h3>
            <h3>Quantity: {quantity}</h3>
            <ul>
                {features.map((feature) => <li>{feature}</li>)}
            </ul>
        </div>
    )
}

export default Product;