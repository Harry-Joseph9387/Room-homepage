import React,{useState} from 'react'
import left from "../images/icon-angle-left.svg"
import right from "../images/icon-angle-right.svg"
import arrow from "../images/icon-arrow.svg"
const items=[
    {
        id:1,
        title:" Discover innovative ways to decorate",
        desc:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        mobile:"./images/mobile-image-hero-1.jpg",
        desktop:"./images/desktop-image-hero-1.jpg"
    },
    {
        id:2,
        title:"We are available all across the globe",
        desc:" With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        mobile:"./images/mobile-image-hero-2.jpg",
        desktop:"./images/desktop-image-hero-2.jpg"
    },
    {
        id:3,
        title:"Manufactured with the best materials",
        desc:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        mobile:"./images/mobile-image-hero-3.jpg",
        desktop:"./images/desktop-image-hero-3.jpg"
    },
]

const Middle = () => {
    const [slideIndex,setSlideIndex]=useState(1)
    function previousSlide(){
        if(slideIndex!==0){
            setSlideIndex(slideIndex-1)
        }
        else{
            setSlideIndex(2)
        }
    }
    function nextSlide(){
        if(slideIndex!=2){
            setSlideIndex(slideIndex+1)
        }
        else{
            setSlideIndex(0)
        }
    }
  return (
    <>
    {items.map((item,index)=>(
        <article key={item.id} className={`${slideIndex===index?"grid grid-cols-1 lg:grid-cols-2 flex items-center":"hidden" }`}>
            <div className="relative">
                <picture className=''>
                    <source media="(min-width:768px)" srcSet={item.desktop}/>
                    <img src={item.mobile} className="w-full" alt=""/>
                </picture>
                <div className="absolute right-0 bottom-0">
                    <button onClick={previousSlide} className="bg-black p-4"><img src={left} alt=""/></button>
                    <button onClick={nextSlide} className="bg-black p-4"><img src={right} alt=""/></button>
                </div>
            </div>
            <div className="p-12">
                <h1 className="text-5xl">{item.title}</h1>
                <p className="py-6">{item.desc}</p>
                <button className="flex items-center" style={{letterSpacing:"0.75rem"}}>Shop Now<img src={arrow} alt=""/></button>
            </div>
        </article>
    ))}
    </>
  )
}

export default Middle