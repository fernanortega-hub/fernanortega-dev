import React from "react"
import Layout from "../layouts/Layout"
import EducationCard from "./EducationCard/EducationCard"
import { FirstArrow, SecondArrow } from '../../vectors/SecondSectionArrows'

const EducationSection = () => {
    return (
        <Layout className={'space-y-4 py-8 flex flex-col'}>
            <div className="flex space-x-2">
                <h2 className="text-onSurfaceVariant text-2xl flex font-medium items-center">
                    Education
                </h2>

                <span className="material-symbols-rounded text-primary"> book </span>
            </div>

            <EducationCard
                title={"Colegio Hispanoamerica"}
                subtitle={"Santa Tecla, El Salvador."}
                content={"General Baccaroulette"}
                years={"2018 - 2019"} />

            <EducationCard
                title={"Universidad Centroamericana José Simeón Cañas"}
                subtitle={"Antiguo Cuscatlán, El Salvador."}
                content={"Computer Science Engineering (in progress)"}
                years={"2020 - 2022"} />

            <div>
                <FirstArrow />
                <div className="flex justify-between w-full m-0">
                    <SecondArrow />
                    <span className="py-3 px-5 bg-primary h-[40px] text-white text-sm rounded-xl min-w-fit self-center"> My skills </span>
                </div>
            </div>
        </Layout>
    )
}

export default EducationSection