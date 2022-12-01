import Layout from '../layouts/Layout'
import React from 'react'

const AboutSection = () => (
    <Layout className='py-8 space-y-6' id='contact-me'>
        <div className="flex space-x-2 mb-6">
            <h2 className="text-onSurfaceVariant text-2xl flex font-medium items-center">
                Let's connect
            </h2>
            <span className="material-symbols-rounded text-primary"> badge </span>
        </div>

        <p className='text-onSurface text-sm'>
            I am looking for job opportunities to show off my knowledge and learn many more things in this wonderful career.
            If you want to contact you to share your proposal or want to say hello, I will be on the lookout <br></br><br></br>
            See you later!
        </p>

        <div className='flex flex-row justify-between'>
            <a href="https://github.com/fernanortega-hub">
                <img src="/github.svg" alt="Github button" />
            </a>
            <a href="https://www.linkedin.com/in/fernando-ortega-978a441b6/">
                <img src="/linkedin.svg" alt="Linkedin button" />
            </a>
            <a href="tel:+50371055884">
                <span className="material-symbols-outlined">
                    call
                </span>
            </a>
            <a href="mailto:fernanortega.sv9292@gmail.com?Subject=Hola%20Fernando,%20soy">
                <span className="material-symbols-outlined">
                    email
                </span>
            </a>
        </div>

        <h2 className='text-center text-xs'> Designed & built by Fernando Ortega </h2>
    </Layout>
)

export default AboutSection;