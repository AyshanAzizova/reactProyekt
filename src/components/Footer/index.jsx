import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <>
      <div className='container'>
        <div className='footer'>
          <ul>
            <h3>Help</h3>
            <li><Link>Contact us</Link></li>
            <li><Link>Account</Link></li>
            <li><Link>Shipping</Link></li>
            <li><Link>Returns</Link></li>
            <li><Link>FAQ</Link></li>
          </ul>
          <ul>
            <h3>About</h3>
            <li><Link>About Us</Link></li>
            <li><Link>Press</Link></li>
            <li><Link>Careers</Link></li>
            <li><Link>Team</Link></li>
            <li><Link>FAQ</Link></li>
          </ul>
          <ul>
            <h3>Shop</h3>
            <li><Link>Store</Link></li>
            <li><Link>Gift Cards</Link></li>
            <li><Link>Student Discount</Link></li>
          </ul>
          <div className='input'>
            <h3>Join our list and receive exclusives</h3>
           <div style={{display:'flex',alignItems:'center'}}><input style={{width:'70%'}} placeholder='Email address' type='email'/><button style={{width:'30%'}}>SUBSCRIBE</button></div>
          </div>
          <p style={{ textAlign: "center",display:'block',width:'100%',margin:'60px 0 0',padding:'20px 0' }}>Copyright ©2024 All rights reserved | This template is made with<span className='heart'><i class='fa-solid fa-heart'></i></span>  by <span style={{borderBottom:"1px solid black"}}>Colorlib</span></p>
        </div>
      </div>
    </>
  )
}

export default index
