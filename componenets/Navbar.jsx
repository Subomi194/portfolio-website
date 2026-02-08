import Logo from "./Logo";

export default function Navbar() {
    return (
        <header className=" w-full fixed top-0 z-50 bg-white/20 backdrop-blur-sm">
                <nav className="flex justify-between items-center py-7 md:px-24 px-6">
                    <a href="#home">
                        <Logo/>
                    </a>

                    <div className="flex gap-2 md:gap-8">
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
                <div className="rose-gradient rose-gradient-border"/>
        </header>

    );

}