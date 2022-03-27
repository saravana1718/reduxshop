import React from 'react';
import { setProducts } from '../redux/actions/Productactions';
import axios from 'axios';
import{useSelector,useDispatch} from "react-redux"

import { useEffect } from 'react';
import{Link} from "react-router-dom"
function Home() {
    const product=useSelector((state)=>state.allProducts.products)
    console.log(product)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
     
      const response = await axios.get("https://fakestoreapi.com/products");
        
        // .catch((err) => {
        //   console.log("Err: ", err);
        // });
      dispatch(setProducts(await response.data));
     
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
   
    
    const render=product.map(e=>{

      const { id, title, image, price, category } = e;

    return(
      
      <Link to={`/${id}`}>
      <div style={{height:"9rem" ,width:"13rem"}} >
        <img src={image} style={{height:"70px",width:"100px"}}/>
        <p>{title}</p>
        <p>{price}</p>
        <p>{category}</p>
      </div>
      </Link>
   
    )
  })
    return (
      <div style={{display:"flex" ,flexWrap:"wrap",height:"150vh",width:"100%"}}  >{render}
      </div>
      );
}

export default Home;