import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – aqua-magic Deutschland" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen von aqua-magic Deutschland für Kurse, Trainings und Lehrgänge." },
    ],
  }),
  component: Page,
});

function Page() {
  const items = [
    "Die Anmeldung zur Teilnahme an Veranstaltungen (Kurse, Trainings, Lehrgänge/Seminare) erfolgt schriftlich auf einem besonderen Anmeldeformular oder in Textform (z. B. E-Mail). Sofern nicht ausdrücklich die Belegung von Teilveranstaltungen zugelassen wird, kann die Anmeldung nur für Veranstaltungen insgesamt erfolgen. Anmeldungen werden grundsätzlich in der Reihenfolge ihres Einganges und nur bis zum Anmeldeschluss bzw. bis zum Erfüllen der maximalen Teilnehmerzahl berücksichtigt. Mit Zugang der Teilnahmebescheinigung in Schrift- oder Textform kommt der Vertrag zustande.",
    "Mit seiner Anmeldung geht der/die Teilnehmer/in einen Vertrag ein. Meldet ein Unternehmen Personen an, nimmt das anmeldende Unternehmen die Funktion eines Teilnehmers ein. Die Teilnahme wird dem/der Teilnehmer/in schriftlich bestätigt. Damit erhalten auch die Allgemeinen Teilnahmebedingungen im Vertragsverhältnis Gültigkeit.",
    "Der/die Teilnehmer/in überweist die Veranstaltungsgebühren zum Zeitpunkt des in der Rechnung bestätigten Termins sofort nach Erhalt der Bestätigung, spätestens jedoch vor Veranstaltungsbeginn.",
    "Der Teilnehmer/in kann seine Anmeldung für die Veranstaltung ohne Angabe von Gründen zurückziehen.",
    "Erfolgt die Absage im Zeitraum bis zu 12 Kalenderwochen vor dem geplanten Termin entstehen keine Kosten. Erfolgt die Absage im Zeitraum bis zu 30 Kalendertagen vor Veranstaltungsbeginn, so hat der/die Teilnehmer/in eine Stornogebühr in Höhe von 45 % zu zahlen. Die Teilnahmegebühren fallen in voller Höhe an, wenn die Absage in kürzerem Zeitraum erfolgt oder der/die Teilnehmer/in zum Veranstaltungsbeginn nicht erscheint.",
    "Bei Langzeitlehrgängen hat der/die Teilnehmer/in die Möglichkeit jederzeit zurück zu treten. Das Entgelt für den laufenden Lehrgangszeitraum lt. Lehrgangsplan ist in voller Höhe zu entrichten.",
    "aqua-magic ist berechtigt aus wichtigem Grund, z. B. bei Zahlungsverzug, nachhaltiger Störung der Veranstaltung, Urheberrechtsverletzung, vorsätzlicher Zerstörung oder Beschädigung von Einrichtungsgegenständen oder Ausbildungsobjekten durch den/die Teilnehmer/in, fristlos zu kündigen. In diesem Fall richtet sich der finanzielle Anspruch an den/die Teilnehmer/in.",
    "Die aqua-magic ist berechtigt, Veranstaltungen wegen höherer Gewalt, bei Ausfall des Dozenten oder bei ungenügender Beteiligung abzusagen. Sie ist verpflichtet, den/die Teilnehmer/in unverzüglich zu informieren. Bereits gezahltes Entgelt wird erstattet. Ein weitergehender Schadensersatzanspruch entsteht durch die Absage nicht.",
    "Urheberrecht: Sämtliche Lehrgangsunterlagen und verwendete Computersoftware sowie Bild-, Video- und Tonmaterial sind urheberrechtlich geschützt und dürfen ohne vorherige Zustimmung des Urheberrechtsinhabers nicht, auch nicht auszugsweise, vervielfältigt oder an Dritte weitergegeben werden.",
    "Datenerfassung: Die personenbezogenen Daten des/der Teilnehmers/in werden ausschließlich zur Abwicklung der jeweiligen Veranstaltung gespeichert und verwendet, es sei denn, der/die Teilnehmer/in hat einer weiteren Verwendung zugestimmt.",
  ];
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Allgemeine Geschäftsbedingungen" />
      <section className="mx-auto max-w-3xl px-6 py-16 prose prose-neutral max-w-none">
        <ol>
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
          <li>
            Für Unfälle, Diebstähle oder sonstige Schadensfälle übernimmt der Betreiber/Veranstalter/Kursleiter keine Haftung. Ausnahme: wegen
            vorsätzlicher Schädigung und nachgewiesener unterlassener Hilfeleistung.
            <ul>
              <li>a. Die Teilnahme erfolgt auf eigenes Risiko. Eltern haften für ihre Kinder.</li>
              <li>b. Die Kurse / Schulungen / Coachings sind keine Therapien im heilkundlichen Sinn.</li>
              <li>c. Die Teilnehmer/innen sind vor, während und nach dem Kurs selbst für sich verantwortlich.</li>
              <li>d. Der/die Teilnehmer/in bestätigt mit der Anmeldung, dass er/sie sich geistig und körperlich gesund fühlt und am Kurs teilnehmen kann.</li>
              <li>e. Der/die Teilnehmer/in kommt für verursachte Schäden selbst auf und stellt den Veranstalter, die Kursleiter und die Gastgeber der Veranstaltungsorte von allen Haftungsansprüchen frei.</li>
              <li>f. Es wird ausdrücklich darauf hingewiesen, dass diese Programme kein Ersatz für psychiatrische oder medizinische Behandlung sind.</li>
            </ul>
          </li>
          <li>Salvatorische Klausel: Im Fall der Unwirksamkeit einzelner Klauseln dieser Bedingungen bleibt die Wirksamkeit der übrigen unberührt.</li>
          <li>Gerichtsstand ist Schweinfurt.</li>
        </ol>
      </section>
    </>
  );
}
