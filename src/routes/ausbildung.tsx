import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GraduationCap, ArrowRight } from "lucide-react";
import img from "@/assets/ausbildung.jpg";

export const Route = createFileRoute("/ausbildung")({
  head: () => ({
    meta: [
      { title: "Aus- und Weiterbildung – aqua-magic" },
      { name: "description", content: "Ausbildungen bei Aqua-Magic Deutschland: Fit Board, Aqua Fitness Trainer, Baby- & Bambinischwimmen, Prä- und Postnatales Aquatraining, Aqua Body & Soul Balancing." },
    ],
  }),
  component: Page,
});

const courses = [
  { title: "Fit Board", desc: "Ausbildung am innovativen Wasser-Board für dynamisches Training." },
  { title: "Aqua Fitness Trainer", desc: "Die fundierte Ausbildung zum zertifizierten Aqua Fitness Trainer." },
  { title: "Baby- & Bambinischwimmen", desc: "Wassergewöhnung und Bewegungs­förderung für die Kleinsten." },
  { title: "Prä- & Postnatales Aquatraining", desc: "Spezialisiertes Training für die Zeit vor und nach der Geburt." },
  { title: "Aqua Body & Soul Balancing", desc: "Wellness und Entspannung im Wasser — für Körper und Seele." },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Ausbildung"
  title="Werden Sie Teil unserer Trainer-Familie."
        subtitle="Fünf zertifizierte Ausbildungen - vom Aqua Fitness Trainer, über Babyschwimmen und Fit Board bis zum Aqua Body & Soul Balancing."
        image={img}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <article
              key={c.title}
              className={`group rounded-3xl border border-border bg-card p-7 hover:border-primary hover:shadow-soft transition ${
                i === 0 ? "lg:col-span-2 bg-gradient-hero text-primary-foreground border-transparent" : ""
              }`}
            >
              <div className={`size-12 rounded-2xl grid place-items-center mb-5 ${
                i === 0 ? "bg-primary-foreground/15" : "bg-primary/10"
              }`}>
                <GraduationCap className={`size-5 ${i === 0 ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className={`text-sm ${i === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{c.desc}</p>
              <Link to="/unternehmen" className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                i === 0 ? "text-accent" : "text-primary"
              }`}>
                Anmeldung <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-secondary p-10 md:p-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Bereit für den nächsten Schritt?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Wir freuen uns, Sie und Ihr Team kennenzulernen. Kontaktieren Sie uns für die Anmeldung oder bei Fragen.
          </p>
          <Link to="/unternehmen" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">
            Zum Kontakt
          </Link>
        </div>
      </section>
    </>
  );
}
