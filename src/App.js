import ProductList from "./ProductList"
import { useState } from 'react';
import './App.css';
import {ecomContext} from "./Context"
import Cart from "./Cart"
import productsData from "./data/products.json"
import {BrowserRouter ,Link, Route} from "react-router-dom"
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
 
  const [cart ,setcart] =useState([])
  function myCart(id){
  
    let temp=productsData.find((value)=>{
       if(value.id===id){
         return true;
       }
       else {
         return false
       }
     });
     
    

setcart([...cart,temp]
)
console.log("product",cart)



  }


  return (
    <div>

<BrowserRouter>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
     <Link to="cart">Cart</Link>
      </li>
     
    </ul>
  </div>
</nav>
</div>
            <Route exact path="/cart" component={Cart} />
            
        <div><ProductList handler={myCart} /> </div>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
