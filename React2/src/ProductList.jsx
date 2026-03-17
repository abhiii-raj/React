import Product from "./Product.jsx"

function ProductList(){
    return (
        <>
            <Product title="Mobile" price={30000} quantity={2}/>
            <Product title="Laptop" price={45000} quantity={1} />
            <Product title="Clothes" price={4500} quantity={1}/>
        </>
    )
}

export default ProductList;