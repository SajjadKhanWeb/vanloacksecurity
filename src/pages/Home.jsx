import Hero from '../components/Hero.jsx'
import TrustBar from '../components/TrustBar.jsx'
import Services from '../components/Services.jsx'
import SecuritySolution from '../components/SecuritySolution.jsx'
import About from '../components/About.jsx'
import VehicleModels from '../components/VehicleModels.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import VideoShowcase from '../components/VideoShowcase.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Services />
      <SecuritySolution />
      <About />
      <VehicleModels />
      <WhyChooseUs />
      <VideoShowcase />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}
