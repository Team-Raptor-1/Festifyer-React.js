import React from 'react'
import "../styles/Navbar.css"


const Navbar = () => {
  return (
    <>
      <nav>
      <img src="https://www.festifyer.com/storage/system/6fYpjT6r6ugsHt5aYXOm59JeRHk7OslnDU3yktbl.png" alt="alternative"/>
        <div>
          <ul id='navbar' >
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Contact</a></li>
            <button>Login</button>
            
          </ul>
        </div>

        <div id="mobile" >
          <i id='bar' ></i>
          {/* <i class='bx bx-x'></i> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar;