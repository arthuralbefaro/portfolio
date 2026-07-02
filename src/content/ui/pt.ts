import type { UiDictionary } from "@/content/ui/types";

export const ptUi: UiDictionary = {
  skipToContent: "Pular para o conteúdo",
  header: {
    resume: "currículo →",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    languageLabel: "Idioma",
  },
  hero: {
    mark: "// backend engineer",
    resume: "baixar currículo",
    available: "disponível p/ backend",
    workSuffix: "backend & automação",
    photoAlt: "Foto de {name}",
  },
  about: {
    mark: "// sobre",
    title: "Sobre mim",
    skills: "Competências",
    languages: "Idiomas",
    education: "Formação",
  },
  techStack: {
    mark: "// stack",
    title: "Tecnologias",
    description:
      "Stack usada em projetos, estudos e desenvolvimento de aplicações",
  },
  caseStudies: {
    mark: "// casos",
    title: "Casos técnicos",
    description:
      "Estudos de caso dos projetos e do trabalho que melhor representam minha atuação em backend, do contexto ao resultado",
    fields: {
      context: "Contexto",
      problem: "Problema",
      solution: "Solução",
      architecture: "Arquitetura",
      challenges: "Desafios técnicos",
      technologies: "Tecnologias",
      result: "Resultado",
      demonstrates: "O que demonstra",
    },
    links: {
      code: "código",
      demo: "demo",
      post: "publicação",
    },
  },
  certifications: {
    mark: "// certificações",
    title: "Certificações",
    description:
      "Certificações e cursos voltados a backend, cloud e fundamentos de IA",
    viewCredential: "ver credencial",
  },
  experience: {
    mark: "// experiência",
    title: "Experiência profissional",
    current: "atual",
  },
  education: {
    mark: "// formação",
    title: "Formação acadêmica",
  },
  contact: {
    mark: "// contato",
    title: "Vamos conversar",
    description:
      "Entre em contato para falar sobre projetos, vagas ou tecnologia",
    resume: "baixar currículo",
    form: {
      name: "nome",
      email: "e-mail",
      message: "mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "nome@exemplo.com",
      messagePlaceholder: "Conte sobre o projeto, a vaga ou a ideia",
      submit: "enviar mensagem",
      sending: "enviando...",
      success: "Mensagem enviada. Retorno o mais breve possível.",
      error:
        "Não foi possível enviar. Tente de novo ou fale pelo WhatsApp ou e-mail.",
      errors: {
        name: "Informe seu nome",
        email: "Informe um e-mail válido",
        message: "Escreva uma mensagem com pelo menos 10 caracteres",
      },
    },
  },
  footer: {
    navLabel: "Rodapé",
    links: {
      github: "github",
      linkedin: "linkedin",
      email: "e-mail",
      resume: "currículo",
    },
    nav: {
      casos: "casos",
      certificacoes: "certificações",
      experiencia: "experiência",
      contato: "contato",
    },
    rights: "Todos os direitos reservados.",
  },
};
