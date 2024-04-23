import { useState } from "react"

const AddProduct = ({ products }) => {
    const [product, setProduct] = useState('');
    const [model, setModel] = useState(0);
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = () => {
      const pid = products.length + 1;
      const newProduct = {
        id: pid,
        product,
        price,
        model,
        approved: false,
        avaialble: true,
        image,
        description,
      }
      console.log(newProduct);
    }
  


  return (
    <div className="addproduct">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="product">Product Name</label>
        <br />
        <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}            
        />
        <br />
        <label htmlFor="price">Price</label>
        <br />
        <input
         type="text"
         value={price}
         onChange={(e) => setPrice(e.target.value)}
          />
          <br />
        <label htmlFor="model">Model</label>
        <br />
        <input
         type="text"
         value={model}
         onChange={(e) => setModel(e.target.value)}
          />
          <br />
        <label htmlFor="image">Product Image</label>
        <br />
        <input
         type="file"
         value={image}
         onChange={(e) => setImage(e.target.value)}
          />
          <br />
        <label htmlFor="description">Description</label>
        <br />
        <input
         type="textarea"
         value={description}
         onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <button onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct