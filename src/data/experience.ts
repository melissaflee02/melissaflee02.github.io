export interface Experience {
  role: string;
  org: string;
  orgUrl: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer II",
    org: "Pinterest",
    orgUrl: "https://www.pinterest.com/",
    period: "Sept 2024 — Present",
    bullets: [
      "Owned the production rollout of Pinterest's first context-aware safety filter across Homefeed, Search, and related surfaces, reducing filtration errors for minors and new users from 8.7% to 3.86%.",
      "Built a real-time experimentation framework now used by 15+ ML engineers, cutting launch time from 7+ days to 2–3 days across 9+ experiments, and drove adoption across four partner teams as Content Quality's experimentation SME.",
      "Migrated core content ranking from batch pipelines to online inference, cutting data staleness from 2–3 days to one day, and launched an ML shoppability signal for 600M+ monthly users that lifted shopping pin impressions by 55%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Riot Games",
    orgUrl: "https://www.riotgames.com/en",
    period: "Summers 2022 & 2023",
    bullets: [
      "Built a matchmaking simulation framework adopted by 5+ game teams, combining synthetic and live-match data to cut algorithm iteration time by 30–35%.",
      "Shipped a real-time name-safety system across all Riot titles, pairing parallel evaluators with a BERT classifier to improve offensive-name detection by 50%.",
    ],
  },
  {
    role: "B.S. Computer Science",
    org: "Stanford University",
    orgUrl: "https://www.stanford.edu/",
    period: "June 2024",
    bullets: [
      "Concentrated in Artificial Intelligence. 4.00 GPA; Tau Beta Pi Engineering Honor Society.",
    ],
  },
];
