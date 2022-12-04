import React from 'react';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [colorChange, setColorchange] = React.useState(false);

    function openOrNot() {
        console.log(window.scrollY);
        setOpen(!open)
    }

    function getInfoURL() {
        return window.location.hash;
    }

    const changeNavbarColor = () =>{
       if(window.scrollY >= 72){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };

    window.addEventListener('scroll', changeNavbarColor);

    function normalNavBar() {
        return (
            <div className={`${colorChange ? 'bg-surface1 drop-shadow-md' : 'bg-surface' } transition-colors p-4 fixed top-0 w-full z-10 md:p-8`}>
                <button
                    onClick={() => {
                        getInfoURL()
                        openOrNot()
                    }}
                    className='bg-inherit hover:bg-onSurface hover:bg-opacity-[0.08] p-2  grid justify-center rounded-lg'>
                    <span className="material-symbols-rounded text-onSurface">
                        menu
                    </span>
                </button>
            </div>
        );
    }

    function openNavBar() {
        return (
            <div className='fixed bg-onSurface w-full h-screen z-50 bg-opacity-25 transition'>
                <nav className='w-[360px] overflow-y-auto max-w-full h-full min-h-screen bg-surface1 p-4 space-y-9 flex flex-col'>
                    <div className='top-0 w-full'>
                        <button
                            onClick={openOrNot}
                            className='hover:bg-onSurfaceVariant hover:bg-opacity-[0.08] p-2 grid justify-center rounded-lg'>
                            <span className="material-symbols-rounded text-onSurfaceVariant">
                                menu_open
                            </span>
                        </button>
                    </div>

                    <ul className='w-full'>
                        <a href="#about" onClick={openOrNot}>
                            <li className={`${(getInfoURL() === "#about" || getInfoURL() === "")  ? 'bg-[#D6E6DE] text-[#101E1A] hover:bg-[#181D0D] hover:bg-opacity-[0.08] font-medium' : 'hover:bg-onSurfaceVariant hover:bg-opacity-[0.08]'} p-4 rounded-full `}>About</li>
                        </a>
                        <a href="#education" onClick={openOrNot}>
                            <li className={`${getInfoURL() === "#education" ? 'bg-[#D6E6DE] text-[#101E1A] hover:bg-[#181D0D] hover:bg-opacity-[0.08] font-medium' : 'hover:bg-onSurfaceVariant hover:bg-opacity-[0.08]'} p-4 rounded-full `}>Education</li>
                        </a>
                        <a href="#skills" onClick={openOrNot}>
                            <li className={`${getInfoURL() === "#skills" ? 'bg-[#D6E6DE] text-[#101E1A] hover:bg-[#181D0D] hover:bg-opacity-[0.08] font-medium' : 'hover:bg-onSurfaceVariant hover:bg-opacity-[0.08]'} p-4 rounded-full `}>Skills</li>
                        </a>
                        <a href="#experience-projects" onClick={openOrNot}>
                            <li className={`${getInfoURL() === "#experience-projects" ? 'bg-[#D6E6DE] text-[#101E1A] hover:bg-[#181D0D] hover:bg-opacity-[0.08] font-medium' : 'hover:bg-onSurfaceVariant hover:bg-opacity-[0.08]'} p-4 rounded-full `}>Experience and projects</li>
                        </a>
                        <a href="#contact-me" onClick={openOrNot}>
                            <li className={`${getInfoURL() === "#contact-me" ? 'bg-[#D6E6DE] text-[#101E1A] hover:bg-[#181D0D] hover:bg-opacity-[0.08] font-medium' : 'hover:bg-onSurfaceVariant hover:bg-opacity-[0.08]'} p-4 rounded-full `}>Contact</li>
                        </a>
                    </ul>

                    <a href="/Curriculum.pdf" download="Resume_Fernando_Ortega">
                        <button className='bg-primary w-full h-[40px] text-white rounded-xl text-sm font-medium'> Resume </button>
                    </a>
                </nav>
            </div>
        );
    }

    return (
        <div>
            {
                open ? openNavBar() : normalNavBar()
            }
        </div>
    );
}

export default Navbar;