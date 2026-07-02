import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";
import img from "@/assets/inhouse.jpg";
import inhousePromoImg from "@/assets/inhouse-hero.jpg.asset.json";

export const Route = createFileRoute("/inhouse")({
  head: () => ({
    meta: [
      { title: "Inhouse Schulungen – aqua-magic" },
      { name: "description", content: "Inhouse Schulungen direkt bei Ihnen vor Ort. Maßgeschneidert für Ihre Mitarbeiter — von Babys bis Senioren, von Aqua Fitness bis Aqua Body & Soul Balancing." },
    ],
  }),
  component: Page,
});

const advantages = [
  "Die Ausbildung findet im späteren Betätigungs­feld Ihrer Mitarbeiter statt",
  "Der Unterricht wird speziell auf Ihre Bedürfnisse zugeschnitten",
  "Ihre Mitarbeiter lernen im bekannten Team und Umfeld",
  "Keine Zusatzkosten für Fahrt und Übernachtung",
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Vor Ort"
        title="Inhouse-Schulungen direkt bei Ihnen."
        subtitle="Wir, die Aqua Fitness Weltrekordler, sorgen für bestens geschulte Mitarbeiter in Ihrem Bad."
        image={img}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vorteile der Inhouse-Schulung</h2>
          <ul className="space-y-3 mb-10">
            {advantages.map((a) => (
              <li key={a} className="flex gap-3">
                <div className="mt-0.5 size-6 shrink-0 rounded-full bg-accent/15 grid place-items-center">
                  <Check className="size-3.5 text-accent" />
                </div>
                <span>{a}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-3xl bg-secondary p-8">
            <p className="text-foreground/90 leading-relaxed">
              Von Babys & Bambinis bis Senioren, von Aqua Fitness über Aqua Spinning bis hin zu Wellness mit Aqua Body & Soul Balancing — wir helfen Ihnen, alle Ihre Gäste glücklich zu machen.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Ihre Teamarbeit im Bad läuft nicht rund? Mit einem 1- bis 2-tägigen Motivations- und Teamseminar schaffen wir weltmeisterliche Euphorie und Spitzen­leistung für den Alltag.
            </p>
            <p className="mt-6 font-semibold">— Ihr Aqua-Magic Team</p>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-8 shadow-glow sticky top-24">
            <h3 className="text-2xl font-bold mb-2">Anfrage stellen</h3>
            <p className="opacity-90 text-sm mb-6">
              Sie haben Fragen zu unseren Aus- und Weiter­bildungen? Wir stehen Ihnen (fast) jederzeit zur Verfügung.
            </p>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="opacity-70">Ansprechpartnerin</dt>
                <dd className="font-semibold text-base">Natascha Woithe</dd>
              </div>
              <div>
                <dt className="opacity-70">Telefon</dt>
                <dd className="font-semibold text-base">0172 / 9367279</dd>
              </div>
              <div>
                <dt className="opacity-70">E-Mail</dt>
                <dd className="font-semibold text-base">
                  <a href="mailto:info@happiness-rebel-academy.de" className="underline underline-offset-2">
                    info@happiness-rebel-academy.de
                  </a>
                </dd>
              </div>
            </dl>
            <Link to="/unternehmen" className="mt-8 inline-flex w-full justify-center items-center px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold">
              Kontakt­daten ansehen
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
