import productData from  "./data/products.json"
import {ecomContext} from "./Context"

import { useState } from 'react';
export default function ProductList(props){
    // let product =[{
    //     id:1,
    //     Name:"nike shoes",
    //     picture:"https://images-na.ssl-images-amazon.com/images/I/61n77B9A7HL._UL1000_.jpg"
    //   },{
    //     id:2,
    //   Name:"addidas shoes",
    //   picture:"https://images-na.ssl-images-amazon.com/images/I/71dI9-Y4tUL._UL1500_.jpg",
    //   }
    //   ,{
    //     id:3,
    //    Name:"Puma shoes",
    //    picture:"https://images-na.ssl-images-amazon.com/images/I/71sfbi31lhL._UL1500_.jpg",
    //    },{
    //      id:4,
    //      Name:"supra shoes",
    //      picture:"https://images-na.ssl-images-amazon.com/images/I/81bu5kgWUoL._UL1500_.jpg",
    //      }
    //  ]
    
     
     const [myproduct,setProducts] =useState(productData)
     console.log("products",myproduct)
    
    function addme(id){
    props.handler(id)
        
    }
     
    
    let productList=myproduct.map((item)=>{
        return <div>
        <ul className="order">
            <li className="listType">
               <h1> {item.Name}</h1>
                <img className="image" src={item.picture} width="400" height="300" /> <button className="addbtn" onClick={()=>{addme(item.id)}} > Add to cart</button>
               
            </li>
        </ul>
        </div>
    })
    console.log("list",productList)
    return <>
{productList}
    </>
}