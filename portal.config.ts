/**
 * Ilocos Sur province scope, resolved with the live API on November 1, 2026 (Asia/Manila).
 * What each field means: src/config.ts. Check it against the live API: `npm run check`.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: "ilocos-sur-province",
  kind: "province",
  name: "Province of Ilocos Sur",
  shortName: "Ilocos Sur",
  logo: "/brand/ilocos-sur-mark.svg",
  siteUrl: "https://ilocos-sur-budget.roomyalder.chatgpt.site",
  buildYourOwnStrip: false,
  operator: {
    name: "Ilocos Sur Budget Watch",
    url: "https://github.com/torranx/transparency-portal"
  },
  scope: {
    offices: [
      "Ilocos Sur 1st District Engineering Office",
      "Ilocos Sur 2nd District Engineering Office"
    ],
    places: [
      {
        label: "Ilocos Sur",
        q: "Ilocos Sur",
        region: "I"
      }
    ],
    districts: [
      "leg:ilocos-sur:1st",
      "leg:ilocos-sur:2nd"
    ],
    // The API matches words and substrings separately; these titles name other provinces.
    // All exclusions and reasons are published on the About page.
    exclude: [
      { key: "dpwh:house-reading:6555", reason: "The title locates Lacuben-Gabut Sur bridge in Badoc, Ilocos Norte, outside Ilocos Sur." },
      { key: "dpwh:house-reading:6703", reason: "The title locates Barangay Pagsanahan Sur road in Badoc, Ilocos Norte, outside Ilocos Sur." },
      { key: "dpwh:house-reading:11193", reason: "The title locates the Metro Gabu covered court in Laoag City, Ilocos Norte, outside Ilocos Sur." },
      { key: "dpwh:house-reading:6644", reason: "The title locates Barangay Nagsurot road construction in Burgos, Ilocos Norte, outside Ilocos Sur." },
      { key: "dpwh:house-reading:6691", reason: "The title locates Barangay Nagsurot road rehabilitation in Burgos, Ilocos Norte, outside Ilocos Sur." },
      { key: "dpwh:house-reading:6616", reason: "The title locates Barangay Surong bridge in Pasuquin, Ilocos Norte, outside Ilocos Sur." },
      { key: "dpwh:house-reading:11265", reason: "The title locates the Barangay 35 Gabu Sur covered court in Laoag City, Ilocos Norte, outside Ilocos Sur." },
      { key: "fmr:pair:nep_fmr:p3:r17:ib:p669:r9", reason: "The title locates Tanap-Nagsurot farm-to-market road in Burgos, Ilocos Norte, outside Ilocos Sur." },
      { key: "fmr:house_only:ib:p672:r14", reason: "The title locates Barangay Manambong Sur farm-to-market road in Bayambang, Pangasinan, outside Ilocos Sur." }
    ]
  },
  reporting: {
    enabled: false
  }
});
