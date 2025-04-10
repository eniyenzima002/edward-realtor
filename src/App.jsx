import About from "./components/About"
import Banner from "./components/Banner"
import Consider from "./components/Consider"
import Contact from "./components/Contact"
import Destinations from "./components/Destinations"
import Featured from "./components/Featured"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Properties from "./components/Properties"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <Header />
      <Hero />
      <About />
      <Properties />
      <Consider />
      <Featured />
      <Banner />
      <Destinations />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App