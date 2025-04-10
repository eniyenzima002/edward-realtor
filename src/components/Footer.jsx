import { AiFillAccountBook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import Container from "./Container"
import Logo from "./Logo"
import { NAV_LINKS } from "../../data"

const Footer = () => {
    return (
        <div className="bg-slate-950 text-gray-300 w-full h-screen md:h-full pt-16">
            <Container>
                <div className="w-full flex flex-col lg:flex-row gap-12 justify-center items-center mx-auto lg:items-start lg:pb-10">
                    <Logo />
                    <div className="text-center font-light leading-8 lg:text-start w-fit text-lg">
                        Our doors are open <br /> Monday - Friday <br /> 9:30am - 5:30pm. <br /> Reach out; we are here to help.
                    </div>
                    <div className="flex gap-6 text-teal-600">
                        <a href="#">
                            <AiFillAccountBook size={45} />
                        </a>
                        <a href="#">
                            <AiFillInstagram size={45} />
                        </a>
                        <a href="#">
                            <AiFillLinkedin size={45} />
                        </a>
                    </div>
                    <ul className="flex flex-col lg:flex-row gap-5 mb-3">
                        
                        {NAV_LINKS.map((link, index) => (
                            <li
                                key={index}
                                className="text-teal-50 capitalize hover:text-teal-500"
                            >
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}
export default Footer