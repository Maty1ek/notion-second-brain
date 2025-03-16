import {
    Activity,
    Archive,
    Book,
    BookOpen,
    Box,
    CircleDollarSign,
    Copy,
    Crosshair,
    Flag,
    Gamepad2Icon,
    HomeIcon as House,
    Lightbulb,
    Link,
    Shield,
    Smartphone,
    SquareCheck,
    SquarePen,
    Swords,
    Tag,
    Trophy,
} from "lucide-react"

const FeaturesSection = () => {
    const gridItemsData = [
        {
            icon: House,
            title: "Dashboard",
            description: "Quickly review and manage everything in one place!",
        },
        {
            icon: Copy,
            title: "Life Areas",
            description: "Effortlessly manage the different facets of your life",
        },
        {
            icon: Crosshair,
            title: "Goals System",
            description: "Monitor your progress and reach your goals with ease",
        },
        {
            icon: Flag,
            title: "Milestones",
            description: "Stay focused by turning goals into clear, achievable milestones.",
        },
        {
            icon: Box,
            title: "Projects Mananger",
            description: "Keep your projects organized and on track with ease",
        },
        {
            icon: SquareCheck,
            title: "Tasks Manager",
            description: "Your go-to system for managing tasks and tracking progress",
        },
        {
            icon: Swords,
            title: "Habits War",
            description: "Battle good habits against bad ones.",
        },
        {
            icon: CircleDollarSign,
            title: "Finance Tracker",
            description: "Organize your income, expenses, sub and more.",
        },
        {
            icon: Tag,
            title: "Topics",
            description: "Effortlessly track your interests by organizing them into topics",
        },
        {
            icon: Link,
            title: "Resources",
            description: "Collect and access resources that fuel your productivity",
        },
        {
            icon: SquarePen,
            title: "Notes Capture",
            description: "Capture your thoughts and ideas in one place",
        },
        {
            icon: Lightbulb,
            title: "Ideas Store",
            description: "Visual representations of your goals and achievements",
        },
        {
            icon: Book,
            title: "Books tracker",
            description: "Your space for organizing and reflecting on your reads",
        },
        {
            icon: BookOpen,
            title: "Reading Log",
            description: "Track your reading to stay consistent.",
        },
        {
            icon: SquarePen,
            title: "Journaling",
            description: "Your daily tool for reflection and personal insight",
        },
        {
            icon: Smartphone,
            title: "Mobile optimization",
            description: "Effortlessly manage your tasks with our mobile-optimized interface",
        },
        {
            icon: Trophy,
            title: "Rewards System",
            description: "Earn rewards for completing tasks, habits, journal, projects goals and more.",
        },
        {
            icon: Activity,
            title: "Daily Activities",
            description: "See today's progress from completed tasks, habits, and journaling.",
        },
        {
            icon: Shield,
            title: "Advanced Properties",
            description: "Get better insights with smarter data organization and filtering.",
        },
        {
            icon: Gamepad2Icon,
            title: "Game Mode",
            description: "Turn your Second Brain template into a fun productivity game.",
        },
        {
            icon: Archive,
            title: "Archives",
            description: "Efficiently store and find your past work from tasks, projects…etc when needed.",
        },
    ]
    return (
        <section id="features" className="text-white flex flex-col items-center pb-10 sm:pb-12 md:pb-[80px] w-full">
            <h1 className="text-3xl sm:text-4xl md:text-[55px] font-bold mb-8 sm:mb-10 md:mb-[70px] text-center">
                <span className="text-[#ff3399]">Second Brain 6.0</span> Features
            </h1>
            <div className="features_grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-x-[20px] md:gap-y-[35px] px-4">
                {gridItemsData.map((item, index) => {
                    const ItemIcon = item.icon
                    return (
                        <div
                            key={index}
                            className="features_grid_cardd flex gap-2 sm:gap-[5px] bg-[#121412] w-full sm:w-[300px] rounded-[15px] box-border p-4 sm:p-[20px]"
                        >
                            <div className="fueatures_card_icon bg-[#20211f] w-10 h-10 sm:w-[45px] sm:h-[45px] rounded-[10px] flex items-center justify-center text-[#ec0e8d] mr-2 sm:mr-[10px] flex-shrink-0">
                                <ItemIcon size={18} />
                            </div>
                            <div className="features_card_item_info">
                                <h2 className="font-semibold text-base sm:text-[18px]">{item.title}</h2>
                                <p className="text-xs sm:text-[15px] text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FeaturesSection

