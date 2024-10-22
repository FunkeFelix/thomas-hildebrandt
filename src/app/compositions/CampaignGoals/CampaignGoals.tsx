import {
  Home,
  Car,
  ShoppingBag,
  Music,
  ArrowBigLeft,
  ArrowBigRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomSliderStyles.css";
import Image from "next/image";

interface Goal {
  title: string;
  icon: JSX.Element;
  points: string[];
}

export default function CampaignGoals() {
  const goals: Goal[] = [
    {
      title: "Leben in Überlingen",
      icon: <Home className="w-8 h-8 mb-4 text-[#00246e]" />,
      points: [
        "Bezahlbarer Wohnraum für alle, besonders für junge Familien",
        "Vorkaufsrecht für Überlinger Bürger beim Verkauf von Wohnraum oder Grundstücken",
        "Förderung einer nachhaltigen Wohnbauentwicklung",
        "Erhalt von Bildungseinrichtungen durch Schulbauprojekte, mehr Kita-Plätze und Spielplatzsanierungen",
      ],
    },
    {
      title: "Verkehr und Mobilität",
      icon: <Car className="w-8 h-8 mb-4 text-[#00246e]" />,
      points: [
        "Entwicklung eines durchdachten Verkehrskonzepts für Überlingen",
        "Einführung eines interaktiven Parkleitsystems",
        "Schaffung neuer Parkmöglichkeiten, z.B. Tiefgarage an der Zimmerwiese",
      ],
    },
    {
      title: "Handwerk und Gewerbe",
      icon: <ShoppingBag className="w-8 h-8 mb-4 text-[#00246e]" />,
      points: [
        "Unterstützung von Handwerk und Betrieben durch Bereitstellung geeigneter Gewerbeflächen",
        "Bekämpfung von Leerständen in der Innenstadt durch Förderprogramme für Handel und Gastronomie",
        "Verbesserung der Infrastruktur durch Ausbau von Strom- und Mobilfunknetzen",
      ],
    },
    {
      title: "Kultur und Vereine",
      icon: <Music className="w-8 h-8 mb-4 text-[#00246e]" />,
      points: [
        "Förderung eines vielfältigen Kulturangebots, z.B. durch die Weiterentwicklung der Kapuzinerkirche als Kulturzentrum der Region",
        "Unterstützung der örtlichen Vereine und deren Jugendarbeit",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderRef = useRef<Slider | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    sliderRef.current?.slickGoTo(index);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      sliderRef.current?.slickPrev();
    } else {
      sliderRef.current?.slickNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 px-8 lg:py-24 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#00246e] mb-12">
        Statt nur verwalten gemeinsam gestalten
      </h2>
      <div className="container mx-auto mb-24 flex flex-col md:flex-row justify-around items-center">
        <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg font-light md:text-xl tracking-wide mb-8 md:mb-0 text-center md:text-left">
          <strong className="font-bold">
            Liebe Bürgerinnen und Bürger von Überlingen
          </strong>{" "}
          und den Ortsteilen
          <strong className="font-bold"> Andelshofen</strong>,{" "}
          <strong className="font-bold">Bambergen</strong>,{" "}
          <strong className="font-bold">Bonndorf</strong>,
          <strong className="font-bold">Deisendorf</strong>,{" "}
          <strong className="font-bold">Hödingen</strong>,{" "}
          <strong className="font-bold">Lippertsreute</strong>,
          <strong className="font-bold">Nesselwangen</strong> und{" "}
          <strong className="font-bold">Nußdorf</strong>:
          <br />
          <br />
          Als langjähriger Bürger und Handwerksmeister kenne ich die
          Herausforderungen, die Überlingen betreffen. Ich trete an, um
          Überlingen in den Bereichen Wohnen, Verkehr, Handel und Kultur zu
          stärken, und mit Ihnen gemeinsam Lösungen für eine lebenswerte Zukunft
          zu entwickeln.
        </p>

        <div className="w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-lg overflow-hidden border-4 border-[#00246e] shadow-lg transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/assets/images/people_fist-pump.png"
            alt="Thomas Hildebrandt"
            className="w-full h-full object-cover"
            width={450}
            height={300}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 grid-auto-rows-auto justify-items-center mx-auto">
          {goals.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              icon={element.icon}
              isActive={activeIndex === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex mt-24 justify-between md:hidden mb-6">
        <ArrowBigLeft
          onClick={() => handleArrowClick("left")}
          className="w-10 h-10 text-[#00246e] cursor-pointer"
        />
        <ArrowBigRight
          onClick={() => handleArrowClick("right")}
          className="w-10 h-10 text-[#00246e] cursor-pointer"
        />
      </div>

      <div className="mx-auto px-0 md:px-4 md:mt-24 sm:w-[100%] lg:w-[50%] slider-container border-4 border-[#00246e] rounded-lg relative">
        <Slider {...settings} ref={sliderRef}>
          {goals.map((element, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg h-72 w-full mx-auto overflow-hidden"
            >
              <div className="overflow-y-auto h-full custom-scrollbar p-4 flex justify-center items-center">
                <ul className="space-y-3  h-full">
                  {element.points.map((point, idx) => (
                    <li
                      key={idx}
                      onClick={() => setOpenModal(true)}
                      className="border-b-2 border-[#00246e] text-gray-800 font-small md:font-medium  p-2 md:p-8  hover:bg-[#dbf3fd] transition-all duration-300 ease-in-out cursor-pointer   hover:shadow-lg"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">
              Modal Content
            </h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

interface CardProps {
  title: string;
  icon: JSX.Element;
  isActive: boolean;
  onClick: () => void;
}

const Card = ({ title, icon, isActive, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform ${
        isActive
          ? "ring-4 ring-[#00246e] scale-105"
          : "hover:shadow-2xl hover:scale-105"
      } w-52`}
    >
      <div className="w-full text-left p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-l font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-4">{icon}</p>
        </div>
      </div>
    </div>
  );
};
