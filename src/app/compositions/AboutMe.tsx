import Image from "next/image";
import WaveDivider from "./WaveDivider/WaveDivider";

export default function AboutMe() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative w-full">
      <WaveDivider position="top" fillColor="fill-white" />
      <div className="mx-auto pt-12 w-full md:w-3/4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#00246e] text-start mb-12 md:mb-24">
          Über mich
        </h2>
        <div className="flex flex-col md:flex-row w-full items-center text-center md:text-left md:justify-around">
          <Image
            src="/assets/images/thomas_hildebrandt--profil.png"
            alt="Thomas Hildebrandt"
            className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-contain mb-6 md:mb-0 md:mr-6 "
            width={200}
            height={300}
          />
          <p className="text-gray-700 md:w-1/2 leading-relaxed text-lg font-light md:text-xl tracking-wide">
            Ich bin in Überlingen aufgewachsen und seit über 20 Jahren als
            selbstständiger Handwerksmeister hier tätig. Dadurch kenne ich die
            Herausforderungen und Probleme unserer Stadt und ihrer Ortsteile aus
            erster Hand. Meine Vorstellung ist ein lebenswertes Überlingen für
            alle Generationen – mit bezahlbarem Wohnraum, florierender
            Wirtschaft, einer lebendigen Innenstadt und einer bürgernahen
            Verwaltung. Geben Sie mir am 10.11.2024 Ihre Stimme für ein
            zukunftsfähiges und starkes Überlingen!
          </p>
        </div>
      </div>
    </section>
  );
}
