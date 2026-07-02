import avatar from "@/assets/profile.png";
import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Arthur Albefaro",
  firstName: "Arthur",
  role: "Desenvolvedor Full Stack",
  headline:
    "Full Stack & Backend Developer",
  summary:
    "Desenvolvedor full stack, atuando com TypeScript, C#, Java e React.",
  about: [
    "Trabalho a parte do backend que costuma dar errado: manter os dados corretos. Construo APIs onde as regras que não podem quebrar (a soma dos valores bater, um cliente nunca ver dados de outro, um registro não poder ser alterado depois de gravado) são impostas no banco de dados, não só na aplicação, e testo isso contra um PostgreSQL real tentando furar as regras. Também construo a interface que consome essas APIs.",
    "Isso é notório nos meus projetos: o Journal, um razão contábil de partidas dobradas em Java e Spring Boot que impede saldo negativo mesmo com saques simultâneos; o Verdict, um serviço de autorização multi tenant em C# e .NET com isolamento por Row Level Security e auditoria imutável; e o Courier, um gateway de entrega de webhooks em TypeScript e NestJS com idempotência e fila em Postgres.",
    "Na Overload, desenvolvo serviços de backend em TypeScript e Python, integro plataformas externas via API e estruturo dados em PostgreSQL. Curso Bacharelado em Ciência da Computação na Universidade de Vila Velha, e trabalho C# e Java em projetos próprios e certificações.",
  ],
  highlights: [
    "Regras de negócio impostas no banco: constraints, triggers e Row Level Security no PostgreSQL",
    "Concorrência: impedir condições de corrida com locks e transações",
    "Backend em TypeScript (Node.js/NestJS), C# (.NET/ASP.NET), Java (Spring Boot) e PHP (Laravel)",
    "Testes de integração contra banco real com Testcontainers",
    "Frontend em React e Next.js consumindo as APIs",
    "Modelagem de dados e integrações entre plataformas via API",
  ],
  email: "arthuralbefarodev@gmail.com",
  phone: "+55 27 99952-1684",
  location: "Vila Velha, ES, Brasil",
  availability: "Full Stack · Backend · Cloud",
  resumeUrl: "/arthur-albefaro-cv.pdf",
  avatar,
  company: {
    name: "Overload",
    url: "https://overloadmkt.com.br",
  },
};
