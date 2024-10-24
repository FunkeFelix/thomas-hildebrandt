import WaveDivider from "../compositions/WaveDivider/WaveDivider";

export default function DatenSchutzPage() {
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
            <h2 className="text-4xl md:text-4xl font-bold mb-4 text-white">
              Datenschutz
            </h2>
          </div>
        </div>

        <WaveDivider fillColor="fill-white" />
      </main>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg text-black">
        <h1 className="text-3xl font-semibold mb-6">Datenschutzerklärung</h1>

        <p className="mb-4">
          Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Der
          Schutz Ihrer Daten hat für uns einen hohen Stellenwert. Diese
          Datenschutzerklärung informiert Sie darüber, wie personenbezogene
          Daten auf unserer Website verarbeitet werden, insbesondere im
          Zusammenhang mit dem Kontaktformular und der Nutzung von localStorage.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          1. Name und Anschrift des Verantwortlichen
        </h2>
        <p className="mb-4">
          Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          <br />
          <strong>Thomas Hildebrandt</strong>
          <br />
          Nußdorder Str. 9
          <br />
          88662 Überlingen
          <br />
          Deutschland
          <br />
          E-Mail: thomas.hildebrandt.ob2024@gmail.com
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">
          2. Erhebung und Speicherung personenbezogener Daten
        </h2>
        <p className="mb-4">
          Wenn Sie unser Kontaktformular verwenden, werden die von Ihnen
          eingegebenen personenbezogenen Daten (z. B. Name, E-Mail-Adresse und
          Nachricht) über unseren Dienstleister <strong>Formspree</strong>
          übermittelt und verarbeitet. Diese Daten werden ausschließlich zur
          Bearbeitung Ihrer Anfrage genutzt und nicht für andere Zwecke
          verwendet.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          3. Verwendung von localStorage
        </h2>
        <p className="mb-4">
          Auf unserer Website verwenden wir <strong>localStorage</strong>, um zu
          verhindern, dass Sie unser Kontaktformular mehrfach absenden. Hierbei
          wird eine Kennung in Ihrem Browser gespeichert, die nach dem Absenden
          des Formulars feststellt, dass Sie das Formular bereits ausgefüllt
          haben. Diese Informationen werden nicht an Dritte weitergegeben und
          dienen ausschließlich der Benutzerfreundlichkeit. Sie können die
          gespeicherten Informationen jederzeit in Ihrem Browser löschen.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          4. Rechte der betroffenen Person
        </h2>
        <p className="mb-4">
          Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
          betreffende personenbezogene Daten verarbeitet werden. Weiterhin haben
          Sie das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
          der Verarbeitung der Daten. Darüber hinaus haben Sie das Recht auf
          Datenübertragbarkeit sowie das Recht, eine Beschwerde bei einer
          Aufsichtsbehörde einzureichen.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          5. Dauer der Speicherung
        </h2>
        <p className="mb-4">
          Die über das Kontaktformular übermittelten Daten werden so lange
          gespeichert, wie es zur Bearbeitung Ihres Anliegens erforderlich ist.
          Daten im localStorage bleiben gespeichert, bis Sie diese selbst in
          Ihrem Browser löschen.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          6. Weitergabe personenbezogener Daten
        </h2>
        <p className="mb-4">
          Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben, es
          sei denn, dies ist gesetzlich vorgeschrieben oder zur Bearbeitung
          Ihrer Anfrage erforderlich.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          7. Kontaktmöglichkeit
        </h2>
        <p className="mb-4">
          Wenn Sie Fragen zum Datenschutz oder zur Verarbeitung Ihrer
          personenbezogenen Daten haben, können Sie uns jederzeit unter den
          angegebenen Kontaktinformationen erreichen.
        </p>
      </div>
    </div>
  );
}
