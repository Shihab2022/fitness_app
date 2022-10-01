import React, { useState } from 'react';
import img1 from  '../accets/img1.jpg'
import img2 from  '../accets/img2.jpg'
import img3 from  '../accets/img3.jpg'

const Slider = () => {
    const [first,setFirst]=useState(true)
    const [second,setSecond]=useState(false)
    const [third,setThird]=useState(false)
    const [value,setValue]=useState('')
    const firstMouseIn=(e)=>{
        setFirst(true)
        setSecond(false)
        console.log(e)
        // setThird(!third)
    }
    const firstMouseOut=()=>{
        setFirst(true)
        setSecond(false)
        // setThird(!third)
    }
    const secondMouseIn=()=>{
        setFirst(false)
        setSecond(true)
        setThird(false)
        setValue ('col-start-4 col-end-10')
    }
    const secondMouseOut=()=>{
        setFirst(!first)
        setSecond(!second)
        // setThird(!third)
    }
    const thirdMouseIn=()=>{
        setFirst(false)
        setSecond(true)
        setThird(!third)
        setValue('col-start-4 col-end-8')

    }
    const thirdMouseOut=()=>{
        setFirst(!first)
        setSecond(!second)
        setThird(!third)
    }

    return (
        <div className=' md:px-24 px-5 py-5 mt-8  md:mt-20'>
      
         <div>
            <h1 className='md:text-5xl text-2xl py-5'>Runner's workout</h1>
            <div className='grid grid-cols-12 '>

                <div className={`relative   ${!first ? 'col-start-1 col-end-4' : 'col-start-1 col-end-6' } `}>
                <img onMouseEnter={()=>firstMouseIn("cols-5 clos-8")} onMouseOut={()=>firstMouseOut()} className='md:h-[450px] h-[250px] rounded-l-xl' src={img1} alt="" />
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                    <h2 className='col-start-2 col-end-5 text-xl font-bold  text-zinc-700'>STRENGTH</h2>
                    {
                        first &&<h5 className='col-start-12 col-end-13 text-2xl   font-bold text-center ml-6 text-white rounded-full'>  > </h5>
                    }
                </div>
                </div>

                <div className={`relative duration-700  ${   second ? value : 'col-start-6 col-end-10' } `}>
                <img onMouseEnter={()=>secondMouseIn()} onMouseOut={()=>secondMouseOut()} className='md:h-[450px] h-[250px]'  src={img2} alt="" />
                
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                    <h2 className='col-start-2 col-end-5 text-xl font-bold  text-zinc-700'>MOBILITY</h2>
                    {
                        second &&<h5 className='col-start-12 col-end-13 text-2xl   font-bold text-center ml-6 text-white rounded-full'>  > </h5>
                    }
                </div>
                </div>

                <div className={`relative duration-700 ${third ? 'col-start-8  col-end-13' : 'col-start-10 col-end-13' } `}>
                <img onMouseEnter={()=>thirdMouseIn()} onMouseOut={()=>thirdMouseOut()} className='md:h-[450px] h-[250px] rounded-r-xl' src={img3} alt="" />
                
                <div className='absolute top-5 grid grid-cols-12 justify-end items-center left-5'>
                    <h2 className='col-start-2 col-end-5 text-xl font-bold  text-white'>DRILLS</h2>
                    {
                        !third &&<h5 className='col-start-12 col-end-13 text-2xl   font-bold text-center ml-6 text-red-800 rounded-full'>  > </h5>
                    }
                </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default Slider;