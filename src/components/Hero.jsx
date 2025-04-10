import { IoLocation } from "react-icons/io5"
import Button from "./Button"
import Container from "./Container"
import HeroImg from "../assets/hero2.jpg"

const Hero = () => {
    return (
        <div className="min-h-screen w-full relative flex flex-col">
            <img src={HeroImg} alt="" className="h-full w-full absolute object-cover brightness-[0.275]"/>
            <Container
                classes="relative pt-24 flex-1 flex flex-col gap-4 md:gap-10 justify-center items-center text-gray-200 text-center"
            >
                <h1 className="text-4xl text-shadow-xl md:text-5xl max-w-3xl capitalize">
                    We provide <span className="text-teal-500">great deals on</span> amazing properties
                </h1>
                <p className="text-lg md:text-xl max-w-xl font-light">
                    Our mission is to make sure you're demands are met when it comes to your desirable relocation.
                </p>
                <div className="h-16 p-2 max-w-xl">
                    {/* <IoLocation />
                    <input type="text" placeholder="Search..." className="border border-amber-600"/> */}
                    <Button>Contact Us</Button>
                </div>
            </Container>
        </div>
    )
}
export default Hero