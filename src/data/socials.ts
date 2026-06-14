import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/types";

export const GITHUB_USERNAME = "arthuralbefaro";

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}`,
    handle: `@${GITHUB_USERNAME}`,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arthuralbefaro/",
    handle: "arthuralbefaro",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:arthuralbefaroec@gmail.com",
    handle: "arthuralbefaroec@gmail.com",
    icon: Mail,
  },
];
