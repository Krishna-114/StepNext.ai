// this is the Landing Page.

// Landing Page should not import Navbar because Landing Page owns the Navbar.

import HeroSection from "../../Components/Hero/hero";
import DashboardPreview from "../../Components/Dashboard Preview/DashboardPreview";
import Features from "../../Components/Features Hero/Features";
import WorkingSteps from "../../Components/How it Works/WorkingSteps";
import Footer from "../../Components/Footer/Footer";

function Landing() {
  return (
    <>
      {/* <h1>Welcome to StepNext.ai</h1>
      <p>Your AI-powered Career Operating System.</p> */}
      <HeroSection/>
      <DashboardPreview/>
      <Features/>
      <WorkingSteps/>
      <Footer/>

    </>
  );
}

export default Landing;