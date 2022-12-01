import React from 'react';

const ExperienceTitle = ({ title, icon, src, alt, url }: any) => (
    <div className='first:mt-4'>
        <div className="p-4 flex flex-row justify-between items-center content-center bg-surface1 rounded-xl shadow-md">
            <span className="text-primary font-medium"> {title} </span>
            <span className="material-symbols-rounded text-primary"> {icon} </span>
        </div>

        <a href={url}>
            <img src={src} alt={alt} className="rounded-xl border border-[#737875] mt-4" />
        </a>
    </div>
)


export default ExperienceTitle;