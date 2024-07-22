import React from 'react'
import dark from "../images/image-about-dark.jpg"
import light from "../images/image-about-light.jpg"

const Bottom = () => {
  return (
    <>
        <div className="lg:flex">
            <img src={light} alt="" className="w-full"/>
            <div className="p-12">
                <h4 style={{letterSpacing:"0.5rem"}} className="font-bold mb-4">ABOUT OUR FURNITURE</h4>
                <p>Our multifunctional collection blends design and function to suit your individual taste.
  Make each room unique, or pick a cohesive theme that best express your interests and what
  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
  or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
            <img src={dark} alt=""className="w-full"/>
        </div>
    </>
)
}

export default Bottom