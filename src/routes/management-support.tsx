import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users, CalendarDays, HeartHandshake, Lightbulb, Compass, Mail, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { managementPackages } from "@/lib/management-support";
import heroImage from "@/assets/management-support-3.jpg";
import offerImage from "@/assets/management-support-2.jpg";
import wavesBackground from "@/assets/waves-background.jpg";

export const Route = createFileRoute("/management-support")({
  head: () => ({ meta: [
    { title: "Management Support für Schwimmbäder & Thermen – Aqua Magic" },
    { name: "description", content: "Externe Management-Unterstützung für Badleitungen: Personalführung, Kursplanung und Entwicklung mit über 30 Jahren Branchenerfahrung. Ab 390 € netto monatlich." },
    { property: "og:title", content: "Aqua Magic Management Support" },
    { property: "og:description", content: "Sie führen Ihr Bad. Wir stärken Ihnen den Rücken! Praxisnahe Management-Unterstützung für Schwimmbäder und Thermen ab 390 € netto monatlich." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ManagementSupport,
});

const services = [
  { icon: Users, text: "Personalführung und Teamentwicklung" },
  { icon: Lightbulb, text: "Entwicklung attraktiver Kursangebote" },
  { icon: CalendarDays, text: "Jahresplanung, Veranstaltungen und neue Projekte" },
  { icon: HeartHandshake, text: "Kundenbindung und Weiterentwicklung Ihres Hauses" },
  { icon: Compass, text: "Aktuelle Herausforderungen und wichtige Entscheidungen" },
];

function ManagementSupport() {
  return <>
    <section className="relative isolate overflow-hidden bg-deep text-primary-foreground">
      <img src={teamImage} alt="Das Aqua Magic Team am Schwimmbecken" className="absolute inset-0 -z-20 size-full object-cover object-top" />
      <div className="absolute inset-0 -z-10 bg-deep/75" />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase mb-5">Business Coaching · Neu bei Aqua Magic</p>
        <h1 className="max-w-3xl text-4xl md:text-6xl font-bold leading-tight">Aqua Magic<br /><span className="text-accent">Management Support</span></h1>
        <p className="mt-6 max-w-2xl text-2xl md:text-3xl font-display font-semibold">Sie führen Ihr Bad.<br />Wir stärken Ihnen den Rücken!</p>
        <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">Ihre externe Management-Unterstützung für Schwimmbäder und Thermen.</p>
        <Button asChild size="lg" className="mt-8 h-auto min-h-11 whitespace-normal bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/unternehmen">Kennenlernen vereinbaren <ArrowRight /></Link></Button>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Verantwortung tragen.<br />Unterstützung gewinnen.</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">Personalführung, Kursplanung, Mitarbeiterentwicklung, Kundenbindung, Veranstaltungen und wirtschaftliche Ziele – als Badleitung tragen Sie täglich Verantwortung.</p>
          <p className="mt-5 text-lg leading-relaxed">Wie wertvoll wäre da eine erfahrene Unterstützung, die Ihre Branche versteht, mitdenkt und gemeinsam mit Ihnen neue Möglichkeiten entwickelt?</p>
        </div>
        <div className="border-l-4 border-accent pl-6">
          <p className="text-5xl font-display font-bold text-primary">30+</p>
          <p className="mt-3 text-xl font-semibold">Jahre Branchenerfahrung</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">Eine erfahrene Ansprechpartnerin an Ihrer Seite. Praxisnah, individuell und direkt umsetzbar.</p>
        </div>
      </div>
      <h2 className="mt-16 text-3xl font-bold">Wir begleiten Sie bei:</h2>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ icon: Icon, text }) => <div key={text} className="rounded-lg border border-border bg-card p-6"><Icon className="size-8 text-primary mb-5" /><h3 className="text-lg font-semibold leading-snug">{text}</h3></div>)}
      </div>
    </section>

    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <p className="text-primary font-semibold mb-3">Ihr Mehrwert</p>
        <h2 className="text-3xl md:text-4xl font-bold max-w-3xl">Mehr Freiraum für Ihre Führungsaufgaben.</h2>
        <div className="grid sm:grid-cols-3 gap-8 mt-10">
          {["Frische Perspektiven.", "Praxisnahe Lösungen.", "Eine erfahrene Ansprechpartnerin an Ihrer Seite."].map(text => <div key={text} className="flex gap-3 text-xl font-semibold"><Check className="size-6 text-accent shrink-0 mt-1" /><p>{text}</p></div>)}
        </div>
        <p className="mt-10 max-w-3xl text-lg text-muted-foreground leading-relaxed">Und das alles zum planbaren monatlichen Festpreis – ohne eine zusätzliche feste Personalstelle schaffen zu müssen.</p>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold">Die passende Unterstützung für Ihr Haus.</h2>
      <p className="mt-5 text-xl text-muted-foreground">Bereits ab <span className="text-foreground font-semibold">390 € netto monatlich.</span></p>
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        {managementPackages.map((offer, i) => <article key={offer.name} className={`rounded-lg border bg-card p-6 md:p-8 flex flex-col ${i === 1 ? "border-accent" : "border-border"}`}>
          <p className="text-sm text-muted-foreground mb-3">{offer.heading}</p>
          <h3 className="text-2xl font-bold">{offer.name}</h3>
          <p className="mt-6 text-sm text-muted-foreground">ab <span className="text-4xl font-display font-bold text-primary">{offer.price.toLocaleString("de-DE")} €</span></p>
          <p className="mt-2 text-sm text-muted-foreground">netto / Monat</p>
          <ul className="my-8 space-y-4 flex-1">{offer.benefits.map(benefit => <li key={benefit} className="flex gap-3"><Check className="size-5 shrink-0 text-primary mt-0.5" /><span>{benefit}</span></li>)}</ul>
          <Button asChild variant="outline" className="w-full"><Link to="/unternehmen">Gespräch anfragen <ArrowRight /></Link></Button>
        </article>)}
      </div>
      <div className="grid md:grid-cols-3 items-start gap-6 mt-16">
        {images.map(image => <Dialog key={image.src}><DialogTrigger asChild><Button variant="ghost" className="group relative block h-auto w-full p-0 overflow-hidden rounded-lg" aria-label={`${image.title} – vergrößern`}><img src={image.src} alt={image.title} loading="lazy" className="w-full h-auto" /><span className="absolute bottom-3 right-3 bg-background text-foreground p-2 rounded-full shadow-soft"><Expand className="size-5" /></span></Button></DialogTrigger><DialogContent className="max-w-4xl max-h-[90dvh] overflow-y-auto"><DialogTitle className="pr-8">{image.title}</DialogTitle><img src={image.src} alt={image.title} className="w-full h-auto" /></DialogContent></Dialog>)}
      </div>
    </section>

    <section className="bg-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Gemeinsam mehr bewegen!</h2>
        <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85 leading-relaxed">Lassen Sie uns kennenlernen und herausfinden, wie Aqua Magic Sie und Ihr Haus unterstützen kann.</p>
        <div className="mt-8 flex flex-wrap gap-4 items-center"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/unternehmen">Kontakt aufnehmen <ArrowRight /></Link></Button><a href="mailto:info@happiness-rebel-academy.de" className="inline-flex items-center gap-2 text-sm break-all hover:text-accent"><Mail className="size-4 shrink-0" />info@happiness-rebel-academy.de</a></div>
      </div>
    </section>
  </>;
}