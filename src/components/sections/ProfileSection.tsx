import FirstSectionArrow from "../../vectors/FirstSectionArrow";
import Layout from "../layouts/Layout";

const ProfileSection = () => {
    return (
        <Layout>
            <h1 className="text-2xl pt-[72px]">
                Hi! I'm Fernando  <br></br>
                <span className="text-primary text-2xl"> Web & Android Developer Jr </span>
            </h1>

            <div className="relative grid place-content-center h-[338px] max-w-[381px] group">
                <div className="absolute top-8 bg-secondary60 w-[240px] h-[240px] rounded-full transition-all group-hover:bg-[#B2CCC1] group-hover:w-[270px] group-hover:h-[270px]"></div>
                <div className="absolute -bottom-3 right-0 bg-primary w-[240px] h-[240px] rounded-full transition-all group-hover:bg-[#60DBB8] group-hover:w-[270px] group-hover:h-[270px]"></div>
                <img src="/src/assets/profile-pic.png"
                    alt="Profile photo from Fernando Ortega"
                    className="relative rounded-full h-[200px] " />
            </div>

            <p className="mt-10 group">
                I'm currently a student and tutor of Web Programming at the Universidad Centroamericana José Simeón Cañas (UCA). <br></br>
                <span className="group-hover:text-primary transition-all"> I love design and develop! </span>
            </p>

            <div className="mt-6 mb-12 h-fit flex flex-row items-center w-full justify-between">
                <span className="py-3 px-5 bg-primary h-[40px] text-white text-sm rounded-xl min-w-fit flex justify-center items-center"> Let's see my education </span>
                <FirstSectionArrow />
            </div>
        </Layout>
    );
}

export default ProfileSection;