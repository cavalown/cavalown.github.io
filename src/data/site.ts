export const site = {
  name: "Cavalown",
  title: "Cavalown",
  description:
    "Projects, studio notes, writings, and things I make along the way.",
  url: "https://cavalown.com",
};

export const navItems = [
  { href: "/about/", key: "about" },
  { href: "/resume/", key: "resume" },
  { href: "/projects/", key: "projects" },
  { href: "/studio/", key: "studio" },
  { href: "/writing/", key: "writing" },
] as const;

export const socialLinks = [
  { href: "https://github.com/cavalown", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/yilinghuang-cavalown/",
    label: "LinkedIn",
  },
];
