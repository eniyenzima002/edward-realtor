import Button from "./Button"
import Container from "./Container"

const About = () => {
    return (
        <div className="bg-slate-50">
            <Container classes="py-16 grid grid-cols-1 gap-20 md:grid-cols-2 text-left">
                <div className="">
                    <img src="/realtor.png" alt="" className="h-90 w-full object-cover rounded shadow-2xl"/>
                </div>
                <div className="">
                    <div className="text-3xl md:text-4xl font-medium md:leading-[45px] pb-7 capitalize">
                        offering <span className="text-teal-600"> quality </span> services
                    </div>
                    <div className="px-2 rounded">
                        <p className=" md:text-[17px] text-gray-800">
                        We dedicate all our time and attention to helping you find the perfect place to call home. We guarantee a smooth process to guide buyers and sellers. Whether you’re a first-timer or a seasoned investor, we’re here to make sure that journey is a success, and stress-free.
                        </p>
                        <p className="md:text-[17px] text-gray-800 py-7">
                        We combine market expertise with a personal touch to help you buy or sell with confidence. From the first showing to the final signature, we’re in your corner, making moves that make sense for you.
                        </p>
                    </div>
                </div>
                <div>
                    
                </div>
            </Container>
        </div>
    )
}
export default About