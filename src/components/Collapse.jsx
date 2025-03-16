const Collapse = ({ title, answer }) => {
    return (
        <div className="collapse bg-base-100 border-base-300 border w-full">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-sm sm:text-base">{title}</div>
            <div className="collapse-content text-xs sm:text-sm">{answer}</div>
        </div>
    )
}

export default Collapse

