import React, { useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct} from '../redux/actions/Productactions';
function Details(props) {
    const {productid}=useParams()
    let product = useSelector((state) => state.product);
    
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (productid && productid !== "") fetchProductDetail(productid);
        
      }, [productid]);
      console.log(product)
    return (
        <div style={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
             {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (<div style={{height:"15rem" ,width:"13rem"}}>
      <img src={image} style={{height:"200px",width:"150px"}}/>
      <p>{title}</p>
      <p>{price}</p>
      <p>{category}</p>
    </div>)
             }  
        </div>
    );
}

export default Details;