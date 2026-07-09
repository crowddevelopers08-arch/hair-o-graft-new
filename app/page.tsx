import AboutHealthcare from "../components/AboutHealthcare";
import BeforeAfter from "../components/beforeafter";
import ClinicGallery from "../components/ClinicGallery";
import ClinicHeroTemplate from "../components/ClinicHeroTemplate";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import HairGrowthCta from "../components/HairGrowthCta";
import ProfessionalsSection from "../components/ProfessionalsSection";
import ScrollAnimations from "../components/ScrollAnimations";
import WhatToExpect from "../components/WhatToExpect";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimations />
      <ClinicHeroTemplate />
      <BeforeAfter />
      <AboutHealthcare />
      <ClinicGallery />
      <WhatToExpect />
      <ProfessionalsSection />
      <FaqSection />
      <HairGrowthCta />
      <Footer />
    </main>
  );
}
