import ProductItem from "./ProductItem"

const ProductList = ({ products }) => {
    return (
        <main className="product-list-container">
            <ul className="product-list">
                {
                    products.map((product) => (
                        <ProductItem product={product} key={product.id}/>
                    ))
                }
            </ul>
        </main>
    )
}

export default ProductList
