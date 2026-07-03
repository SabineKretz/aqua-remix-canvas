import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Clock } from "lucide-react";
import heroImg from "@/assets/weiterbildung-hero.jpg.asset.json";
import img1 from "@/assets/wb-DSC_0601.jpg.asset.json";
import aquafitnessTrainerImg from "@/assets/aquafitness-trainer-new.png.asset.json";
import img3 from "@/assets/wb-Event-Aqua-Zumba.jpg.asset.json";
import img4 from "@/assets/wb-DSC_0762-Kopie.jpg.asset.json";
import img5 from "@/assets/wb-DSC_1184.jpg.asset.json";
import img6 from "@/assets/wb-DSCN6709.jpg.asset.json";
import aquaDanceImg from "@/assets/aqua-dance.jpg.asset.json";
import babyImg from "@/assets/babyschwimmen2.jpg.asset.json";
import aquaKidsFunImg from "@/assets/aqua-kids-fun.jpg.asset.json";

export const Route = createFileRoute("/weiterbildung")({
  head: () => ({
    meta: [
      { title: "Weiterbildung – aqua-magic" },
      {
        name: "description",
        content:
          "Weiterbildungen bei Aqua Magic: Motivation für Schwimmlehrer und Aquafitness-Trainer, Aqua Fun & Animation, Aqua Creativ, Aqua Bootcamp, Aqua Fight und Aqua Dance.",
      },
    ],
  }),
  component: Page,
});

const items = [
  {
    title: "Motivation für Schwimmlehrer",
    text: "Sie leiten Schwimmkurse und wollen sich selbst und Ihre Teilnehmer mit neuen Ideen und Ansätzen begeistern? Wir haben ein Persönlichkeitstraining mit modernen Trainingsformen für Sie, damit sie die Kinder und Eltern gleichermaßen begeistern und ein modernes Schwimmtraining präsentieren können.",
    duration: "1 Tag",
    image: img1.url,
  },
  {
    title: "Motivation für Aquafitness-Trainer",
    text: "Sie leiten Aqua Fitness Kurse und wollen sich selbst und Ihre Teilnehmer mit neuen Ideen und Ansätzen begeistern? Wir haben ein Persönlichkeitstraining mit modernen Trainingsformen für Sie, damit sie Ihre Gäste begeistern werden und Ihnen neue Ideen präsentieren können.",
    duration: "1 Tag",
    image: aquafitnessTrainerImg.url,
  },
  {
    title: "Baby- und Bambini Spaß",
    text: "Auffrischung für Babyschwimmlehrer die gerne viele neue Ideen und Austausch möchten.",
    duration: "1 Tag",
    image: babyImg.url,
  },
  {
    title: "Aqua Fun & Animation",
    text: "Viele abwechslungsreiche Ideen für kleine Schwimmhallen bis hin zu Erlebnisbädern. Für die ganze Familie, Eltern mit Baby, Teenies, usw. Erlebnistage, Themennachmittage, Kurse.",
    duration: "1 Tag",
    image: img3.url,
  },
  {
    title: "Aqua Kid`s Fun",
    text: "Schwimmen lernen mal anders! – die etwas andere Schwimmausbildung. Zeitgemäßes Unterrichten auch für „Problem Kinder“! Grundlagen, Physiologie, Psychologie, Trainingslehre, Trainingsformen, Methodik, Didaktik, Kursaufbau, Marketing.",
    duration: "2 Tage",
    image: aquaKidsFunImg.url,
  },
  {
    title: "Aqua Creativ",
    text: "Sie sind schon Aqua Fitness Trainer, haben viel Erfahrung und hunderte von Teilnehmern geführt. Doch so manches Mal gehen Ihnen die Ideen aus? Wir haben sie für Sie: Ideen zur kreativen Gestaltung Ihrer Aqua Fitness Kurse. Wir zeigen Ihnen viele Möglichkeiten – unter anderem mit Alltagsthemen und Situationen kreativ umgesetzt, Tanz im und mit dem Wasser, Kampfsport, viele andere Sportarten miteinander kombiniert, Flach- und Tiefwassertraining sowie Training mit und ohne Gerät. Unendlich viele neue, verrückte und spannende Ideen – und viel Spaß im gemeinsamen Austausch!",
    duration: "1 Tag",
    image: img4.url,
  },
  {
    title: "Aqua Bootcamp Training",
    text: "Mit Spaß gesünder sein, mit Spaß aktiver werden, der Betonwüste entkommen und mehr Zeit an der frischen Luft verbringen (Freibad), sich natürlich bewegen und an individuelle Grenzen gehen, eigene Ziele erreichen, im Teamspirit sich gegenseitig unterstützen und motivieren, gemeinsam langfristigen Erfolg haben. Dieses Training ist auch für Mannschaften und Teams geeignet!",
    duration: "1 Tag",
    image: img5.url,
  },
  {
    title: "Aqua Fight",
    text: "Der Power-Kurs für alle Fighter! Männer sind hier herzlich willkommen – genauso wie jeder, der sich mit coolen Moves und Elementen aus Kickboxen, Boxen, Karate und Tai Chi fit halten will!",
    duration: "1 Tag",
    image: img6.url,
  },
  {
    title: "Aqua Dance",
    text: "Die herkömmliche Aqua Fitness aufgepeppt mit heißen Rhythmen und der Vielfalt, die der klassische, Standard-, Modern- und populäre Tanz bietet, begeistert jung und alt. Let's dance!",
    duration: "1 Tag",
    image: aquaDanceImg.url,
  },
];

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Weiterbildung"
        title="Weiterbildung bei Aqua Magic."
        subtitle="Neue Impulse, frische Ideen und Persönlichkeitstraining für Schwimmlehrer und Aqua-Fitness-Trainer."
        image={heroImg.url}
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article
              key={it.title}
              className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-primary hover:shadow-soft transition flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{it.text}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  <Clock className="size-4" />
                  Schulungsdauer: {it.duration}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
