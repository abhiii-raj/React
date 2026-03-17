import Product from "./Product.jsx"

function ProductList(){
    return (
        <>
            <Product title="Mobile" price={30000}/>
            <Product title="Laptop" price={45000}/>
            <Product title="Clothes" price={4500}/>
        </>
    )
}

export default ProductList;