import Image from "next/image";
import CampaignGoals from "./CampaignGoals/CampaignGoals";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen mt-24 justify-evenly">
      <div className="flex flex-col justify-evenly">
        <div className="ml-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#00246e]">
            THOMAS HILDEBRANDT
          </h1>

          <h3 className="text-2xl md:text-4xl font-bold text-red-600">
            Oberbürgermeisterwahl 2024
          </h3>
        </div>
        {/* Hide campaign goals on mobile */}
        <div className="hidden lg:flex justify-evenly">
          <CampaignGoals />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
          <Image
            src="/assets/images/thomas_hildebrandt--profil.png"
            alt="Thomas Hildebrandt"
            width={400}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
