import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import type { SocialLink } from "@/types";

export const GITHUB_USERNAME = "arthuralbefaro";

export const socials: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5527999521684",
    handle: "+55 27 99952-1684",
    icon: WhatsappIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arthuralbefaro/",
    handle: "arthuralbefaro",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: `https://github.com/${GITHUB_USERNAME}`,
    handle: `@${GITHUB_USERNAME}`,
    icon: Github,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/devarthuralbefaro",
    handle: "@devarthuralbefaro",
    icon: Instagram,
  },
  {
    label: "Email",
    href: "mailto:arthuralbefarodev@gmail.com",
    handle: "arthuralbefarodev@gmail.com",
    icon: Mail,
  },
];
