import { Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-[180px] w-full">
            <div className="mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white overflow-hidden">
                                <img src="/placeholder.svg?height=40&width=40" alt="OlsNotion" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-lg sm:text-xl md:text-[24px] font-semibold">OlsNotion</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-[14px]">
                            Experience financial transformation like never before with Fintec.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-[#FF1493] hover:text-[#FF1493]/80">
                                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                            <a href="#" className="text-[#FF1493] hover:text-[#FF1493]/80">
                                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Explore More */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold">Explore More</h3>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-[14px]">
                            {[
                                "Free & Premium Templates",
                                "Ultimate Notion Pack",
                                "Full time Creator Template",
                                "Ultimate Student Template",
                                "Best Starter template",
                                "Gumroad",
                                "LemonSquezzy",
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold">Contact Us</h3>
                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-[14px]">
                            {["Twitter", "Instagram"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
                    <p className="text-gray-400 text-xs sm:text-sm">© 2023 OlsNotion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

