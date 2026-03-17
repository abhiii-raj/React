import Product from "./Product.jsx"

function ProductList(){
    // let features = ["hitech", "durable", "fast"];
    return (
        <>
            <Product 
                title="Mobile" 
                price={30000} 
                quantity={2}
                // features = {features}
                features = {["hitech", "durable", "fast"]}
            />
            <Product 
                title="Laptop" 
                price={45000}
                quantity={1}
            />
            <Product 
                title="Clothes"
                quantity={1}
            />
        </>
    )
}

export default ProductList;