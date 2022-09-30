import React from 'react';
import img1 from  '../accets/img1.jpg'
import img2 from  '../accets/img2.jpg'
import img3 from  '../accets/img3.jpg'

const Slider = () => {
    const fakeData=[
        {
            id : 34455,
            image : img1,
            name:"First Image"
        },
        {
            id : 344554,
            image : img2,
            name:"Second Image"
        },
        {
            id : 344515,
            image : img3,
            name:"Third Image"
        }
    ]
    return (
        <div className=' px-24 py-5  mt-20'>
      
         <div>
            <h1 className='text-5xl  py-5'>Runner's workout</h1>
            <div className='grid grid-cols-3  '>
                <div className='relative '>
                <img className='h-[450px] rounded-l-xl' src={img1} alt="" />
                
                <div className='absolute top-0 justify-between items-center left-0'>
                <div className='flex justify-between  items-center px-5'>
                    <h2>STRENGTH</h2>
                    <span className='text-2xl font-bold'>  > </span>
                </div>
                </div>
               
                </div>
           
            <img className='h-[450px]' src={img2} alt="" />
            <img className='h-[450px] rounded-r-xl ' src={img3} alt="" />
            </div>
         </div>
        </div>
    );
};

export default Slider;