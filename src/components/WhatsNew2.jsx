const WhatsNew2 = ({ title, description, img, right }) => {
    return (
        <div className="whats_new_type_1 text-white flex flex-col md:flex-row items-center mb-16 sm:mb-20 md:mb-[130px]  px-4">
            <div
                className={`whatsnew_card_img ${right ? "hidden md:block order-2" : "block order-1"} w-full sm:w-[80%] md:w-[470px]`}
            >
                <img src={`${img}`} alt="" className="rounded-[15px] w-full" />
            </div>
            <div className="whatsnew_card_info  md:w-[45%] order-1 md:order-none">
                <h1 className="text-3xl sm:text-4xl md:text-[55px] font-bold mb-4 sm:mb-[10px]">{title}</h1>
                <p className="text-gray-300 mb-8 sm:mb-10 md:mb-[60px] text-sm sm:text-[15px]">{description}</p>
            </div>
            <div className={`whatsnew_card_img ${right ? "block md:hidden" : "hidden"}  sm:w-[80%] order-2`}>
                <img src={`${img}`} alt="" className="rounded-[15px] w-full" />
            </div>
        </div>
    )
}

export default WhatsNew2

