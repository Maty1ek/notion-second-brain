"use client"

const Button = ({ className, children, onClick }) => {
    return (
        <button className={`rounded-full font-medium py-3 px-8 text-lg transition-colors ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default function CTASection() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="bg-[#111] rounded-3xl p-12 text-center">
                <h2 className="text-[50px] font-bold text-white mb-6">Ready to Organize Your life?</h2>
                <p className="text-zinc-400 text-[18px] max-w-2xl mx-auto mb-8">
                    Join thousands of customers worldwide who trust OlsNotion to simplify their lives, organize it.
                </p>
                <Button className="rounded-full bg-[#ff3399] px-8 py-3 font-bold text-white hover:bg-[#ff66b2]">Get the Template</Button>
            </div>
        </div>
    )
}

