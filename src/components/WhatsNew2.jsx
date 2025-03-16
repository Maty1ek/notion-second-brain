import React from 'react'

const WhatsNew2 = ({ title, description, img, right }) => {
    return (
        <div className="whats_new_type_1 text-white flex items-center justify-between mb-[130px]">
            <div className={`whatsnew_card_img ${right ? 'hidden' : 'block'} w-[470px]`}>
                <img src={`${img}`} alt="" className='rounded-[15px] w-full' />
            </div>
            <div className="whatsnew_card_info w-[45%]">
                <h1 className='text-[55px] font-bold mb-[10px]' >{title}</h1>
                <p className='text-gray-300 mb-[60px] text-[15px]'>{description}</p>
            </div>
            <div className={`whatsnew_card_img ${right ? 'block' : 'hidden'} w-[470px]`}>
                <img src={`${img}`} alt="" className='rounded-[15px] w-full' />
            </div>
        </div>
    )
}

export default WhatsNew2