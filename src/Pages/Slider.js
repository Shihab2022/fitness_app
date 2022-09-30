import React from 'react';
import img1 from  '../accets/img1.jpg'
import img2 from  '../accets/img2.jpg'
import img3 from  '../accets/img3.jpg'
import img4 from  '../accets/img4.jpg'

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
        },
        {
            id : 324455,
            image : img4,
            name:"Fourth Image"
        }
    ]
    return (
        <div className='text-5xl font-bold text-red-700 mt-20'>
            <h2>this is silder page</h2>
            {
                fakeData.map(d=><>
                
                <img src={d.image} alt="" />
                </>)
            }
        </div>
    );
};

export default Slider;