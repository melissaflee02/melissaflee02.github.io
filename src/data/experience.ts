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
      "Led the rollout of Pinterest's first context-aware safety filter on Homefeed and Search. It cut filtering errors for minors and new users by 56% (8.7% → 3.86%).",
      "Built a real-time experimentation framework that 15+ ML engineers now use to launch experiments in 2–3 days instead of a week or more.",
      "I'm the go-to person on Content Quality for experimentation, and have helped four partner teams get set up through demos, runbooks, and debugging sessions.",
      "Built the serving infrastructure and APIs that moved content ranking from nightly batch jobs to online inference, so ranking data is a day old instead of two or three and preference updates land in hours instead of days.",
      "Launched an ML signal that surfaces shoppable pins to 600M+ monthly users, lifting shopping pin impressions 55% and repins 47%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Riot Games",
    orgUrl: "https://www.riotgames.com/en",
    period: "Summers 2022 & 2023",
    bullets: [
      "Built a matchmaking simulator that runs on synthetic and live-match data. Five game teams adopted it and cut their algorithm iteration time by 30–35%.",
      "Shipped a real-time name-safety system for every Riot title, using a BERT classifier that caught 50% more offensive names.",
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
