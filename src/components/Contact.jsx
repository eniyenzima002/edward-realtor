import Button from "./Button"
import Container from "./Container"

const Contact = () => {
    return (
        <div className="bg-gray-50 opacity-65">
            <Container classes="py-20">
                <div className="w-full flex justify-center items-center">
                    <form className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="flex flex-col gap-6 justify-center items-center">
                            <input
                                type="text"
                                placeholder="Name..."
                                className="flex-1 h-10 w-full px-2 py-2 outline-none border border-gray-500 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Email..."
                                className="flex-1 h-10 w-full px-2 py-2 outline-none border border-gray-500 rounded-md"
                            />
                            <textarea
                                rows="6" cols="50"
                                placeholder="Write your message..."
                                className="flex-1 h-10 w-full px-2 py-2 outline-none border border-gray-500 rounded-md"
                            >
                            </textarea>
                        </div>
                        <Button>
                            Submit
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}
export default Contact