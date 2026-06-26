import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – aqua-magic Deutschland" },
      { name: "description", content: "Impressum und Nutzungsbedingungen von aqua-magic Deutschland." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="mx-auto max-w-3xl px-6 py-16 prose prose-neutral max-w-none">
        <p>
          Sämtliche auf der Internetpräsenz der aqua-magic erhobenen persönlichen Daten werden ausschließlich zu Ihrer individuellen Betreuung,
          der Übersendung von Produktinformationen oder der Unterbreitung von Serviceangeboten gespeichert, verarbeitet und gegebenenfalls an
          aqua-magic, Partner und Gesellschaften weitergegeben.
        </p>
        <p>
          Die aqua-magic sichert zu, dass Ihre Angaben entsprechend den geltenden datenschutzrechtlichen Bestimmungen vertraulich behandelt
          werden.
        </p>

        <h2>aqua-magic</h2>
        <p>
          <strong>Inhaberin und Geschäftsführerin:</strong> Natascha Woithe<br />
          <strong>Steuer Nummer:</strong> 249/289/70511<br />
          <strong>Finanzamt:</strong> Schweinfurt
        </p>
        <p>
          <strong>Bankverbindung:</strong><br />
          VR-Bank Schweinfurt – Land<br />
          IBAN: DE58 7906 9165 0002 5517 21<br />
          BIC: GENODEF1MLV
        </p>
        <p>
          Inhaltlich verantwortlich gemäß § 10 Absatz 3 MDStV:<br />
          Natascha Woithe und human-magic<br />
          human-magic head of aqua-magic, Magic-Horse-Energy, Energy World<br />
          E-Mail: <a href="mailto:info@happiness-rebel-academy.de">info@happiness-rebel-academy.de</a>
        </p>

        <h2>Nutzungsbedingungen</h2>
        <h3>Präambel</h3>
        <p>
          Alle Informationen, Dokumente und Grafiken, die von aqua-magic und denen mit ihr verbundenen Unternehmen im World Wide Web
          veröffentlicht werden, sind nach bestem Wissen und Gewissen zusammengestellt und sorgfältig überprüft worden. Sie entsprechen den
          geltenden Rechtsvorschriften. Wir sind stetig bemüht, das Angebot auf unserer Internetpräsenz zu erweitern und zu aktualisieren.
          Verweise auf andere Internetpräsenz sind nicht als Empfehlung für das jeweilige Unternehmen, dessen Produkte oder Dienstleistungen zu
          verstehen.
        </p>

        <h3>§ 1 Urheberrecht</h3>
        <p>
          Der gesamte Inhalt dieser Internetpräsenz ist geistiges Eigentum von aqua-magic und unterliegt dem Schutz des Urheberrechts. Nutzer
          dürfen den Inhalt dieser Internetpräsenz nur für den eigenen, privaten Bedarf laden, ausdrucken oder kopieren. Ein Hinweis auf das
          Urheberrecht von aqua-magic muss auf jeder Kopie unserer Publikationen oder Teilen davon enthalten sein. Jegliche Veränderung,
          Vervielfältigung, Verbreitung oder öffentliche Wiedergabe der Internetseite sowie Teilen hiervon, gleich welcher Art, ist unzulässig.
        </p>

        <h3>§ 2 Warenzeichen</h3>
        <p>
          Die erwähnten Markenrechte stehen dem jeweiligen Rechtsinhaber zu. Alle Produktnamen sind unabhängig von Schriftgröße oder Anwesenheit
          eines Markensymbols Warenzeichen der aqua-magic, verbundener Unternehmen, Lizenznehmer oder Joint Venture Partner. Der Gebrauch oder
          Missbrauch dieser eingetragenen Warenzeichen ist ausdrücklich verboten und wird nach geltendem Recht verfolgt.
        </p>

        <h3>§ 3 Haftung</h3>
        <p>
          Die aqua-magic und die mit ihr verbundenen Unternehmen übernehmen keine Gewährleistung und keine Haftung im Zusammenhang mit jeglicher
          Nutzung dieser Webseite. Insbesondere wird keine Haftung für Schäden, welcher Art auch immer, im Hinblick auf die Vollständigkeit und
          Richtigkeit der Angaben übernommen. Dies gilt ebenso für mögliche Schäden, die in Zusammenhang mit Downloads jeglicher Dateiformate von
          unseren Internetseiten entstehen. Die Nutzer erklären sich damit einverstanden, auf diese Internetpräsenz und deren Inhalt auf eigenes
          Risiko zuzugreifen. Das Übermitteln von Informationen zur Anbahnung von Vertragsabschlüssen erfolgt rein unverbindlich und ohne
          Übernahme einer wie auch immer gearteten Verpflichtung oder Haftung. Auf dieser Internetpräsenz werden Links zu Internetseiten Dritter
          angeboten, die diese in eigener Verantwortung erstellt haben. Die Verbindung erfolgt ausschließlich zum Zwecke der Information und als
          zusätzlicher Service für die Nutzer. Die dort erstellten Inhalte stehen in keinerlei Zusammenhang mit unserem Unternehmen. Für Schäden,
          die aus der Nutzung der Inhalte dieser Seiten entstehen, übernimmt die aqua-magic und die mit ihr verbundenen Unternehmen keine
          Haftung.
        </p>

        <h3>§ 4 Einverständniserklärung</h3>
        <p>
          Mit der Nutzung/Öffnung der vorliegenden Internetpräsenz erklärt der Nutzer sein Einverständnis mit den hier formulierten
          Nutzungsbedingungen. Gleichzeitig erklärt er sich mit der Auswertung seines Zugriffs zu rein statistischen Zwecken einverstanden. Die
          Nutzung ist zu unterlassen, wenn den Nutzungsbedingungen nicht zugestimmt wird.
        </p>

        <h3>Hinweis</h3>
        <p>
          Die auf diesem www-Server bzw. auf dieser Internetpräsenz zur Verfügung gestellten Informationen dienen zu rein informativen Zwecken.
          Die Informationen werden somit allein für den allgemeinen Gebrauch zur Verfügung gestellt und ersetzen in keinster Weise die
          professionelle und individuelle Beratung.
        </p>

        <h3>Rechtliche Hinweise</h3>
        <p>
          aqua-magic prüft und aktualisiert die Informationen auf ihren Internetpräsenzen ständig. Trotz aller Sorgfalt können sich Daten und
          Informationen jeglicher Art inzwischen verändert haben. Eine Haftung, Garantie oder sonstiges Einstehen für die Aktualität, Richtigkeit
          und Vollständigkeit der zur Verfügung gestellten Informationen kann daher nicht übernommen werden. Gleiches gilt auch für alle anderen
          Internetpräsenzen, auf die direkt mittels Hyperlink oder in sonstiger Weise verwiesen wird. aqua-magic ist für den Inhalt der
          Internetpräsenzen, die aufgrund einer solchen Verbindung oder Hinweis erreicht werden, nicht verantwortlich. aqua-magic und dessen
          Partner lehnen ausdrücklich jegliche Form der Haftung – ob Vertragshaftung, Deliktshaftung, Gefährdungshaftung oder sonstiger Haftung
          für direkten oder indirekten Schadensersatz, Ersatz des beiläufig entstandenen Schadens, Strafe einschließlich Schadensersatz oder
          konkrete Schäden, die daraus resultieren oder in Zusammenhang damit stehen, dass aqua-magic Seiten aufgerufen, benutzt oder nicht
          benutzt werden können, oder mit einem Leistungsausfall, einer Unterbrechung, einem Defekt, einer Übertragungsverzögerung, einem
          Computervirus oder sonstigen schädlichen Elementen oder einem Leitungs- und Systemausfall in Zusammenhang mit den Human-Magic
          Internetpräsenzen, unabhängig davon, ob aqua-magic und/oder deren Partner sich der Möglichkeiten solcher Schäden bewusst waren oder
          nicht ab.
        </p>
        <p>
          Desweiteren behält sich aqua-magic das Recht vor, jederzeit Änderungen oder Ergänzungen der bereitgestellten Informationen vorzunehmen.
          Inhalt, Struktur und Gestaltung der aqua-magic Internetpräsenzen sind urheberrechtlich geschützt. Die Vervielfältigung, Änderung,
          Darstellung, Verbreitung, Übermittlung, Veröffentlichung, Verkauf, Lizenzierung, Bearbeitung, Verfremdung oder Nutzung von
          Informationen oder Daten für welche Zwecke auch immer, insbesondere die Verwendung von Texten, Textteilen oder Bildmaterial, bedarf der
          vorherigen schriftlichen Zustimmung von aqua-magic.
        </p>
        <p><em>Bildmaterial powered by aqua-magic, human-magic, Natascha Woithe und Pixelquelle.de</em></p>
      </section>
    </>
  );
}
