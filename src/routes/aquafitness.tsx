import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check, MapPin, Calendar, Clock } from "lucide-react";
import img from "@/assets/aquafitness.jpg";

export const Route = createFileRoute("/aquafitness")({
  head: () => ({
    meta: [
      { title: "Aqua Fitness Kurse – aqua-magic Deutschland" },
      { name: "description", content: "Fitness im Wasser für jedes Alter. Gelenkschonend, effektiv und voller Spaß. An verschiedenen Standorten und auf Anfrage auch bei Ihnen." },
      { property: "og:title", content: "Aqua Fitness Kurse – aqua-magic Deutschland" },
      { property: "og:description", content: "Fitness im Wasser für jedes Alter. Gelenkschonend, effektiv und voller Spaß. An verschiedenen Standorten und auf Anfrage auch bei Ihnen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const benefits = [
  "Gelenkschonendes Training durch den natürlichen Auftrieb des Wassers",
  "Verbesserung der Koordination und des Balancevermögens",
  "Kein Muskelkater dank vorwiegend konzentrischem Training",
  "Gesteigerte Durchblutung — unterstützt Entschlackung und Regeneration",
  "Venentraining: Verbesserung des venösen Rücktransportes",
  "Echter Kalorienkiller — Fitness mit Spaßfaktor",
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Kurse"
        title="Der Trend Aqua-Fitness — für jedes Alter und Fitness Level."
        subtitle="Fitnesstraining im Wasser erfreut sich immer größerer Beliebtheit. Erleben Sie, warum."
        image={img}
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum Fitness im Wasser?</h2>
          <p className="text-muted-foreground mb-8">
            Aquatraining bietet einzigartige Vorteile: Der Auftrieb entlastet Gelenke, der Wasserwiderstand stärkt die Muskulatur und der hydrostatische Druck fördert Durchblutung sowie Regeneration. Ein Training, das fordert, ohne zu überfordern.
          </p>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <div className="mt-0.5 size-6 shrink-0 rounded-full bg-primary/10 grid place-items-center">
                  <Check className="size-3.5 text-primary" />
                </div>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img src={img} alt="Aqua Fitness Kurs" loading="lazy" className="rounded-3xl shadow-soft w-full" />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-accent text-accent-foreground p-5 shadow-glow max-w-[200px]">
            <div className="text-3xl font-display font-bold">100%</div>
            <div className="text-sm">Spaß im Wasser — für jedes Alter</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Unser Kursangebot</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Wir bieten Aqua-Fitness-Kurse an verschiedenen Standorten an und kommen auf Wunsch auch direkt zu Ihnen.
          <br /><br />
          Eine (teilweise oder komplette) Kostenrückerstattung durch die Krankenkasse ist möglich. Die Höhe der Erstattung richtet sich nach den jeweiligen Bestimmungen Ihrer Krankenkasse. Bitte klären Sie die Kostenübernahme vorab direkt mit Ihrer Krankenkasse.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Sennfeld */}
          <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-8 md:p-10 flex flex-col gap-6">
            <div>
              <div className="text-xs tracking-widest uppercase opacity-80 mb-2">Standort</div>
              <h3 className="text-2xl md:text-3xl font-bold">Sennfeld</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur">
                <Clock className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold">Montag</p>
                  <p>Aqua-Fitness, 19.45–20.30 Uhr</p>
                  <p>Aqua-Power, 20.30–21.15 Uhr</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur">
                <Calendar className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold">Herbst 2026 · Kursstart: Montag, 21.09.2026</p>
                  <p>21.09. / 28.09. / 05.10. / 12.10. / 19.10. / 26.10. / 09.11. / 16.11. / 23.11. / 30.11.2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur">
                <Calendar className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold">Frühjahr 2027 · Kursstart: Montag, 18.01.2027</p>
                  <p>18.01. / 25.01. / 01.02. / 15.02. / 22.02. / 01.03. / 08.03. / 15.03. / 05.04. / 12.04.2027</p>
                </div>
              </div>
            </div>

            <Link to="/unternehmen" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition">
              Anmeldung
            </Link>
          </div>

          {/* Schwebheim */}
          <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-8 md:p-10 flex flex-col gap-6">
            <div>
              <div className="text-xs tracking-widest uppercase opacity-80 mb-2">Standort</div>
              <h3 className="text-2xl md:text-3xl font-bold">Schwebheim</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur">
                <Clock className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold">Dienstag</p>
                  <p>Aqua-Fitness, 19.00–19.45 Uhr</p>
                  <p>Aqua-Power, 20.00–20.45 Uhr</p>
                  <p className="mt-1 font-semibold">Freitag</p>
                  <p>Aqua-Fitness, 19.00–19.45 Uhr</p>
                  <p>Aqua-Power, 19.45–20.30 Uhr</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur">
                <Calendar className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold">Herbst 2026 · Kursstart: Dienstag, 22.09.2026</p>
                  <p>22.09. / 29.09. / 06.10. / 13.10. / 20.10. / 27.10. / 10.11. / 17.11. / 24.11. / 01.12.2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-primary-foreground/10 backdrop-blur">
                <Calendar className="size-5 shrink-0 mt-0.5 text-accent" />
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold">Herbst 2026 · Kursstart: Freitag, 18.09.2026</p>
                  <p>18.09. / 25.09. / 02.10. / 09.10. / 16.10. / 23.10. / 30.10. / 13.11. / 20.11. / 27.11.2026</p>
                </div>
              </div>
            </div>

            <Link to="/unternehmen" className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition">
              Anmeldung
            </Link>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col items-center gap-4 hover:border-primary hover:shadow-soft transition text-center max-w-md w-full">
            <div className="size-14 rounded-2xl bg-gradient-ocean grid place-items-center shrink-0">
              <MapPin className="size-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Standortflexibel</h3>
              <p className="text-muted-foreground">
                An verschiedenen Standorten und auf Anfrage auch bei Ihnen vor Ort. Kontaktieren Sie uns für ein individuelles Angebot.
              </p>
              <Link to="/unternehmen" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                Anfragen →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
