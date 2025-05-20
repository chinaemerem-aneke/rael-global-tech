import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import AboutUs from "./components/AboutUs"
import OurServices from "./components/OurServices"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
