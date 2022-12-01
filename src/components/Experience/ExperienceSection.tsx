import React from "react";
import Layout from '../layouts/Layout'
import ExperienceTitle from './ExperienteTitle/ExperienceTitle';

const ExperienceSection = () => (
    <Layout className='py-8' id="experience-projects">
        <div className="flex space-x-2">
            <h2 className="text-onSurfaceVariant text-2xl flex font-medium items-center">
                Experience and projects
            </h2>

            <span className="material-symbols-rounded text-primary"> settings_suggest </span>

        </div>

        <div className="space-y-4 mt-3">
            <ExperienceTitle title="Web Application and Mobile App development" icon="app_shortcut" src='/notimed-project.png' alt='Android project Notimed' url="https://github.com/UCASV/proyecto-notimed" />
            <ExperienceTitle title="CEII-UCA official website" icon="travel_explore" src='/ceii.png' alt='CEII-UCA official website' url="https://ceii-uca.com/" />
            <ExperienceTitle title="Plants E-commerce (in progress)" icon="potted_plant" src='/plant-ecommerce.png' alt='Development of plants e-commerce (in progress)' url="https://github.com/fernanortega-hub/e-commerce-project" />
        </div>
    </Layout>
)

export default ExperienceSection;