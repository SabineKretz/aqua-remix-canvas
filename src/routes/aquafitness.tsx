import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check, MapPin } from "lucide-react";
import img from "@/assets/aquafitness.jpg";

export const Route = createFileRoute("/aquafitness")({
  head: () => ({
    meta: [
      { title: "Aqua Fitness Kurse – aqua-magic Deutschland" },
      { name: "description", content: "Fitness im Wasser für jedes Alter. Gelenkschonend, effektiv und voller Spaß. An verschiedenen Standorten und auf Anfrage auch bei Ihnen." },
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
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col items-center gap-4 hover:border-primary hover:shadow-soft transition text-center">
            <div className="size-14 rounded-2xl bg-gradient-ocean grid place-items-center shrink-0">
              <MapPin className="size-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Sennfeld</h3>
              <p className="text-muted-foreground">
                Aqua-Fitness-Kurse in Sennfeld. Melden Sie sich für aktuelle Termine und Details.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col items-center gap-4 hover:border-primary hover:shadow-soft transition text-center">
            <div className="size-14 rounded-2xl bg-gradient-ocean grid place-items-center shrink-0">
              <MapPin className="size-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Schwebheim</h3>
              <p className="text-muted-foreground">
                Aqua-Fitness-Kurse in Schwebheim. Melden Sie sich für aktuelle Termine und Details.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 flex flex-col items-center gap-4 hover:border-primary hover:shadow-soft transition text-center">
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
