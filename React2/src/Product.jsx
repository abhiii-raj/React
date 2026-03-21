import "./Product.css"

function Product({ title, price, quantity }) {
    let isDiscount = price > 30000 ? true : false;
    return (
        <div className="Product">
            <h1>Name: {title}</h1>
            <h3>Price {price}</h3>
            {/* <h3>{price > 30000 ? "Discount of 5%" : null}</h3> */}
            {isDiscount && <h3>Discount of 5%</h3>}
            {isDiscount && (
                <h3>Price after discount: {price - price * 0.05}</h3>
            )}
            <h3>Quantity: {quantity}</h3>
        </div>
    )
}

export default Product;