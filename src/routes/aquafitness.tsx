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
        title="Der Trend Aqua-Fitness — für jedes Alter."
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
        <p className="text-muted-foreground mb-10">Vier Standorte in der Region — finden Sie Ihren Kurs in Ihrer Nähe.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((loc) => (
            <div key={loc} className="group rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-soft transition">
              <div className="size-11 rounded-2xl bg-gradient-ocean grid place-items-center mb-4">
                <MapPin className="size-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">{loc}</h3>
              <p className="text-sm text-muted-foreground mt-1">Aqua Fitness Kurse</p>
              <Link to="/unternehmen" className="mt-4 inline-block text-sm font-medium text-primary group-hover:underline">
                Anfragen →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
