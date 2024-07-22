import React,{useState} from 'react'
import logo from "../images/logo.svg"
import menu from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"
const Top = () => {
  const[isOpen,setIsOpen]=useState(false)
  
  return (
    <>
        <div className="absolute z-10 flex items-center lg:justify-start justify-center w-full p-8 bg-transparent">
            <img className="mr-8" src={logo} alt=""/>
            <div className={`${isOpen?"w-full bg-black lg:bg-transparent  absolute lg:relative lg:h-auto h-screen bg-opacity-75 top-0 left-0 right-0 bottom-0":"hidden"}lg:bg-transparent`}>
              <nav className={`${isOpen?"p-8 bg-white lg:bg-transparent":"bg-transparent"}`}>
                  {/* <ul className={isOpen?" flex gap-6 items-center lg:justify-start  justify-center " :""}> */}
                  <ul className={`flex gap-6 items-center justify-center  ${isOpen?"lg:hidden":"hidden lg:flex"}`}>
                      <li className="lg:text-white"><a href="">Home</a></li>
                      <li className="lg:text-white"><a href="">Shop</a></li>
                      <li className="lg:text-white"><a href="">About</a></li>
                      <li className="lg:text-white"><a href="">Contact</a></li>
                  </ul>
              </nav>
            </div>
        </div>
        <div className="absolute z-10 left-8 top-6 lg:hidden">
          {
            isOpen?<button onClick={()=>setIsOpen(false)}><img src={close} alt=""/></button>
            :<button onClick={()=>setIsOpen(true)}><img src={menu} alt=""/></button>
          }
        </div>
    </>

  )
}

export default Top