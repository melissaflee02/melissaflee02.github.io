export interface Experience {
  role: string;
  org: string;
  orgUrl: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "Pinterest",
    orgUrl: "https://www.pinterest.com/",
    period: "Current",
    bullets: [
      "Working on backend infrastructure that powers Pinterest at scale.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Riot Games",
    orgUrl: "https://www.riotgames.com/en",
    period: "Summer Internship",
    bullets: [
      "Architected and implemented an end-to-end match simulation framework used by teams across League of Legends, Valorant, and R&D to iteratively test and optimize matchmaking algorithms.",
      "Integrated an industry-leading BERT NLP model into Riot's name-checking pipeline, improving offensive name detection by 50%.",
    ],
  },
  {
    role: "B.S. / M.S. Computer Science",
    org: "Stanford University",
    orgUrl: "https://www.stanford.edu/",
    period: "Artificial Intelligence & Computer Systems",
    bullets: [
      "Earned a dual Bachelor's and Master's degree with concentrations in AI and Computer Systems.",
    ],
  },
];
