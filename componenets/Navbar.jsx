import Logo from "./Logo";

export default function Navbar() {
    return (
        <header className=" w-full fixed top-0 z-50">
            <nav className="flex justify-between items-center bg-white backdrop-blur-md py-7 px-6 border-b-3 border-rose-800 shadow-md">
                <a href="#home">
                    <Logo/>
                </a>

                <div className="flex gap-2 md:gap-5">
                    <a href="#about" className="navlinks">
                        About
                    </a>

                    <a href="#skills" className="navlinks">
                        Skills
                    </a>

                    <a href="#projects" className="navlinks">
                        Projects
                    </a>

                    <a href="#contact" className="navlinks">
                        Contact
                    </a>
                
                </div>
            </nav>
        </header>

    );

}