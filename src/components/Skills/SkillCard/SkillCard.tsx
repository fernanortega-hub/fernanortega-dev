import React from 'react';

const SkillCard = ({ src, skill }: any) => (
    <div className='flex flex-row space-x-[10px] items-center group transition-all'>
        <img src={src} alt={`Image from ${skill}`} className='w-[56px] p-2 rounded-xl group-hover:bg-primary group-hover:bg-opacity-10 max-h-[60px]'/>
        <p> {skill} </p>
    </div>
)

export default SkillCard;