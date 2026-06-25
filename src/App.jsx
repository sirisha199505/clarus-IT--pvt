import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SatelliteEducation from "./components/SatelliteEducation.jsx";
import JapanTraining from "./components/JapanTraining.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Process from "./components/Process.jsx";
import Benefits from "./components/Benefits.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import Partners from "./components/Partners.jsx";
import FAQ from "./components/FAQ.jsx";
import EnquiryForm from "./components/EnquiryForm.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CurveDivider from "./components/ui/CurveDivider.jsx";

const DARK = "#06302b";
const WARM = "#faf8f3";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CurveDivider top={DARK} fill={WARM} />
        <About />
        <SatelliteEducation />
        <CurveDivider top={WARM} fill={DARK} />
        <JapanTraining />
        <CurveDivider top={DARK} fill={WARM} />
        <WhyChooseUs />
        <Process />
        <Benefits />
        <SuccessStories />
        <Partners />
        <FAQ />
        <CurveDivider top={WARM} fill={DARK} />
        <EnquiryForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
