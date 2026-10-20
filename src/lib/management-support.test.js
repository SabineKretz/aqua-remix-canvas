import { describe, expect, it } from "bun:test";
import { managementPackages, managementPricing } from "./management-support";

describe("Management Support monthly offers", () => {
  it("starts Aqua Basic at 490 euros", () => { expect(managementPackages.find(p => p.name === "Aqua Basic")?.price).toBe(490); });
  it("starts Aqua Professional at 890 euros", () => { expect(managementPackages.find(p => p.name === "Aqua Professional")?.price).toBe(890); });
  it("starts Aqua Management Plus at 1590 euros", () => { expect(managementPackages.find(p => p.name === "Aqua Management Plus")?.price).toBe(1590); });
  it("quotes monthly starting prices exclusive of tax", () => { expect(managementPricing).toEqual({ currency: "EUR", tax: "net", interval: "month", startingAt: true }); });
});