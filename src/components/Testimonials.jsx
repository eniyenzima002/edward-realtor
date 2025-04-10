import { TESTIMONIALS } from "../../data"
import Container from "./Container"

const Testimonials = () => {
    return (
        <div className="bg-zinc-50 py-16 overflow-hidden">
            <Container>
                <div className="w-full flex flex-col lg:flex-row gap-12">
                    <div className="w-max">
                        <div className="text-4xl font-medium flex flex-col">
                            <div className="whitespace-nowrap">Clients</div>
                            <div className="whitespace-nowrap">Testimonials!</div>
                        </div>
                        <div className="mt-7 text-xl text-gray-600">We happy when you are!</div>
                    </div>
                    <div className="text-gray-500 flex flex-col w-full gap-10">
                        {TESTIMONIALS.map((testimony, index) => (
                            <div
                                key={index}
                                className={`p-6 md:w-[90%] shadow-md ${index !== 1 && "self-end"}`}
                            >
                                <div className="mx-auto">{testimony.text}</div>
                                <div className={`flex gap-2 items-center mt-6 ${index === 1 && "justify-end"}`}>

                                    <div className="w-10 h-10 rounded-full">
                                        <img src={testimony.src} alt="" className="w-full h-full object-cover rounded-full" />
                                    </div>

                                    <div>
                                        <div className="text-left font-medium text-gray-700">{testimony.name}</div>
                                        <div className="text-sm">{testimony.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Testimonials