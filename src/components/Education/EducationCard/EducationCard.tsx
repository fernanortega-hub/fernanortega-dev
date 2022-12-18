const EducationCard = ({ title, subtitle, content, years }: any) => (
    <div className="p-4 rounded-xl bg-surface1 shadow-md space-y-3 xl:w-full xl:h-full">
        <div className="space-y-1">
            <p className="text-primary text-base"> {title} </p>
            <p className="text-onSurfaceVariant text-xs"> {subtitle} </p>
        </div>
        <p className="text-onSurface text-sm"> {content} </p>
        <p className="text-onSurface text-sm"> {years} </p>
    </div>
)

export default EducationCard;