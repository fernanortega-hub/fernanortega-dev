import { useState } from 'react'
import ProfileSection from './components/Profile/ProfileSection'
import EducationSection from './components/Education/EducationSection'
import SkillsSection from './components/Skills/SkillsSection'
import ExperienceSection from './components/Experience/ExperienceSection'
import AboutSection from './components/About/AboutSection'
import Navbar from './components/Navbar/Navbar'

function App() {
    return (
        <div>
            <Navbar />
            <ProfileSection />
            <EducationSection />
            <SkillsSection />
            <ExperienceSection />
            <AboutSection/>
        </div>
    )
}

export default App
