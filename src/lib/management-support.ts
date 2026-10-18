export const managementPackages = [
  { name: "Aqua Basic", price: 390, heading: "Impulse & Beratung", benefits: ["Strategische Beratung", "Ideen für Kursangebote", "Support bei aktuellen Themen", "Monatlicher Austausch (online)"] },
  { name: "Aqua Professional", price: 790, heading: "Begleitung & Entwicklung", benefits: ["Regelmäßige Beratung", "Unterstützung bei Umsetzung", "Mitarbeiter- und Kursentwicklung", "Marketing-Impulse", "Monatliche Online-Meetings"] },
  { name: "Aqua Management Plus", price: 1490, heading: "Ganzheitliche Unterstützung", benefits: ["Individuelle Begleitung", "Strategie & Konzeptentwicklung", "Unterstützung im Tagesgeschäft", "Team- und Angebotsentwicklung", "Exklusive Impulse & Netzwerk", "Regelmäßige Online-Meetings"] },
] as const;

export const managementPricing = { currency: "EUR", tax: "net", interval: "month", startingAt: true } as const;