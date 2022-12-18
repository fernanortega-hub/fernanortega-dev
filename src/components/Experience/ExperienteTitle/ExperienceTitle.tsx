import React from 'react';

const ExperienceTitle = ({ title, icon, src, alt, url }: any) => (
    <div className='first:mt-4 lg:w-[550px] xl:w-2/5 lg:flex lg:flex-col lg:justify-center lg:items-center group'>
        <div className="p-4 flex flex-row justify-between items-center content-center bg-surface1 rounded-xl shadow-md lg:w-full lg:min-w-fit">
            <span className="text-primary font-medium"> {title} </span>
            <span className="material-symbols-rounded text-primary"> {icon} </span>
        </div>

        <a href={url}>
            <img src={src} alt={alt} className="rounded-xl group-hover:drop-shadow-lg group-focus:drop-shadow-sm transition-all border border-[#737875] mt-4 lg:aspect-auto" />
        </a>
    </div>
)


export default ExperienceTitle;