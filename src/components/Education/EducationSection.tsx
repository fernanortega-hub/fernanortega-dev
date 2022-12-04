import React from "react"
import Layout from "../layouts/Layout"
import EducationCard from "./EducationCard/EducationCard"
import { FirstArrow, SecondArrow } from '../../vectors/SecondSectionArrows'

const EducationSection = () => {
    return (
        <Layout className={'space-y-4 py-8 flex flex-col'} id='education'>
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
                <div className="flex justify-center w-full space-x-4">
                    <SecondArrow />
                    <span className="py-3 px-5 text-onSurface text-sm rounded-xl min-w-fit 
                        flex justify-center items-center border-[3px] border-secondary border-dashed 
                        self-center align-middle h-[42px]"> My skills </span>
                </div>
            </div>
        </Layout>
    )
}

export default EducationSection