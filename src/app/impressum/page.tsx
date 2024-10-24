import WaveDivider from "../compositions/WaveDivider/WaveDivider";

export default function ImpressumPage() {
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
              Impressum
            </h2>
          </div>
        </div>

        <WaveDivider fillColor="fill-white" />
      </main>

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg text-black">
        <h1 className="text-3xl font-semibold mb-6">Impressum</h1>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Angaben gemäß § 5 TMG:
        </h2>
        <p>
          <strong>Thomas Hildebrandt</strong>
          <br />
          Nußdorfer Straße 9
          <br />
          88662 Überlingen
          <br />
          Deutschland
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Kontakt:</h2>
        <p>E-Mail: thomas.hildebrandt.ob2024@gmail.com</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Vertreten durch:</h2>
        <p>Thomas Hildebrandt</p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        </h2>
        <p>
          <strong>Thomas Hildebrandt</strong>
          <br />
          Nußdorfer Straße 9
          <br />
          88662 Überlingen
          <br />
          Deutschland
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Haftungsausschluss (Disclaimer):
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Streitschlichtung</h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
