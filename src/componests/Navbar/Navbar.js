import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assets/logos.png'
import cart_icon from '../Assets/cart.png'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")

  const {getTotalCartItem} = useContext(ShopContext);

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="Logo" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            {/* <li>Shop <hr /></li> */}
            <li onClick={()=>{setMenu("shop")}}> <Link to='/'>Shop</Link>  {menu==="shop"?<hr/>:""} </li>
            <li onClick={()=>{setMenu("men")}}> <Link to='/mens'>Men</Link> {menu==="men"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("women")}}> <Link to='/womens'>Women</Link> {menu==="women"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("kids")}}> <Link to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>} </li>
        </ul>
        <div className="nav-loging-cart">
         <Link to='/login'><button>Login</button></Link> 
          <Link to='cart'><img src={cart_icon} alt="Cart-Icon" /></Link> 
          <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
    </div>

  )
}

export default Navbar
