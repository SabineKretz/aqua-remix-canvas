import { describe, expect, it } from "bun:test";
import { managementPackages, managementPricing } from "./management-support";

describe("Management Support monthly offers", () => {
  it("starts Aqua Basic at 390 euros", () => { expect(managementPackages.find(p => p.name === "Aqua Basic")?.price).toBe(390); });
  it("starts Aqua Professional at 790 euros", () => { expect(managementPackages.find(p => p.name === "Aqua Professional")?.price).toBe(790); });
  it("starts Aqua Management Plus at 1490 euros", () => { expect(managementPackages.find(p => p.name === "Aqua Management Plus")?.price).toBe(1490); });
  it("quotes monthly starting prices exclusive of tax", () => { expect(managementPricing).toEqual({ currency: "EUR", tax: "net", interval: "month", startingAt: true }); });
});