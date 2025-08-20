import { FaDiscord, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const NAV_LINKS = [
    {
        name: "Preço",
        link: "/price",
    },
    {
        name: "Changelog",
        link: "/changelog",
    },
    {
        name: "Aplicação",
        link: "/application",
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
            { name: "Preço", href: "/price" },
            { name: "Status", href: "/status" },
            { name: "Aplicação", href: "/application" },
            { name: "Dashboard", href: "/dashboard" }
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
]

export const SOCIAL_LINKS = [
    { name: "Discord", href: "https://discord.gg/", icon: FaDiscord },
    { name: "Twitter/X", href: "https://x.com/useprisly", icon: BsTwitterX },
    { name: "GitHub", href: "https://github.com/prislyinc", icon: FaGithub },
]