import React from 'react'    
import BannerImg from '../../img/banners.svg'


const BannerSection = () => {
    return ( 
        <div className="banner flex justify-between items-center h-screen">
            <div className="w-1/2 bannerText ">
                <h1>Hi, I am <br /> Oyindamola Bakare</h1>
                <p className='py-6'>Frontend Developer</p>
                <div className="btns">
                    <button className='bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4  border border-solid border-transparent border-1'>Download CV</button>
                    <button className='bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 mx-2 border border-white border-solid border-1'>Learn More</button>
                </div>
            </div>
            <div className="w-1/2 bannerImg">
                <img src={BannerImg} alt="" />
            </div>
        </div>
    )
}

export default BannerSection