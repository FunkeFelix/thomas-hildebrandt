"use client";

import WaveDivider from "./compositions/WaveDivider/WaveDivider";
import CampaignGoals from "./compositions/CampaignGoals/CampaignGoals";
import ContactSection from "./compositions/ContactSection";
import AboutMe from "./compositions/AboutMe";
import ContactForm from "./compositions/ContanctForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen  text-white overflow-hidden">
      {/* Main Content */}
      <main
        className=" mx-auto px-4 py-12 md:pt-24 flex flex-col-reverse md:flex-row items-center h-[60vh] relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/ueberlingen_city.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="flex flex-col md:flex-row justify-around w-full relative z-10 space-y-8 md:space-y-0">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Thomas Hildebrandt
            </h1>
            <p className="text-white mb-8 italic">
              Für ein starkes, lebenswertes Überlingen,
              <br />
              dass alle Bürger vereint – für heute und die Zukunft.
            </p>
          </div>
        </div>

        <WaveDivider fillColor="fill-white" />
      </main>

      {/* Additional Content */}

      <div className=" mx-auto ">
        <CampaignGoals />
      </div>

      <div className=" mx-auto">
        <AboutMe />
      </div>

      <div className=" mx-auto">
        <ContactSection />
        <ContactForm />
      </div>
    </div>
  );
}
