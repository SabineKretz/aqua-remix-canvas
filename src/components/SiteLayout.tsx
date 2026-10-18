import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import logoUrl from "@/assets/aqua-magic-logo.png";

const nav = [
  { to: "/", label: "Start" },
  { to: "/aquafitness", label: "Aqua Fitness" },
  { to: "/bootcamp", label: "Bootcamp" },
  { to: "/ausbildung", label: "Ausbildung" },
  { to: "/weiterbildung", label: "Weiterbildung" },
  { to: "/inhouse", label: "Inhouse" },
  { to: "/coaching", label: "Business Coaching" },
  { to: "/unternehmen", label: "Über uns" },
] as const;

const coachingNav = [
  { to: "/coaching", label: "BGM" },
  { to: "/management-support", label: "Management Support" },
] as const;

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-18 flex items-center justify-between py-4">
          <Link to="/" className="flex items-center group">
            <img src={logoUrl} alt="aqua-magic Deutschland" className="h-12 w-auto group-hover:scale-105 transition-transform" />
          </Link>
          <nav aria-label="Hauptnavigation" className="hidden xl:flex items-center gap-1">
            {nav.map((n) => {
              if (n.to === "/coaching") {
                const active = coachingNav.some((item) => loc.pathname === item.to);
                return (
                  <DropdownMenu key={n.to}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className={`rounded-full px-3 ${active ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}>
                        Business Coaching <ChevronDown className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-52">
                      {coachingNav.map((item) => <DropdownMenuItem key={item.to} asChild><Link to={item.to} aria-current={loc.pathname === item.to ? "page" : undefined}>{item.label}</Link></DropdownMenuItem>)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              const active = loc.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    active ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <Link
            to="/unternehmen"
            className="hidden xl:inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition shadow-soft"
          >
            Kontakt
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="xl:hidden" aria-label="Menü" aria-expanded={open} aria-controls="mobile-navigation">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
        {open && (
          <div id="mobile-navigation" className="xl:hidden border-t border-border bg-background max-h-[calc(100dvh-80px)] overflow-y-auto">
            <div className="px-6 py-4 flex flex-col gap-1">
              {nav.map((n) => n.to === "/coaching" ? (
                <div key={n.to}>
                  <div className="px-3 py-2.5 text-sm font-semibold">Business Coaching</div>
                  <div className="ml-6 border-l border-border pl-2 flex flex-col">
                    {coachingNav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="px-3 py-2.5 text-sm hover:bg-secondary rounded-lg" aria-current={loc.pathname === item.to ? "page" : undefined}>{item.label}</Link>)}
                  </div>
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t border-border bg-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4 inline-block rounded-2xl bg-primary-foreground p-3">
              <img src={logoUrl} alt="aqua-magic Deutschland" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Ihr Partner für Gesundheit, Aqua Fitness und betriebliches Gesundheitsmanagement seit 1997.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {nav.map((n) => (
                <li key={n.to}>{n.to === "/coaching" ? <><span className="font-medium">Business Coaching</span><ul className="ml-3 mt-2 space-y-2">{coachingNav.map((item) => <li key={item.to}><Link to={item.to} className="hover:text-accent transition">{item.label}</Link></li>)}</ul></> : <Link to={n.to} className="hover:text-accent transition">{n.label}</Link>}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <address className="not-italic text-sm text-primary-foreground/ship space-y-1">
              <div>aqua-magic Deutschland</div>
              <div>Ebracher Weg 24</div>
              <div>D 97513 Michelau im Steigerwald</div>
              <div className="pt-2">Natascha Woithe</div>
              <div>Tel. 0172 / 9367279</div>
              <div>
                <a href="mailto:info@happiness-rebel-academy.de" className="hover:text-accent transition">
                  info@happiness-rebel-academy.de
                </a>
              </div>
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/60 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} aqua-magic Deutschland</span>
            <nav className="flex flex-wrap gap-4">
              <Link to="/impressum" className="hover:text-accent transition">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-accent transition">Datenschutz</Link>
              <Link to="/agb" className="hover:text-accent transition">AGB</Link>
            </nav>
            <span className="opacity-80">„Was immer du tun kannst oder träumst es zu können, fang damit an." — Goethe</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
