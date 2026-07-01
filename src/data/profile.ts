import avatar from "@/assets/profile.png";
import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Arthur Albefaro",
  firstName: "Arthur",
  role: "Desenvolvedor Backend & Full Stack",
  headline:
    "Desenvolvedor backend — construo sistemas onde a correção é imposta no banco de dados e provada com testes, em TypeScript, C# e Java",
  summary:
    "Desenvolvedor backend na Overload. Construo e mantenho APIs, integro plataformas externas via API e estruturo dados em PostgreSQL para análise. Stack principal: TypeScript (NestJS) e Python.",
  about: [
    "Trabalho na Overload desenvolvendo serviços de backend em TypeScript (NestJS) e Python. No dia a dia, construo APIs REST, integro plataformas como GoHighLevel e Notion via API e normalizo dados não padronizados para que possam ser consultados e analisados.",
    "Curso Bacharelado em Ciência da Computação na Universidade de Vila Velha (2026–2029). Em paralelo, aprofundo design de APIs, banco de dados e arquitetura em nuvem, com certificações voltadas a AWS, .NET e Java.",
    "No dia a dia, resolvo problemas de integração entre sistemas, mantendo o código organizado e os dados consistentes. Estou estudando mais a fundo arquitetura de APIs, banco de dados e cloud.",
  ],
  highlights: [
    "APIs REST em TypeScript (NestJS) com autenticação e camadas controller/service/repository",
    "Integrações entre plataformas via API (ex.: GoHighLevel ↔ Notion)",
    "Modelagem e normalização de dados em PostgreSQL",
    "Automações e serviços em Python",
    "Git, code review e deploy contínuo",
  ],
  email: "arthuralbefaroec@gmail.com",
  phone: "+55 33 98845-9474",
  location: "Vila Velha — ES, Brasil",
  availability: "Backend · Full Stack · Cloud",
  resumeUrl: "/arthur-albefaro-cv.pdf",
  avatar,
  company: {
    name: "Overload",
    url: "https://overloadmkt.com.br",
  },
};
