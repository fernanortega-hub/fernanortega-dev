import React from "react"
import Layout from "../layouts/Layout"
import EducationCard from "./EducationCard/EducationCard"

const EducationSection = () => {
    return (
        <Layout className={'space-y-4 py-8 flex flex-col'} id='education'>
            <div className="flex space-x-2">
                <h2 className="text-onSurfaceVariant text-2xl flex font-medium items-center">
                    Education
                </h2>

                <span className="material-symbols-rounded text-primary"> book </span>
            </div>

            <section className="space-y-4 xl:flex xl:flex-row xl:gap-4 xl:space-y-0">
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
            </section>

        </Layout>
    )
}

export default EducationSection