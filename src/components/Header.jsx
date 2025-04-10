import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import Button from "./Button"
import { NAV_LINKS } from "../../data"
import Logo from "./Logo"
import { CgClose } from "react-icons/cg"

const Header = () => {
    const [isNavClosed, setIsNavClosed] = useState(true)
    return (
        <header className="absolute top-0 left-0 w-full h-24 z-10 text-teal-50">
            <nav className="max-w-screen-xl mx-auto h-full px-10 flex justify-between items-center">
                <Logo />
                <ul className="hidden md:flex items-center gap-5">
                    {NAV_LINKS.map((link, index) => (
                        <li key={index} className="capitalize hover:text-teal-500">
                            <a href={link.link}>{link.name}</a>
                        </li>
                    ))}
                    <Button>
                        Contact Us
                    </Button>
                </ul>
                <button
                    onClick={() => setIsNavClosed(!isNavClosed)}
                    className="md:hidden text-4xl text-teal-50 z-20"
                >
                    {
                        isNavClosed ? (
                            <GiHamburgerMenu />
                        ) : (
                            <CgClose className="text-rose-700 font-extrabold" />
                        )
                    }
                </button>
            </nav>
            <ul
                className={`flex md:hidden bg-zinc-950 text absolute top-0 right-0 flex-col pt-32 text-2xl px-7 gap-10 w-80 h-screen transition-all duration-300 opacity-95
                    ${isNavClosed ? "translate-x-full" : "translate-x-0"}
                `}
            >
                {NAV_LINKS.map((link, index) => (
                    <li key={index} className="capitalize hover:text-teal-500 text-slate-300">
                        <a href={link.link}>{link.name}</a>
                    </li>
                ))}
                <Logo />
            </ul>
        </header>
    )
}
export default Header