import HeroSection from "../components/Home/HeroSection"
import ServiceCard from "../components/Home/ServiceCard"
import Testimonials from "../components/Home/TestimonialCard"
import ServicesPreview from "../components/Home/ServicesPreview"
import CallToAction from "../components/Home/CallToAction"



function Home() {
    return (
        <div>

            <HeroSection />
            <ServiceCard />
            <Testimonials />
            <ServicesPreview />
            <CallToAction />

        </div>
    )
}

export default Home