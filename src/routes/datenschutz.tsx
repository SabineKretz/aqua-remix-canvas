import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – aqua-magic Deutschland" },
      { name: "description", content: "Informationen zum Datenschutz gemäß DSGVO bei aqua-magic Deutschland." },
      { property: "og:title", content: "Datenschutzerklärung – aqua-magic Deutschland" },
      { property: "og:description", content: "Informationen zum Datenschutz gemäß DSGVO bei aqua-magic Deutschland." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="mx-auto max-w-3xl px-6 py-16 prose prose-neutral max-w-none">
        <h2>Name und Kontakt des Verantwortlichen gemäß Artikel 4 Abs. 7 DSGVO</h2>
        <p>
          Natascha Woithe<br />
          Ebracher Weg 24<br />
          D-97513 Michelau im Steigerwald<br />
          Telefon: 09382 / 31822-99
        </p>

        <h3>Sicherheit und Schutz Ihrer personenbezogenen Daten</h3>
        <p>
          Wir betrachten es als unsere vorrangige Aufgabe, die Vertraulichkeit der von Ihnen bereitgestellten personenbezogenen Daten zu wahren und
          diese vor unbefugten Zugriffen zu schützen. Deshalb wenden wir äußerste Sorgfalt und modernste Sicherheitsstandards an, um einen
          maximalen Schutz Ihrer personenbezogenen Daten zu gewährleisten.
        </p>
        <p>
          Als privatrechtliches Unternehmen unterliegen wir den Bestimmungen der europäischen Datenschutzgrundverordnung (DSGVO) und den
          Regelungen des Bundesdatenschutzgesetzes (BDSG). Wir haben technische und organisatorische Maßnahmen getroffen, die sicherstellen, dass
          die Vorschriften über den Datenschutz sowohl von uns als auch von unseren externen Dienstleistern beachtet werden.
        </p>

        <h3>Begriffsbestimmungen</h3>
        <p>
          Der Gesetzgeber fordert, dass personenbezogene Daten auf rechtmäßige Weise, nach Treu und Glauben und in einer für die betroffene Person
          nachvollziehbaren Weise verarbeitet werden („Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz"). Um dies zu
          gewährleisten, informieren wir Sie über die einzelnen gesetzlichen Begriffsbestimmungen, die auch in dieser Datenschutzerklärung
          verwendet werden: Personenbezogene Daten, Verarbeitung, Einschränkung der Verarbeitung, Profiling, Pseudonymisierung, Dateisystem,
          Verantwortlicher, Auftragsverarbeiter, Empfänger, Dritter und Einwilligung – jeweils im Sinne der DSGVO.
        </p>

        <h3>Rechtmäßigkeit der Verarbeitung</h3>
        <p>
          Die Verarbeitung personenbezogener Daten ist nur rechtmäßig, wenn für die Verarbeitung eine Rechtsgrundlage besteht. Rechtsgrundlage für
          die Verarbeitung können gemäß Artikel 6 Abs. 1 lit. a – f DSGVO insbesondere sein: die Einwilligung der betroffenen Person, die
          Erfüllung eines Vertrags, die Erfüllung einer rechtlichen Verpflichtung, der Schutz lebenswichtiger Interessen, die Wahrnehmung einer
          Aufgabe im öffentlichen Interesse sowie die Wahrung berechtigter Interessen des Verantwortlichen oder eines Dritten.
        </p>

        <h3>Information über die Erhebung personenbezogener Daten</h3>
        <p>
          Im Folgenden informieren wir über die Erhebung personenbezogener Daten bei Nutzung unserer Website. Personenbezogene Daten sind z. B.
          Name, Adresse, E-Mail-Adressen, Nutzerverhalten. Bei einer Kontaktaufnahme mit uns per E-Mail oder über ein Kontaktformular werden die
          von Ihnen mitgeteilten Daten (Ihre E-Mail-Adresse, ggf. Ihr Name und Ihre Telefonnummer) von uns gespeichert, um Ihre Fragen zu
          beantworten. Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung nicht mehr erforderlich ist, oder die
          Verarbeitung wird eingeschränkt, falls gesetzliche Aufbewahrungspflichten bestehen.
        </p>

        <h3>Erhebung personenbezogener Daten bei Besuch unserer Website</h3>
        <p>
          Bei der bloß informatorischen Nutzung der Website, also wenn Sie sich nicht registrieren oder uns anderweitig Informationen übermitteln,
          erheben wir nur die personenbezogenen Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie unsere Website betrachten möchten,
          erheben wir folgende Daten, die für uns technisch erforderlich sind (Rechtsgrundlage Art. 6 Abs. 1 S. 1 lit. f DSGVO): IP-Adresse, Datum
          und Uhrzeit der Anfrage, Zeitzonendifferenz zur GMT, Inhalt der Anforderung, Zugriffsstatus / HTTP-Statuscode, jeweils übertragene
          Datenmenge, Website von der die Anforderung kommt, Browser, Betriebssystem und dessen Oberfläche sowie Sprache und Version der
          Browsersoftware.
        </p>

        <h3>Einsatz von Cookies</h3>
        <p>
          Zusätzlich zu den zuvor genannten Daten werden bei der Nutzung unserer Website Cookies auf Ihrem Rechner gespeichert. Bei Cookies
          handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und
          durch welche der Stelle, die den Cookie setzt, bestimmte Informationen zufließen. Cookies können keine Programme ausführen oder Viren
          auf Ihren Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen. Diese Website
          nutzt transiente Cookies (Session-Cookies) und persistente Cookies. Sie können Ihre Browser-Einstellungen entsprechend Ihren Wünschen
          konfigurieren und z. B. die Annahme von Third-Party-Cookies oder allen Cookies ablehnen. Wir weisen Sie darauf hin, dass Sie durch die
          Deaktivierung von Cookies eventuell nicht alle Funktionen dieser Website nutzen können.
        </p>

        <h3>Weitere Funktionen und Angebote unserer Website</h3>
        <p>
          Neben der rein informatorischen Nutzung unserer Website bieten wir verschiedene Leistungen an, die Sie bei Interesse nutzen können. Dazu
          müssen Sie in der Regel weitere personenbezogene Daten angeben, die wir zur Erbringung der jeweiligen Leistung nutzen und für die die
          zuvor genannten Grundsätze zur Datenverarbeitung gelten. Teilweise bedienen wir uns zur Verarbeitung Ihrer Daten externer Dienstleister.
          Diese wurden von uns sorgfältig ausgewählt und beauftragt, sind an unsere Weisungen gebunden und werden regelmäßig kontrolliert.
        </p>

        <h3>Kinder</h3>
        <p>
          Unser Angebot richtet sich grundsätzlich an Erwachsene. Personen unter 18 Jahren sollten ohne Zustimmung der Eltern oder
          Erziehungsberechtigten keine personenbezogenen Daten an uns übermitteln.
        </p>

        <h3>Rechte der betroffenen Person</h3>
        <p>
          Sie haben gegenüber dem Verantwortlichen folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
        </p>
        <ul>
          <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          <li>Recht auf Bestätigung und Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung („Recht auf vergessen werden", Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Recht, nicht einer ausschließlich automatisierten Entscheidung einschließlich Profiling unterworfen zu werden (Art. 22 DSGVO)</li>
          <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          <li>Recht auf wirksamen gerichtlichen Rechtsbehelf</li>
        </ul>
        <p>Zur Ausübung dieser Rechte können Sie sich jederzeit an uns wenden.</p>

        <h3>Einsatz von Matomo (ehemals Piwik)</h3>
        <p>
          Diese Website nutzt den Webanalysedienst Matomo, um die Nutzung unserer Website analysieren und regelmäßig verbessern zu können.
          Rechtsgrundlage für die Nutzung von Matomo ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Für diese Auswertung werden Cookies auf Ihrem Computer
          gespeichert. Die so erhobenen Informationen speichert der Verantwortliche ausschließlich auf seinem Server in Frankreich. Diese Website
          verwendet Matomo mit der Erweiterung „AnonymizeIP". Dadurch werden IP-Adressen gekürzt weiterverarbeitet, eine direkte
          Personenbeziehbarkeit kann damit ausgeschlossen werden. Informationen des Drittanbieters zum Datenschutz erhalten Sie unter{" "}
          <a href="https://matomo.org/privacy-policy/" target="_blank" rel="noreferrer">https://matomo.org/privacy-policy/</a>.
        </p>
      </section>
    </>
  );
}
