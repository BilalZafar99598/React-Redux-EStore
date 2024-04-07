import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
    const { id } = useParams();
    const items = products.find((item) => (item.id).toString() === id);
    console.log(items);
    console.log(`Item ID: ${id}`);
  return (
    <div>
        <h2>Product Detail With Full Description</h2>
        <img className='prod-img' src={items.img} alt="Image Not Load" />
            <p className="product-page"><span>
                {items.product}
            </span></p>
        <p><span className="price">
            {items.price}
        </span></p>
        <p><span className="model">
            {items.model}
        </span></p>
        <p>
            {items.approved ? (<span className='yes'>Approved</span>) : (<span className='no'>Non-PTA</span>)}
        </p>

    </div>
  )
}

export default ProductPage
