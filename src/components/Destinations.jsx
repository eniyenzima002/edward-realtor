import { DESTINATIONS } from "../../data"
import Container from "./Container"

const Destinations = () => {
    return (
        <div className="py-25 ">
            <Container classes="flex flex-col gap-20">
                <div className="text-4xl font-medium text-center capitalize">
                    Serving <span className="text-teal-600">most Texas</span> Major Cities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {DESTINATIONS.map((destination, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-[8/11] flex flex-col justify-end items-start group p-6 overflow-hidden"
                        >
                            <img
                                src={destination.link} alt=""
                                className="w-full h-full absolute top-0 left-0 object-cover brightness-50 group-hover:scale-105 transition-all duration-300"
                            />
                            <div
                                className="text-2xl font-medium text-amber-50 relative"
                            >{destination.text}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default Destinations