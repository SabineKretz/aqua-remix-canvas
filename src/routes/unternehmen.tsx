import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export const Route = createFileRoute("/unternehmen")({
  head: () => ({
    meta: [
      { title: "Unternehmen & Kontakt – aqua-magic Deutschland" },
      { name: "description", content: "Aqua-Magic Deutschland aus Michelau im Steigerwald. Ihr Partner für Gesundheit, Aqua Fitness und BGM seit 1997. Kontaktieren Sie uns." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Unternehmen"
        title="Aqua-Magic Deutschland."
        subtitle="Seit 1997 Ihr Partner für Gesundheit, Aqua Fitness und betriebliches Gesundheits­management."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Über uns</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Aqua-Magic Deutschland ist Teil der Happiness-Rebel-Academy (ehemals human-magic) — gegründet aus der Überzeugung, dass Gesundheit, Bewegung und Lebensfreude untrennbar zusammen­gehören. Seit über 25 Jahren bilden wir Trainer aus, gestalten Kurse für jedes Alter und begleiten Unternehmen auf dem Weg zu einer gesunden Organisation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unser Team verbindet sportliche Spitzen­leistung mit pädagogischem Anspruch — vom Babyschwimmen bis zum Aqua Power. Erfolg machen wir nicht nur messbar, sondern spürbar.
          </p>

          <div className="mt-10 flex gap-3">
            <a
              href="https://www.facebook.com/Aqua-Magic-part-of-human-magic-193854060668544/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition text-sm font-medium"
            >
              <Facebook className="size-4" /> Facebook
            </a>
            <a
              href="https://www.picomico.com/aqua_magic_deutschland_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition text-sm font-medium"
            >
              <Instagram className="size-4" /> Instagram
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-8 md:p-10 shadow-glow">
          <h3 className="text-2xl font-bold mb-6">Kontakt</h3>
          <ul className="space-y-5">
            <li className="flex gap-4">
              <div className="size-10 shrink-0 rounded-xl bg-primary-foreground/15 grid place-items-center">
                <MapPin className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest opacity-70">Adresse</div>
                <div className="font-medium">aqua-magic Deutschland</div>
                <div className="opacity-90 text-sm">Ebracher Weg 24<br />D-97513 Michelau im Steigerwald</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="size-10 shrink-0 rounded-xl bg-primary-foreground/15 grid place-items-center">
                <Phone className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest opacity-70">Telefon</div>
                <div className="font-medium">Natascha Woithe</div>
                <a href="tel:+491729367279" className="opacity-90 text-sm hover:text-accent">0172 / 9367279</a>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="size-10 shrink-0 rounded-xl bg-primary-foreground/15 grid place-items-center">
                <Mail className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest opacity-70">E-Mail</div>
                <a href="mailto:info@happiness-rebel-academy.de" className="opacity-90 text-sm hover:text-accent transition">info@happiness-rebel-academy.de</a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
