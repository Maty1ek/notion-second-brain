import { Check, X } from "lucide-react"

// Custom Card Components
const Card = ({ className, children }) => {
    return <div className={`rounded-lg  ${className}`}>{children}</div>
}

const CardHeader = ({ className, children }) => {
    return <div className={`p-6 ${className}`}>{children}</div>
}

const CardContent = ({ className, children }) => {
    return <div className={`px-6 pb-2 ${className}`}>{children}</div>
}

const CardFooter = ({ className, children }) => {
    return <div className={`p-6 pt-2 ${className}`}>{children}</div>
}

// Custom Button Component
const Button = ({ className, size, children, onClick }) => {
    const sizeClasses = {
        lg: "py-3 px-4 text-lg",
        md: "py-2 px-4 text-base",
        sm: "py-1 px-3 text-sm",
    }

    return (
        <button
            className={`rounded-full font-medium transition-colors ${sizeClasses[size] || sizeClasses.md} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default function PricingSection() {
    const plans = [
        {
            name: "Second Brain 4.0",
            subtitle: "Budget friendly Option",
            originalPrice: "$59.99",
            price: "$49.99",
            features: {
                included: ["Life time updates", "Video tutorial", "Aesthetic (1 Style)\nPink and Purple", "New Properties"],
                excluded: ["Rewards System", "Simple Mode", "Milestones", "Habits War", "Daily Activities", "Game Mode"],
            },
        },
        {
            name: "Second Brain 6.0",
            subtitle: "Best Option for Maximum Productivity",
            originalPrice: "$79.99",
            price: "$69.99",
            popular: true,
            features: {
                included: [
                    "Life time updates",
                    "Video tutorial",
                    "Aesthetic (3 Styles)",
                    "New Properties",
                    "Rewards System",
                    "Simple Mode",
                    "Milestones",
                    "Habits War",
                    "Daily Activities",
                    "Game Mode",
                ],
                excluded: [],
            },
        },
        {
            name: "Second Brain 5.0",
            subtitle: "Normal Version",
            originalPrice: "$69.99",
            price: "$59.99",
            features: {
                included: [
                    "Life time updates",
                    "Video tutorial",
                    "Aesthetic (2 Styles)\nMinimal + Pink & Purple",
                    "New Properties",
                    "Rewards System",
                    "Simple Mode",
                ],
                excluded: ["Milestones", "Habits War", "Daily Activities", "Game Mode"],
            },
        },
    ]

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <Card
                        key={plan.name}
                        className={`relative bg-[#111] border border-[#222] ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="bg-[#FF1493] text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                            </div>
                        )}
                        <CardHeader className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                            <p className="text-zinc-400">{plan.subtitle}</p>
                            <div className="space-y-1">
                                <span className="text-zinc-500 line-through text-lg">{plan.originalPrice}</span>
                                <div className="text-[#FF1493] text-4xl font-bold">{plan.price}</div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {plan.features.included.map((feature) => (
                                <div key={feature} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-[#FF1493] shrink-0 mt-0.5" />
                                    <span className="text-white whitespace-pre-line">{feature}</span>
                                </div>
                            ))}
                            {plan.features.excluded.map((feature) => (
                                <div key={feature} className="flex items-start gap-2">
                                    <X className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                                    <span className="text-zinc-600">{feature}</span>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <Button
                                className={`w-full ${plan.popular
                                        ? "bg-[#FF1493] hover:bg-[#FF1493]/90 text-white"
                                        : "bg-transparent text-white border border-white hover:bg-white hover:text-black"
                                    }`}
                                size="lg"
                            >
                                I want this
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

