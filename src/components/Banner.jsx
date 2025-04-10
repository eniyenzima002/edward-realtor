import { QUALITIES } from "../../data"
import Button from "./Button"
import Container from "./Container"

const Banner = () => {
    return (
        <div className="bg-zinc-50">
            <Container classes="py-4">
                <div className="w-full flex flex-col lg:flex-row gap-20">
                    <div className="flex flex-col flex-1 gap-10">
                        <div className="text-4xl md:text-5xl font-medium pt-7">
                            Request a free consultation.
                        </div>
                        <div className="text-gray-500 text-xl">
                            We offer competitive loans while working around your budget to meet your goal.
                        </div>
                        <div className="grid grid-cols-2 gap-10 text-lg text-gray-800">
                            {QUALITIES.map((quality, index) => (
                                <div key={index} className="w-full flex flex-col gap-6">
                                    <span className="text-5xl font-medium text-teal-600">{quality.title} </span>
                                    <span>{quality.description}</span>
                                </div>
                            ))}
                        </div>
                        {/* <Button classes="w-fit">Get in Touch</Button> */}
                    </div>
                    <div className="flex-1 aspect-[4/2] lg:aspect-[unset] overflow-hidden relative group">
                        <img
                            src="/banner.jpg" alt=""
                            className="w-full h-full object-cover object-center absolute top-0 left-0 group-hover:scale-105 transition-all duration-300"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Banner