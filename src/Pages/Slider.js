import React, { useState } from 'react';
import img1 from  '../accets/img1.jpg'
import img2 from  '../accets/img2.jpg'
import img3 from  '../accets/img3.jpg'

const Slider = () => {
    const [first,setFirst]=useState(false)
    const [second,setSecond]=useState(false)
    const [third,setThird]=useState(false)
    const firstMouseIn=()=>{
        setFirst(true)
        setSecond(false)
        setThird(false)
    }
    const secondMouseIn=()=>{
        setFirst(false)
        setSecond(true)
        setThird(false)
    }
    const thirdMouseIn=()=>{
        setFirst(false)
        setSecond(false)
        setThird(true)
    } 
    const mouseOut=()=>{
        setFirst(false)
        setSecond(false)
        setThird(false)
    }
 

    return (
        <div className=' md:px-24 px-5 py-5 mt-8  md:mt-20'>
      
         <div> 
            <h1   className='md:text-5xl text-2xl py-5'>Runner's workout</h1>
            <div className='flex'>

                <div   className={`relative`}>
                <img  onMouseEnter={()=>firstMouseIn()} onMouseOut={()=>mouseOut()} className='md:h-[450px] w-[550px] hover:w-[800px] duration-1000 delay-150 h-[250px] rounded-l-xl ' src={img1} alt="" />
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                    <h2 className='col-start-2 col-end-5 text-xl font-bold  text-zinc-700'>STRENGTH</h2>
                    {
                        first &&<h5 className='col-start-12 col-end-13 text-2xl   font-bold text-center ml-6 text-white rounded-full'>  > </h5>
                    }
                </div>
                </div>

                <div className={`relative `}>
                <img onMouseEnter={()=>secondMouseIn()} onMouseOut={()=>mouseOut()} className='md:h-[450px] h-[250px] w-[550px] hover:w-[800px] delay-150 duration-1000'  src={img2} alt="" />
                
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                    <h2 className='col-start-2 col-end-5 text-xl font-bold  text-zinc-700'>MOBILITY</h2>
                    {
                        second &&<h5 className='col-start-12 col-end-13 text-2xl   font-bold text-center ml-6 text-white rounded-full'>  > </h5>
                    }
                </div>
                </div>

                <div className={`relative `}>
                <img onMouseEnter={()=>thirdMouseIn()} onMouseOut={()=>mouseOut()} className='md:h-[450px] h-[250px] rounded-r-xl w-[550px] hover:w-[800px] delay-150 duration-1000' src={img3} alt="" />
                
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                    <h2 className='col-start-2 col-end-5 text-xl font-bold  text-white'>DRILLS</h2>
                    {
                        third &&<h5 className='col-start-12 col-end-13 text-2xl   font-bold text-center ml-6 text-red-800 rounded-full'>  > </h5>
                    }
                    
                </div>
                </div>
            </div>
         </div>

        </div>
    );
};

export default Slider;