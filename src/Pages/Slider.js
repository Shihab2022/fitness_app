import React, { useState } from 'react';
import img1 from  '../accets/img1.jpg'
import img2 from  '../accets/img2.jpg'
import img3 from  '../accets/img3.jpg'

const Slider = () => {
    const [first,setFirst]=useState(true)
    const firstMouseIn=()=>{
setFirst(!first)

    }
    const firstMouseOut=()=>{
        setFirst(!first)
    }
    const secondMouseIn=()=>{
setFirst(!first)

    }
    const secondMouseOut=()=>{
        setFirst(!first)
    }
    const thirdMouseIn=()=>{
setFirst(!first)

    }
    const thirdMouseOut=()=>{
        setFirst(!first)
    }
    console.log(first)
    return (
        <div className=' px-24 py-5  mt-20'>
      
         <div>
            <h1 className='text-5xl  py-5'>Runner's workout</h1>
            <div className='grid grid-cols-12  '>

                <div className={`relative duration-700 col-start-1 ${first ? 'col-end-6' : 'col-end-4' } `}>
                <img onMouseEnter={()=>firstMouseIn()} onMouseOut={()=>firstMouseOut()} className='h-[450px] w-[1000px] rounded-l-xl' src={img1} alt="" />
                
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                {/* <div className='flex justify-between  items-center px-5'> */}
                    <h2 className='col-start-2 col-end-5'>STRENGTH</h2>
                    <h5 className='col-start-12 col-end-13 text-2xl   font-bold'>  > </h5>
                {/* </div> */}
                </div>
                </div>

                <div className={`relative duration-700  ${first ? 'col-start-6 col-end-9' : 'col-start-4 col-end-9' } `}>
                <img onMouseEnter={()=>secondMouseIn()} onMouseOut={()=>secondMouseOut()} className='h-[450px]' src={img2} alt="" />
                
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                {/* <div className='flex justify-between  items-center px-5'> */}
                    <h2 className='col-start-2 col-end-5'>STRENGTH</h2>
                    <h5 className='col-start-12 col-end-13 text-2xl   font-bold'>  > </h5>
                {/* </div> */}
                </div>
                </div>

                <div className={`relative duration-700 col-start-1 ${first ? 'col-start-9 col-end-12' : 'col-start-9 col-end-13' } `}>
                <img onMouseEnter={()=>thirdMouseIn()} onMouseOut={()=>thirdMouseOut()} className='h-[450px] rounded-r-xl' src={img3} alt="" />
                
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                {/* <div className='flex justify-between  items-center px-5'> */}
                    <h2 className='col-start-2 col-end-5'>STRENGTH</h2>
                    <h5 className='col-start-12 col-end-13 text-2xl   font-bold'>  > </h5>
                {/* </div> */}
                </div>
                </div>
           
            {/* <img className='h-[450px] ' src={img2} alt="" /> */}
            {/* <img className='h-[450px] col-start-9 col-end-13  rounded-r-xl ' src={img3} alt="" /> */}
            </div>
         </div>
        </div>
    );
};

export default Slider;