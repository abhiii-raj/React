import Product from "./Product.jsx"

function ProductList(){
    //pre-wrap
    let features = ["hitech","durable","fast"];
    return (
        <>
            <Product 
                title="Mobile" 
                price={30000} 
                quantity={2}
                features={features}
            />
            <Product 
                title="Laptop" 
                price={45000}
                quantity={1}
                features={features}
            />
            <Product 
                title="Clothes"
                quantity={1}
                features={features}
            />
        </>
    )
}

export default ProductList;