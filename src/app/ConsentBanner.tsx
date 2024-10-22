import { useState, useEffect } from "react";

const ConsentBanner = () => {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedConsent = localStorage.getItem("localStorageConsent");
      if (storedConsent === "true") {
        setConsentGiven(true);
      }
    }
  }, []);

  const handleConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("localStorageConsent", "true");
    }
    setConsentGiven(true);
  };

  if (consentGiven) return null;

  return (
    <div className="fixed bottom-0 w-full bg-[#dbf3fd] text-[#00246e] p-3 shadow-lg">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <span className="text-sm leading-relaxed max-w-md">
          Wir verwenden lokale Speichertechnologien (localStorage), um Ihre
          Eingaben im Kontaktformular zu verarbeiten und eine reibungslose
          Nutzung unserer Website zu gewährleisten. Ihre Daten werden nur für
          die Bearbeitung Ihrer Anfrage verwendet und nicht für Werbezwecke oder
          Tracking gespeichert. Durch die Nutzung unserer Website stimmen Sie
          der Speicherung dieser Daten zu.
        </span>
        <button
          onClick={handleConsent}
          className="bg-[#0081b2] text-white px-4 py-2 rounded-md ml-4 hover:bg-[#005f86] transition duration-200"
        >
          Ich stimme zu
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
