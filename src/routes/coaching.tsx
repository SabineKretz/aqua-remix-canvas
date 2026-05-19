import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Check } from "lucide-react";
import img from "@/assets/coaching.jpg";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Betriebliches Gesundheitsmanagement (BGM) – aqua-magic" },
      { name: "description", content: "Fit for life — Betriebliches Gesundheits­management. Investieren Sie in die Gesundheit Ihrer Mitarbeiter und sichern Sie langfristig die Wertschöpfung Ihres Unternehmens." },
    ],
  }),
  component: Page,
});

const companyBenefits = [
  "Wirtschaftlicher Nutzen — Nutzen überwiegt Kosten",
  "Erhöhung der Personalverfügbarkeit",
  "Reduzierung von Fehlzeiten — weniger Krankheits­tage",
  "Optimierung der Produkt­qualität",
  "Motivation und höhere Mitarbeiter­zufriedenheit",
  "Wettbewerbs­fähigkeit und positives Unternehmens­image",
  "Positives Betriebs­klima und Zusammenhalt",
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Business Coaching"
        title="Fit for Life — auf dem Weg zum gesunden Unternehmen."
        subtitle="Betriebliches Gesundheits­management (BGM) als Investition, die sich für Mitarbeiter und Unternehmen gleichermaßen lohnt."
        image={img}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-secondary p-8 md:p-12 mb-16">
          <div className="text-5xl text-accent font-display leading-none mb-2">„</div>
          <blockquote className="text-xl md:text-2xl font-display font-medium leading-snug max-w-3xl">
            Chef ist nicht der, der etwas tut, sondern der das Verlangen weckt, etwas zu tun.
          </blockquote>
          <div className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">Edgar Pisani</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Verantwortung für eine gesunde Organisation.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jeder Mensch ist für seine Gesundheit verantwortlich — und ebenso steht das Unternehmen in der Verantwortung für eine gesunde Organisation. Nur wenn Mitarbeiter gesund sind, können Leistungs­fähigkeit und Motivation das Betriebsklima prägen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Betriebliche Gesundheits­förderung baut vermeidbare Belastungen am Arbeitsplatz ab. Wer in seine Mitarbeiter investiert, sichert langfristig die Wettbewerbs­fähigkeit des Unternehmens.
            </p>
            <Link to="/unternehmen" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
              Beratung anfragen
            </Link>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold mb-6">Vorteile für Ihr Unternehmen</h3>
            <ul className="space-y-3">
              {companyBenefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <div className="mt-0.5 size-6 shrink-0 rounded-full bg-primary/10 grid place-items-center">
                    <Check className="size-3.5 text-primary" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
