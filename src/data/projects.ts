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
      "A carpooling app I built for my Stanford senior capstone. Post a trip, hop in as a driver or rider, and see who you're riding with, without the group chats and spreadsheets.",
    tags: ["React Native", "Expo", "Capstone"],
    href: "https://github.com/melissaflee02/oovoo",
  },
  {
    name: "Deck & Table",
    description:
      "Rules, scoring, and printable cheat sheets for 15 classic card games. It's a plain, fast static site meant to be pulled up on a phone mid-game without any fuss.",
    tags: ["Static Site", "JavaScript", "SEO"],
    href: "https://deckandtable.com/",
    linkLabel: "Visit deckandtable.com",
  },
  {
    name: "This Website",
    description:
      "The site you're looking at. A small, editorial-style home for my work, built with Astro and Tailwind CSS and hosted on GitHub Pages.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/melissaflee02/melissaflee02.github.io",
  },
];
