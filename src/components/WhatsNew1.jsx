const WhatsNew1 = ({ title, description, img }) => {
  return (
    <div className="whats_new_type_1 text-white flex flex-col items-center text-center w-full sm:w-[80%] md:w-[660px] mb-16 sm:mb-20 md:mb-[130px] px-4">
      <h1 className="text-3xl sm:text-4xl md:text-[55px] font-bold mb-4 sm:mb-[10px]">{title}</h1>
      <p className="text-gray-300 mb-8 sm:mb-10 md:mb-[60px] text-sm sm:text-[15px]">{description}</p>
      <img src={`${img}`} alt="" className="rounded-[15px] w-full" />
    </div>
  )
}

export default WhatsNew1

