// this is the Landing Page.

// Landing Page should not import Navbar because Landing Page owns the Navbar.

import HeroSection from "../../Components/Hero/hero";
import DashboardPreview from "../../Components/Dashboard Preview/DashboardPreview";

function Landing() {
  return (
    <>
      {/* <h1>Welcome to StepNext.ai</h1>
      <p>Your AI-powered Career Operating System.</p> */}
      <HeroSection/>
      <DashboardPreview/>
    </>
  );
}

export default Landing;