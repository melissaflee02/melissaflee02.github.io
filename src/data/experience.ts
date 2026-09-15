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
      "Owned the time-critical production rollout of Pinterest's first context-aware safety filter across Homefeed, Search, and related surfaces, reducing filtration errors by 56% (8.7% to 3.86%) for minors and new users.",
      "Resolved launch bottlenecks for 15+ ML engineers by building an extensible real-time experimentation framework, cutting launch time from 7+ days to 2–3 days across 9+ experiments.",
      "Drove framework adoption across four partner teams as Content Quality's experimentation SME, delivering hands-on demos, writing end-to-end integration runbooks, and diagnosing production issues.",
      "Built serving infrastructure and APIs to migrate core content ranking from batch pipelines to online inference, cutting data staleness from 2–3 days to one day and user preference update latency from days to hours.",
      "Launched an ML shoppability signal for 600M+ monthly users, lifting shopping pin impressions 55% and repins 47%.",
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
