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
    name: "Deck & Table",
    description:
      "Clear, printable rules for 15 classic card games — setup, scoring, house rules, and cheat sheets. A dependency-free static site built for fast, distraction-free reading at the table.",
    tags: ["Static Site", "JavaScript", "SEO"],
    href: "https://deckandtable.com/",
    linkLabel: "Visit deckandtable.com",
  },
  {
    name: "Oovoo",
    description:
      "A social ridesharing platform for Stanford communities. Users join communities, post trips, and register as drivers or riders — replacing messy spreadsheets with a simple, intuitive mobile app. 2024 Stanford Senior Capstone Project.",
    tags: ["React Native", "Expo", "Capstone"],
    href: "https://github.com/melissaflee02/oovoo",
  },
  {
    name: "Spotify Web Assistant",
    description:
      "A Django app that, given a Spotify artist URI, displays the artist's albums and 30-second track samples, with a feature to download liked songs.",
    tags: ["Django", "Python", "Spotify API"],
    href: "https://github.com/melissaflee02/spotify-web-assistant",
  },
  {
    name: "This Website",
    description:
      "My personal site, built with Astro and Tailwind CSS — a minimal, editorial home for my work and interests.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    href: "https://github.com/melissaflee02/melissaflee02.github.io",
  },
];
