import { Mail, Instagram, ArrowUp } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto pt-12">
        <h2 className="text-3xl font-bold text-[#00246e] mb-6">Kontakt</h2>
        <p className="text-gray-700 mb-4">
          Bitte zögern Sie nicht, sich mit mir in Verbindung zu setzen, sei es
          um Fragen zu stellen oder Anregungen zu geben.{" "}
          <span className="font-semibold">
            Ich freue mich auf Ihre Nachricht!
          </span>
        </p>
        <p className="text-gray-700 mb-8">
          Schreiben Sie mir per E-Mail und folgen Sie gerne meinen Kanälen, um
          auf dem Laufenden zu bleiben.
          <span className="font-semibold"> Vielen Dank!</span>
        </p>

        <div className="flex w-full justify-around flex-col md:flex-row items-center">
          <div
            onClick={() =>
              window.open("mailto:thomas.hildebrandt.ob2024@gmail.com")
            }
            className="bg-white p-6 rounded-lg shadow-md mb-8 w-64 cursor-pointer"
          >
            <div className="flex flex-col items-center ">
              <Mail className="w-12 h-12 text-black" />
              <span className="text-lg font-semibold text-black">E-Mail</span>
            </div>
          </div>

          <div
            onClick={() =>
              window.open("https://www.instagram.com/thomashildebrandt/")
            }
            className="bg-white p-6 rounded-lg shadow-md mb-8  w-64"
          >
            <div className="flex flex-col items-center">
              <Instagram className="w-12 h-12 text-black" />
              <span className="text-lg font-semibold text-black">
                Instagram
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-[#00246e] p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}
