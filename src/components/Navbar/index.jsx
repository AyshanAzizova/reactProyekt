import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const index = () => {
 
  return (
    <header>
      <div className='container'>
        <nav>
          <h6><Link to='/'>PRODUCT<span>.</span></Link></h6>
          <ul>
            <li><Link to='/'>NEW</Link></li>
            <li><Link to='/'>MEN</Link></li>
            <li><Link to='/'>WOMEN</Link></li>
            <li><Link to='/'>ACCESORIES</Link></li>
            <li><Link to='/'>JEWELRY</Link></li>
            <li><Link to='/'>ABOUT</Link></li>
            <li><Link to='/checkout'>CHECKOUT</Link></li>
          </ul>
          <div className='navIcons'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <div className='menu'><i class="fa-solid fa-bars"></i></div>
          </div>
        </nav>
      </div>
      <div className='sidebar'>
        <ul>
          <li><Link to='/'>NEW</Link></li>
          <li><Link to='/'>MEN</Link></li>
          <li><Link to='/'>WOMEN</Link></li>
          <li><Link to='/'>ACCESORIES</Link></li>
          <li><Link to='/'>JEWELRY</Link></li>
          <li><Link to='/'>ABOUT</Link></li>
          <li><Link to='/checkout'>CHECKOUT</Link></li>
        </ul>
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div className='cartbar'>
        <i class="menu fa-solid fa-xmark"></i>
      </div>
    </header>
  )
}

export default index
