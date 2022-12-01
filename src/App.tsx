import ProfileSection from './components/Profile/ProfileSection'
import EducationSection from './components/Education/EducationSection'
import SkillsSection from './components/Skills/SkillsSection'
import ExperienceSection from './components/Experience/ExperienceSection'

function App() {

    return (
        <div className="bg-surface">
            <div className='p-4 fixed top-0 w-full bg-surface z-10'>
                <button className='bg-surface hover:bg-onSurface hover:bg-opacity-[0.08] p-2 grid justify-center rounded-lg'>
                    <span className="material-symbols-rounded text-onSurface">
                        menu
                    </span>
                </button>
            </div>
            <ProfileSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
        </div>
    )
}

export default App
