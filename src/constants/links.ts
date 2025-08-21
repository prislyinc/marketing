import { BookOpenText, Bot, Building2 } from "lucide-react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const NAV_LINKS = [
  {
    name: "Aplicação",
    link: "/application",
  },
  {
    name: "Sobre nós",
    link: "/changelog",
  },
  {
    name: "Changelog",
    link: "/about",
  },
  {
    name: "Guia",
    link: "https://prisly-guide.vercel.app",
  },
];

export const FOOTER_LINKS = [
  {
    title: "PRODUTO",
    links: [
      { name: "Aplicação", href: "/application" },
      { name: "Status", href: "/status" },
      { name: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "RECURSOS",
    links: [
      { name: "Changelog", href: "/changelog" },
      { name: "Guia de início", href: "https://prisly-guide.vercel.app" },
      { name: "Guia completo", href: "https://prisly-guide.vercel.app" },
    ],
  },
  {
    title: "PRISLY",
    links: [
      { name: "Sobre", href: "/about" },
      { name: "Termos de Serviço", href: "/legal/terms" },
      { name: "Política de Privacidade", href: "/legal/privacy" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { name: "Discord", href: "https://discord.gg/", icon: FaDiscord },
  { name: "Twitter/X", href: "https://x.com/useprisly", icon: BsTwitterX },
  { name: "GitHub", href: "https://github.com/prislyinc", icon: FaGithub },
];

export const RESOURCES = [
  {
    label: "Guia",
    icon: BookOpenText,
    href: "https://prisly-guide.vercel.app",
    external: true,
    reverse: false,
  },
  { label: "Aplicação", icon: Bot, href: "/application", reverse: true },
  { label: "Sobre nós", icon: Building2, href: "/about", reverse: false },
];