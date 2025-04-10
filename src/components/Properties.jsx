import { ImGift } from "react-icons/im"
import { PROPERTIES } from "../../data"
import Container from "./Container"

const Properties = () => {
    return (
        <div className="">
            <Container classes="py-15 px-0 text-gray-300">
                
                <div className="text-3xl md:text-4xl text-gray-900 font-medium">
                    Properties
                </div>
                <div className="mt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center">
                    {PROPERTIES.map((property, index) => (
                        <div
                            key={index}
                            className="flex flex-col group shadow items-center p-10 transition-all duration-300 relative w-full h-50"
                        >
                            <img src={property.img} alt=""
                                className="absolute inset-0 h-full w-full object-cover brightness-[0.3] rounded shadow-md group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl"
                            />
                            
                            <div className="absolute inset-0 z-10 w-full flex flex-col justify-center items-center">
                                <property.icon className="text-5xl text-teal-700"/>
                                <h3 className="font-semibold text-xl mt-5">{property.type}</h3>
                                <p className="mt-1 text-gray-400">{property.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default Properties