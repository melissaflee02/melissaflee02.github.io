export interface Project {
  name: string;
  description: string;
  tags: string[];
  href: string;
  /** Call-to-action label; defaults to "View on GitHub". */
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    name: "Oovoo",
    description:
      "A mobile app that replaces carpool spreadsheets for Stanford communities: post a trip, join as a driver or rider, and see who you're traveling with. Built as my 2024 Senior Capstone.",
    tags: ["React Native", "Expo", "Capstone"],
    href: "https://github.com/melissaflee02/oovoo",
  },
  {
    name: "Deck & Table",
    description:
      "Printable rules, scoring, and cheat sheets for 15 classic card games. A dependency-free static site designed for quick, distraction-free reading at the table.",
    tags: ["Static Site", "JavaScript", "SEO"],
    href: "https://deckandtable.com/",
    linkLabel: "Visit deckandtable.com",
  },
  {
    name: "This Website",
    description:
      "This site: a minimal, editorial home for my work, built with Astro and Tailwind CSS and deployed on GitHub Pages.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/melissaflee02/melissaflee02.github.io",
  },
];
