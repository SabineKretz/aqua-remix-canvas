import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Waves, Dumbbell, GraduationCap, Building2, Heart, Sparkles } from "lucide-react";
import logoUrl from "@/assets/aqua-magic-logo.jpg";
import heroImg from "@/assets/hero-water.jpg";
import aquaImg from "@/assets/aquafitness.jpg";
import bootcampImg from "@/assets/bootcamp.jpg";
import inhouseImg from "@/assets/inhouse.jpg";
import ausbildungImg from "@/assets/ausbildung.jpg";
import coachingImg from "@/assets/coaching.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "aqua-magic Deutschland – Ihr Partner für Gesundheit seit 1997" },
      { name: "description", content: "5 Säulen für Ihren gesunden Erfolg: Aqua Fitness Kurse, Ausbildung, Bootcamp, Inhouse-Schulungen und BGM. Aqua-Magic Deutschland aus Michelau im Steigerwald." },
    ],
  }),
  component: Home,
});

const pillars = [
  { to: "/bootcamp" as const, title: "Saison­vorbereitung", desc: "Ziele mit dem Team erreichen.", icon: Dumbbell, img: bootcampImg },
  { to: "/inhouse" as const, title: "Inhouse Schulung", desc: "Schulung bei Ihnen vor Ort.", icon: Building2, img: inhouseImg },
  { to: "/aquafitness" as const, title: "Aqua Fitness­kurse", desc: "Fitness­training im Wasser.", icon: Waves, img: aquaImg },
  { to: "/ausbildung" as const, title: "Aus- & Weiterbildung", desc: "Überblick über unser Angebot.", icon: GraduationCap, img: ausbildungImg },
  { to: "/coaching" as const, title: "Business Coaching", desc: "Investition in Ihre Mitarbeiter.", icon: Heart, img: coachingImg },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 size-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-br from-deep/80 via-deep/50 to-primary/30" />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-32 md:pt-40 md:pb-48 text-primary-foreground">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-xs font-medium tracking-widest uppercase mb-8">
                <Sparkles className="size-3.5 text-accent" /> est. 1997
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-4xl">
                Bewegung im <span className="text-accent">Wasser.</span><br />
                Energie fürs Leben.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
                Aqua-Magic Deutschland — Ihr Partner für Gesundheit, Aqua Fitness und betriebliches Gesundheits­management. Fünf Säulen für Ihren gesunden Erfolg.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/aquafitness" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-glow hover:scale-[1.02] transition">
                  Kurse entdecken <ArrowRight className="size-4" />
                </Link>
                <Link to="/ausbildung" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 font-medium hover:bg-primary-foreground/20 transition">
                  Trainer werden
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 lg:mt-10">
              <img src={logoUrl} alt="aqua-magic Deutschland Logo" className="h-24 md:h-36 lg:h-48 w-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-sm tracking-widest uppercase text-accent font-semibold mb-3">Unsere 5 Säulen</div>
            <h2 className="text-4xl md:text-5xl font-bold max-w-xl">Ihr Weg zum gesunden Erfolg.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Von der Saisonvorbereitung über Aqua Fitness bis zur Trainer-Ausbildung und betrieblichem Gesundheits­management — alles aus einer Hand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border shadow-soft hover:shadow-glow transition-all ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="size-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-9 rounded-xl bg-accent/90 grid place-items-center">
                    <p.icon className="size-4 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-primary-foreground/80">{p.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Mehr erfahren <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <div className="text-6xl text-accent font-display leading-none mb-4">„</div>
        <blockquote className="text-2xl md:text-4xl font-display font-medium leading-tight max-w-3xl mx-auto">
          Was immer du tun kannst oder träumst es zu können, fang damit an.
        </blockquote>
        <div className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">Johann Wolfgang von Goethe</div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-16 grid md:grid-cols-3 gap-10 shadow-glow">
          {[
            { k: "25+", v: "Jahre Erfahrung seit 1997" },
            { k: "5", v: "Säulen für Ihren Erfolg" },
            { k: "Flexibel", v: "an verschiedenen Standorten und auf Anfrage auch bei Ihnen" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-6xl md:text-7xl font-display font-bold">{s.k}</div>
              <div className="mt-2 text-primary-foreground/80">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
