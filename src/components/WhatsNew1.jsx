import React from 'react'

const WhatsNew1 = ({title, description, img}) => {
  return (
      <div className="whats_new_type_1 text-white flex flex-col items-center text-center w-[660px] mb-[130px]">
          <h1 className='text-[55px] font-bold mb-[10px]'>{title}</h1>
          <p className='text-gray-300 mb-[60px] text-[15px]'>{description}</p>
          <img src={`${img}`} alt="" className='rounded-[15px]'/>
      </div>
  )
}

export default WhatsNew1