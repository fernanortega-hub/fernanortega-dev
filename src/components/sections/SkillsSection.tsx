import Layout from '../layouts/Layout'
import LanguageCard from './SkillsComponets/LanguageCard/LanguajeCard'
import SkillCard from './SkillsComponets/SkillCard/SkillCard'
import React from 'react';

const SkillsSection = () => (
    <Layout className="py-8">
        <div className="flex space-x-2">
            <h2 className="text-onSurfaceVariant text-2xl flex font-medium items-center">
                Skills
            </h2>
            <span className="material-symbols-rounded text-primary"> engineering </span>
        </div>

        <div className='space-y-4 mt-6'>
            <h3 className='font-medium'>Languages</h3>

            <div className='flex flex-row justify-between'>
                <LanguageCard language="English" level="Basic - technical" />
                <LanguageCard language="Spanish" level="Native" />
            </div>

            <div className='space-y-[10px]'>
                <h3 className='font-medium'>Web development</h3>

                <div className='space-y-[10px]'>
                    <p className='text-primary font-medium'> Frontend development </p>
                    <SkillCard src="/src/assets/react.png" skill='ReactJS' />
                    <SkillCard src="/src/assets/next.png" skill='NextJS' />
                    <SkillCard src="/src/assets/tailwind.png" skill='TailwindCSS' />
                </div>

                <div className='space-y-[10px]'>
                    <p className='text-primary font-medium'> Backend development </p>
                    <SkillCard src="/src/assets/nodejs.png" skill='NodeJS' />
                    <SkillCard src="/src/assets/dotnet.png" skill='.NET Core' />
                </div>

            </div>

            <div className='space-y-[10px]'>
                <h3 className='font-medium'>Databases</h3>
                <SkillCard src="/src/assets/mongo.png" skill='Mongo DB' />
                <SkillCard src="/src/assets/sqlserver.png" skill='Microsoft SQL Server' />
                <SkillCard src="/src/assets/oracle.png" skill='Oracle Database' />
            </div>

            <div className='space-y-[10px]'>
                <h3 className='font-medium'>Mobile development</h3>
                <SkillCard src="/src/assets/android.png" skill='Android Development, XML, Jetpack Compose' />
            </div>

            <div className='space-y-[10px]'>
                <h3 className='font-medium'>Programming languages</h3>
                <SkillCard src="/src/assets/cplusplus.png" skill='C++' />
                <SkillCard src="/src/assets/csharp.png" skill='C#' />
                <SkillCard src="/src/assets/kotlin.svg" skill='Kotlin' />
                <SkillCard src="/src/assets/js.png" skill='Javascript' />
                <SkillCard src="/src/assets/Typescript.png" skill='Typescript' />
            </div>

            <div className='space-y-[10px]'>
                <h3 className='font-medium'>Tools for development, design and team work</h3>
                <SkillCard src="/src/assets/jira.png" skill='Jira' />
                <SkillCard src="/src/assets/Git.png" skill='Git' />
                <SkillCard src="/src/assets/github.png" skill='Github' />
                <SkillCard src="/src/assets/docker.png" skill='Docker' />
                <SkillCard src="/src/assets/figma.svg" skill='Figma' />
            </div>

        </div>
    </Layout>
)

export default SkillsSection;