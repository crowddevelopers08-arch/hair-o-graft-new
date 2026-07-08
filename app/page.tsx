import AboutHealthcare from "../components/AboutHealthcare";
import BeforeAfter from "../components/beforeafter";
import ClinicGallery from "../components/ClinicGallery";
import Navbar from "../components/Navbar";
import ScrollAnimations from "../components/ScrollAnimations";
import WhatToExpect from "../components/WhatToExpect";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollAnimations />
      <Navbar />
      <AboutHealthcare />
      <ClinicGallery />
      <BeforeAfter />
      <WhatToExpect />
    </main>
  );
}
