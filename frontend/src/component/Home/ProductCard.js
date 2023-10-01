import React from 'react'
import {Link} from "react-router-dom"
import { Rating } from "@material-ui/lab";

const ProductCard = ({product}) => {

const options = {
  value:product.ratings,
  readOnly: true,
  precision: 0.5,
};

  return (
     <Link className="productCard" to={`/product/${product._id}`}>

        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <Rating {...options} />  <span class="productCardSpan"> ({product.numOfReviews} Reviews) </span>
        </div>
        <h6 style={{color:'white',backgroundColor:"blueviolet",width:"15%",paddingLeft:"3px",borderRadius:"5%"}}>Rent</h6>
        <span>{`₹${product.price}/month`}</span>
     </Link>
  )
}

export default ProductCard