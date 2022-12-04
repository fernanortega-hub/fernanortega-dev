import FirstSectionArrow from "../../vectors/FirstSectionArrow";
import Layout from '../layouts/Layout'
import React from "react";

const ProfileSection = () => {
    return (
        <Layout id="about">
            <h1 className="text-2xl pt-[72px] md:text-4xl md:pt-[104px] md:font-medium">
                Hi! I'm Fernando  <br></br>
                <span className="text-primary text-2xl md:text-4xl md:font-medium"> Web & Android Developer Jr </span>
            </h1>

            <div className="relative grid place-content-center m-auto h-[338px] max-w-[381px] group md:w-full">
                <div className="absolute top-8 bg-secondary60 w-[240px] h-[240px] rounded-full transition-all group-hover:bg-[#B2CCC1] group-hover:w-[270px] group-hover:h-[270px]"></div>
                <div className="absolute -bottom-3 right-0 bg-primary w-[240px] h-[240px] rounded-full transition-all group-hover:bg-[#60DBB8] group-hover:w-[270px] group-hover:h-[270px]"></div>
                <img src="/profile-pic.png"
                    alt="Profile photo from Fernando Ortega"
                    className="relative rounded-full h-[200px] " />
            </div>

            <p className="mt-10 group">
                I'm currently a student and tutor of Web Programming at the Universidad Centroamericana José Simeón Cañas (UCA). <br></br>
                <span className="group-hover:text-primary transition-all"> I love design and develop! </span>
            </p>

            <div className="mt-6 mb-12 h-fit flex flex-row items-center w-full justify-between">
                <span className="py-3 px-4 text-onSurface text-xs rounded-xl min-w-fit w-full flex justify-center items-center border-[3px] border-primary border-dashed leading-none md:text-sm"> Let's see my education </span>
                <FirstSectionArrow />
            </div>
        </Layout>
    );
}

export default ProfileSection;