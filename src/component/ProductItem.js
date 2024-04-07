import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {
  return (
    <div className='list-container'>
        <li>
            <img className='prod-img' src={product.img} alt="Image Not Load" />
            <p className="product"><span>
                <Link to={`item/${product.id}`}>
                {product.product}
                </Link>
            </span></p>
            {/* <p><span className="price">{product.price}</span></p> */}
        </li>
    </div>
  )
}

export default ProductItem
