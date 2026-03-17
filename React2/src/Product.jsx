import "./Product.css"

function Product({title, price}){
    return (
        <div className="Product">
            <h1>Name: {title}</h1>
            <h3>Price: {price}</h3>
        </div>
    )
}

export default Product;