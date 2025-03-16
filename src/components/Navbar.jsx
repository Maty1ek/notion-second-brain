const Navbar = () => {
    return (
        <header className="w-full px-4 py-4 sm:py-6 md:w-[85%]">
            <div className="flex items-center justify-between rounded-full border border-gray-800 bg-black/50 px-3 sm:px-6 py-2 sm:py-3">
                <div className="flex items-center gap-2">
                    <img src="Logo.avif" alt="" className="w-[120px] sm:w-[150px] md:w-[180px]" />
                </div>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-4 lg:gap-8">
                        <li>
                            <a href="#" className="text-[#ff3399] hover:text-[#ff66b2]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-[#ff66b2]">
                                Feature
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-[#ff66b2]">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-[#ff66b2]">
                                About
                            </a>
                        </li>
                    </ul>
                </nav>

                <a
                    href="#"
                    className="rounded-full bg-[#ff3399] px-3 py-1 text-xs sm:px-6 sm:py-2 sm:text-sm font-bold text-white hover:bg-[#ff66b2]"
                >
                    Download Now
                </a>
            </div>
        </header>
    )
}

export default Navbar

