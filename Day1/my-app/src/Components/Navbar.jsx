import React from 'react'
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
   <>
   <div className={style.box}>
       <div className={style.logo}>LOGOBAKERY</div>
       <div className={style.links}>
           <p>Services</p>
           <p>Projects</p>
           <p>About</p>
       </div>
       <div className={style.button}><button className={style.btn} >Contact Us</button></div>
   </div>
   </>
  )
}

export default Navbar
