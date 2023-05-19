import React from 'react'
import '../CSS/Nav.css'
const Nav = () => {

  const btnIn=()=>{
    var navBtn=document.getElementsByClassName('nav_btn_div');
    navBtn[0].style.width='10vw';
    // navBtn[0].style.translateX='4vw';
  }
  const btnOut=()=>{
    var navBtn=document.getElementsByClassName('nav_btn_div');
    navBtn[0].style.width="50px";
    // navBtn[0].style.translateX='initial';
  }
  return (
    <>
    <div className='nav'>
        <div>
            <div></div>
            <div>Prachi</div>
        </div>
        <div>
          <a href="#">Projects</a>
          <a href="#">Services</a>
          <a href="#">UI Shop</a>
          <a href="#">Contacts</a>
        </div>
        <span onMouseMove={btnIn} onMouseOut={btnOut} className='nav_btn'>
          <div className='nav_btn_div'></div>
          <a href='#' id='start-a-project'>Start a Project</a>
        </span>
    </div>
    </>
  )
}

export default Nav;
