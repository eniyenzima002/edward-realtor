import { CONSIDER } from "../../data"
import Container from "./Container"

const Consider = () => {
    return (
        <div className="bg-gray-950 opacity-97">
            <Container classes="flex flex-col justify-between text-center py-15 md:px-30 text-teal-50">
                <h2 className="text-2xl md:text-3xl font-light">Some of the <span className="text-green-300">Top Items</span> We Consider</h2>

                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {
                        CONSIDER.map((con, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center py-7 gap-4"
                            >
                                <con.icon className={`text-4xl md:text-7xl ${con.color}`} />
                                <p>{con.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}
export default Consider