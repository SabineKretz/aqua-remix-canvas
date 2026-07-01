import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GraduationCap, ArrowRight } from "lucide-react";
import img from "@/assets/ausbildung.jpg";
import aquaFitnessImg from "@/assets/aus-aqua-fitness-trainer.jpg.asset.json";
import fitBoardImg from "@/assets/aus-fit-board.jpg.asset.json";
import babyImg from "@/assets/aus-babyschwimmen.jpg.asset.json";
import bodySoulImg from "@/assets/aus-aqua-body-soul.jpg.asset.json";
import prePostnatalImg from "@/assets/pre-postnatal-aqua.png.asset.json";

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
  { title: "Aqua Fitness Trainer", desc: "Die fundierte Ausbildung zum zertifizierten Aqua Fitness Trainer.", image: aquaFitnessImg.url },
  { title: "Fit Board", desc: "Ausbildung am innovativen Wasser-Board für dynamisches Training.", image: fitBoardImg.url },
  { title: "Baby- & Bambinischwimmen", desc: "Wassergewöhnung und Bewegungs­förderung für die Kleinsten.", image: babyImg.url },
  { title: "Prä- & Postnatales Aquatraining", desc: "Spezialisiertes Training für die Zeit vor und nach der Geburt.", image: prePostnatalImg.url },
  { title: "Aqua Body & Soul Balancing", desc: "Wellness und Entspannung im Wasser — für Körper und Seele.", image: bodySoulImg.url },
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
              className={`group rounded-3xl overflow-hidden border border-transparent bg-gradient-hero text-primary-foreground hover:shadow-soft transition flex flex-col ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {c.image && (
                <div className={c.title === "Fit Board" ? "" : "aspect-[16/9] overflow-hidden"}>
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className={c.title === "Fit Board" ? "w-full object-contain group-hover:scale-105 transition-transform duration-500" : "size-full object-cover group-hover:scale-105 transition-transform duration-500"}
                  />
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <div className="size-12 rounded-2xl grid place-items-center mb-5 bg-primary-foreground/15">
                  <GraduationCap className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-sm text-primary-foreground/80">{c.desc}</p>
                <Link to="/unternehmen" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Anmeldung <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
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
