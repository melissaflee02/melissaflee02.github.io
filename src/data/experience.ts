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
      "Led the production rollout of Pinterest's first context-aware safety filter across Homefeed and Search, cutting filtration errors for minors and new users by 56% (8.7% → 3.86%).",
      "Built a real-time experimentation framework used by 15+ ML engineers, bringing launch time down from 7+ days to 2–3 across 9+ experiments.",
      "Serve as Content Quality's experimentation SME: onboarded four partner teams through demos, integration runbooks, and production debugging.",
      "Built the serving infrastructure and APIs that moved core content ranking from batch pipelines to online inference — data staleness dropped from 2–3 days to one, and preference updates from days to hours.",
      "Launched an ML shoppability signal for 600M+ monthly users, lifting shopping pin impressions 55% and repins 47%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Riot Games",
    orgUrl: "https://www.riotgames.com/en",
    period: "Summers 2022 & 2023",
    bullets: [
      "Built a matchmaking simulation framework on synthetic and live-match data, adopted by 5+ game teams and cutting algorithm iteration time 30–35%.",
      "Shipped a real-time name-safety system across all Riot titles, using a BERT classifier to improve offensive-name detection by 50%.",
    ],
  },
  {
    role: "B.S. Computer Science",
    org: "Stanford University",
    orgUrl: "https://www.stanford.edu/",
    period: "June 2024",
    bullets: [
      "Artificial Intelligence concentration · 4.00 GPA · Tau Beta Pi Engineering Honor Society.",
    ],
  },
];
