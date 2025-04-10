import { FaHome } from "react-icons/fa"

const Logo = () => {
    return (
        <div className="text-3xl font-semibold flex items-center justify-center gap-2">
            <FaHome size={33} className="text-teal-500" />
            <span className="text-teal-50 font-light  text-shadow-amber-300 text-lg uppercase">
                EDward <span className="text-rose-300">Realtor</span>
            </span>
        </div>
    )
}
export default Logo