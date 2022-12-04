import Layout from '../layouts/Layout'
import LanguageCard from './LanguageCard/LanguajeCard'
import SkillCard from './SkillCard/SkillCard'

const SkillsSection = () => (
    <Layout className="py-8" id="skills">
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

                <div className='space-y-[10px] md:flex md:flex-row md:space-y-0'>
                    <div className='space-y-[10px] md:w-full'>
                        <p className='text-primary font-medium'> Frontend development </p>
                        <SkillCard src="/react.png" skill='ReactJS' />
                        <SkillCard src="/next.png" skill='NextJS' />
                        <SkillCard src="/tailwind.png" skill='TailwindCSS' />
                    </div>

                    <div className='space-y-[10px] md:w-full'>
                        <p className='text-primary font-medium'> Backend development </p>
                        <SkillCard src="/nodejs.png" skill='NodeJS' />
                        <SkillCard src="/dotnet.png" skill='.NET Core' />
                    </div>
                </div>

            </div>

            <div className='space-y-[10px] md:flex md:flex-row md:space-y-0'>
                <div className='space-y-[10px] md:w-full'>
                    <h3 className='font-medium'>Databases</h3>
                    <SkillCard src="/mongo.png" skill='Mongo DB' />
                    <SkillCard src="/sqlserver.png" skill='Microsoft SQL Server' />
                    <SkillCard src="/oracle.png" skill='Oracle Database' />
                </div>

                <div className='space-y-[10px] md:w-full'>
                    <h3 className='font-medium'>Mobile development</h3>
                    <SkillCard src="/android.png" skill='Android Development, XML, Jetpack Compose' />
                </div>
            </div>

            <div className='space-y-[10px] md:flex md:flex-row md:space-y-0'>
                <div className='space-y-[10px] md:w-full'>
                    <h3 className='font-medium'>Programming languages</h3>
                    <SkillCard src="/cplusplus.png" skill='C++' />
                    <SkillCard src="/csharp.png" skill='C#' />
                    <SkillCard src="/kotlin.svg" skill='Kotlin' />
                    <SkillCard src="/js.png" skill='Javascript' />
                    <SkillCard src="/Typescript.png" skill='Typescript' />
                </div>

                <div className='space-y-[10px] md:w-full'>
                    <h3 className='font-medium'>Tools for development, design and team work</h3>
                    <SkillCard src="/jira.png" skill='Jira' />
                    <SkillCard src="/Git.png" skill='Git' />
                    <SkillCard src="/github.png" skill='Github' />
                    <SkillCard src="/docker.png" skill='Docker' />
                    <SkillCard src="/figma.svg" skill='Figma' />
                </div>
            </div>

        </div>
    </Layout>
)

export default SkillsSection;