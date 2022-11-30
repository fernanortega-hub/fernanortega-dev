import React from "react";

const LanguageCard = ({ language, level }: any) => (
    <div className='space-y-2 w-full'>
        <div className='flex flex-row space-x-[10px] items-center h-fit'>
            <span className="material-symbols-rounded"> translate </span>
            <p className='align-middle'> { language } </p>
        </div>
        <p className='text-sm'> { level } </p>
    </div>
)

export default LanguageCard;