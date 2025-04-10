import { FEATURED } from "../../data"
import Container from "./Container"

const Featured = () => {
    return (
        <div className="py-16 w-full">
            <Container>
                <div className="text-4xl font-medium"><span className="text-rose-700">Hot</span> Deals</div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {FEATURED.map((feature, index) => (
                        <div
                            key={index}
                            className="h-[240px] relative group overflow-hidden shadow-md rounded-md"
                        >
                            <img
                                src={feature.link} alt=""
                                className="w-full h-full absolute object-cover group-hover:scale-105 transition-all duration-300 brightness-50"
                            />
                            <div className="flex h-full justify-between flex-col relative p-4">
                                <div
                                    className="bg-teal-500  text-gray-200 text-sm w-fit uppercase tracking-widest px-4 py-2 rounded"
                                >{feature.tag}</div>
                                <div className="flex flex-col gap-2 text-gray-200">
                                    <span>{feature.text}</span>
                                    <hr />
                                    <span>${feature.price} <span className="text-amber-300">base</span> estimation</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
export default Featured