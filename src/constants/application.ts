export type Application = {
  name: string;
  description: string;
  category: string;
};

export const APPLICATION_FUNCTIONALITY_CATEGORIES = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "Moderação",
    value: "moderation",
  },
  {
    label: "Comunidade",
    value: "community",
  },
  {
    label: "FiveM",
    value: "fivem",
  },
  {
    label: "Outros",
    value: "others",
  },
] as const;

export const APPLICATION_FEATURES: Application[] = [
  {
    name: "Autorole",
    description:
      "Aplica cargos automaticamente para novos membros quando eles entram no servidor.",
    category: "community",
  },
  {
    name: "Moderação",
    description:
      "Mantenha seu servidor seguro com moderação automática e ferramentas para moderadores.",
    category: "moderation",
  },
  {
    name: "Proteção de Servidor",
    description:
      "Protege seu servidor contra ataques e comportamentos indesejados.",
    category: "moderation",
  },
  {
    name: "Instagram",
    description:
      "Exibe posts e interações da comunidade do Instagram dentro do servidor.",
    category: "community",
  },
  {
    name: "Mensagens Personalizadas",
    description:
      "Configure mensagens automáticas e personalizadas para canais de texto.",
    category: "community",
  },
  {
    name: "Reações Automáticas",
    description:
      "Adicione reações automáticas a mensagens em canais específicos.",
    category: "community",
  },
  {
    name: "Logs de Eventos",
    description:
      "Registra ações e eventos do servidor para segurança e monitoramento.",
    category: "moderation",
  },
  {
    name: "Bem-vindo & Adeus",
    description:
      "Anuncie quem está entrando ou saindo do servidor da forma desejada.",
    category: "community",
  },
  {
    name: "FiveM",
    description:
      "Funcionalidades específicas para servidores de cidades FiveM.",
    category: "fivem",
  },
];

export const PLAN = {
  name: "Prisly+",
  price: 29.90,
  badge: "O MELHOR PRA VOCÊ!",
  description:
    "Imagine seu servidor, apenas 10x mais leve e fácil para seus membros interagir, socializar e jogar!",
  features: ["Todos os sistemas/comandos citados logo acima"],
  image: "https://i.pinimg.com/736x/a7/57/e4/a757e4c7385f9ca110252acf885240e0.jpg",
};

export const ADDITIONAL_SPECS = [
  {
    id: "biography",
    name: "Biografia Personalizada",
    description: "Com este adicional, você poderá definir a biografia do seu bot como desejar.",
    price: 10.0,
    category: "appearance"
  }
];