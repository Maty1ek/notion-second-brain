import { Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 px-[180px]">
            <div className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                                <img src="/placeholder.svg?height=40&width=40" alt="OlsNotion" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[24px] font-semibold">OlsNotion</span>
                        </div>
                        <p className="text-gray-400 text-[14px]">Experience financial transformation like never before with Fintec.</p>
                        <div className="flex gap-4">
                            <a href="#" className="text-[#FF1493] hover:text-[#FF1493]/80">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-[#FF1493] hover:text-[#FF1493]/80">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Explore More */}
                    <div className="space-y-6">
                        <h3 className="text-[24px] font-semibold">Explore More</h3>
                        <ul className="space-y-3 text-[14px]">
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
                    <div className="space-y-6">
                        <h3 className="text-[24px] font-semibold">Contact Us</h3>
                        <ul className="space-y-3 text-[14px]">
                            {["Twitter", "insatgram"].map((item) => (
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
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <p className="text-gray-400">© 2023 OlsNotion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

