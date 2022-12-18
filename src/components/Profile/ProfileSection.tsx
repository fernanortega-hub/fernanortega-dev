import Layout from '../layouts/Layout'
import React from "react";

const ProfileSection = () => {
    return (
        <Layout id="about" className={''}>
            <h1 className="text-2xl pt-[72px] md:text-4xl md:pt-[104px] md:font-medium">
                Hi! I'm Fernando  <br></br>
                <span className="text-primary text-2xl md:text-4xl md:font-medium"> Web & Android Developer Jr </span>
            </h1>

            <div className="lg:absolute lg:right-32 lg:top-20 xl:right-40">
                <div className="relative grid place-content-center m-auto h-[338px] max-w-[381px] group xl:max-w-[400px]">
                    <div className="absolute top-8 bg-secondary60 w-[240px] h-[240px] rounded-full transition-all group-hover:bg-[#B2CCC1] group-hover:w-[270px] group-hover:h-[270px]"></div>
                    <div className="absolute -bottom-3 right-0 bg-primary w-[240px] h-[240px] rounded-full transition-all group-hover:bg-[#60DBB8] group-hover:w-[270px] group-hover:h-[270px]"></div>
                    <img src="/profile-pic.png"
                        alt="Profile photo from Fernando Ortega"
                        className="relative rounded-full h-[200px] " />
                </div>
            </div>

            <p className="text-primary transition-all ease-in-out text-xl hover:font-medium mb-3 mt-10 md:text-2xl"> Looking for a Web or Android developer? </p>
            <p className="group mb-16 md:text-xl lg:w-1/2 xl:mb-32">
                I'm a Web & Android Developer living in El Salvador. I make Web or Android Applications, from small business sites to rich interactive and beautiful apps. If you are a business seeking a Web or Android Developer, you can <a href="#contact-me" className="text-primary focus:underline"> get in touch here. </a>
            </p>
        </Layout>
    );
}

export default ProfileSection;