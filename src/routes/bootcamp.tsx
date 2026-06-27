import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Users, Zap, Trophy } from "lucide-react";
import img from "@/assets/bootcamp.jpg";

export const Route = createFileRoute("/bootcamp")({
  head: () => ({
    meta: [
      { title: "Bootcamp & Saisonvorbereitung – aqua-magic" },
      { name: "description", content: "Bootcamp mit dem Aqua-Magic-Team: 5 Einheiten à 90 Minuten. Verbesserung von Ausdauer, Flexibilität, Koordination — für Teams und Einzelpersonen." },
    ],
  }),
  component: Page,
});

const features = [
  { icon: Users, title: "Kleine Gruppen", desc: "Individuelle Betreuung im Teamspirit." },
  { icon: Zap, title: "Natürliche Bewegung", desc: "an der frischen Luft oder im erfrischenden Wasser - echtes Training." },
  { icon: Trophy, title: "Eigene Ziele", desc: "Gegenseitig motivieren und langfristig Erfolg haben." },
];

const dates = [
  "17.03. / 24.03. / 31.03. / 07.04. / 14.04.2025",
  "28.04. / 05.05. / 12.05. / 19.05. / 02.06.2025",
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Saisonvorbereitung"
        title="Bootcamp und Trainingsvorbereitung"
        subtitle="Saisonvorbereitung für Mannschaften, Teams und Privatpersonen"
        image={img}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trainingsvorbereitung mit dem Aqua-Magic Team</h2>
        <p className="text-xl md:text-2xl max-w-4xl mb-16">
          Gemeinsam trainieren, Grenzen neu definieren und mit Freude stärker werden - Schritt für Schritt zum Erfolg.
        </p>
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl border border-border bg-card p-7">
              <div className="size-12 rounded-2xl bg-gradient-sun grid place-items-center mb-4">
                <f.icon className="size-5 text-accent-foreground" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-14">
          <div className="text-xs tracking-widest uppercase opacity-80 mb-3">Kursstart</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">individuell auf Anfrage</h2>
          <p className="opacity-90 max-w-xl">
            Für Mannschaften und Teams buchbar - wir erstellen Ihnen gern ein individuell abgestimmtes Angebot.
          </p>
          <Link to="/unternehmen" className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-semibold">
            Jetzt anfragen
          </Link>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Trainings­ziele</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Verbesserung der Ausdauer",
              "Den Gegner stehen lassen",
              "Flexibilität, Koordination & Balance",
              "Der Torjäger voll fit",
              "Schnelle Rehabilitation",
              "Mehr Leistungs­fähigkeit",
            ].map((g) => (
              <div key={g} className="px-5 py-4 rounded-2xl bg-secondary text-secondary-foreground font-medium">
                {g}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
