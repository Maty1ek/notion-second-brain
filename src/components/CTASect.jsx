
const Button = ({ className, children, onClick }) => {
    return (
        <button
            className={`rounded-full font-medium py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg transition-colors ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default function CTASection() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12 md:py-16">
            <div className="bg-[#111] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-white mb-4 sm:mb-6">
                    Ready to Organize Your life?
                </h2>
                <p className="text-zinc-400 text-sm sm:text-base md:text-[18px] max-w-2xl mx-auto mb-6 sm:mb-8">
                    Join thousands of customers worldwide who trust OlsNotion to simplify their lives, organize it.
                </p>
                <Button className="rounded-full bg-[#ff3399] px-6 py-2 sm:px-8 sm:py-3 font-bold text-white hover:bg-[#ff66b2]">
                    Get the Template
                </Button>
            </div>
        </div>
    )
}

