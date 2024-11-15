import { useState, useEffect } from "react";
import './App.css';
import Cart from "./Components/Cart/Cart";
import Card from './Components/Card/Card';
const {getData}= require ("./db/db");

const items= getData();

const tele = window.Telegram.WebApp;


function App() {

  const [cartItems,setCartItems]=useState([])
  

  useEffect(()=>{
    tele.ready();
  })

  const onAdd = (items) => {
    const exist = cartItems.find((x) => x.id === items.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === items.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...items, quantity: 1 }]);
    }
  };
  const OnRemove = (items)=>{

    const exist =cartItems.find((x)=> x.id === items.id );

    if(exist.quantity===1){
      setCartItems(cartItems.filter((x) => x.id !== items.id));
    } else{
      setCartItems( cartItems.map((x) => 
        x.id ===items.id ? {...exist,  quantity:exist.quantity-1}:x
      ));
    }
  }
 
  const onCheckout = () => {
    tele.MainButton.text = "Pay :)";
    tele.MainButton.show();
  };
  return (
   <>
   <h1 className='heading'>ORDER DIY </h1>

   <Cart cartItems={cartItems} onCheckout={onCheckout} />
   
   <div className='cards__container'>
   {items.map(items=>{
    
    return <Card items={items} key={items.id} onAdd={onAdd} OnRemove={OnRemove} />
   
   })}
   </div>

  
  
     </>
  );
}

export default App;
