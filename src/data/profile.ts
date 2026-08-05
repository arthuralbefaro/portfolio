import avatar from "@/assets/profile.webp";
import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Arthur Albefaro",
  firstName: "Arthur",
  role: "Desenvolvedor Full-Stack · Back-end, Automações & Integração de Sistemas",
  headline:
    "Construo backends onde as regras que não podem quebrar são impostas no banco de dados — e provadas com testes.",
  summary:
    "Desenvolvedor backend e full stack, atuando com TypeScript, C#, Java e React.",
  about: [
    "Trabalho a parte do backend que costuma dar errado: manter os dados corretos. Construo APIs onde as regras que não podem quebrar (a soma dos valores bater, um cliente nunca ver dados de outro, um registro não poder ser alterado depois de gravado) são impostas no banco de dados, não só na aplicação, e testo isso contra um PostgreSQL real tentando furar as regras. Também construo a interface que consome essas APIs.",
    "Isso fica evidente nos meus projetos: o Journal, um razão contábil de partidas dobradas em Java e Spring Boot que impede saldo negativo mesmo com saques simultâneos; o Verdict, um serviço de autorização multi-tenant em C# e .NET com isolamento por Row Level Security e auditoria imutável; e o Courier, um gateway de entrega de webhooks em TypeScript e NestJS com idempotência e fila em Postgres.",
    "Na Overload, construí o sistema interno da agência e automatizei rotinas de CRM, onboarding e operação, eliminando aproximadamente 20 horas de trabalho manual por semana, e mantenho os serviços de back-end em TypeScript e Python. Na Arcabee, atuo no full stack de uma plataforma de conteúdo para Revit com mais de 113.000 materiais e famílias, com front-end em Angular, API em ASP.NET e infraestrutura em produção na AWS. Curso Bacharelado em Ciência da Computação na Universidade de Vila Velha.",
  ],
  highlights: [
    "Regras de negócio impostas no banco: constraints, triggers e Row Level Security no PostgreSQL",
    "Concorrência: impedir condições de corrida com locks e transações",
    "Backend em TypeScript (Node.js/NestJS), C# (.NET/ASP.NET), Java (Spring Boot) e PHP (Laravel)",
    "Testes de integração contra banco real com Testcontainers",
    "Frontend em React e Next.js consumindo as APIs",
    "Modelagem de dados e integrações entre plataformas via API",
    "Automação de rotinas operacionais e de CRM, com IA via APIs da OpenAI, Anthropic e Gemini",
    "Full stack em Angular e ASP.NET, com infraestrutura em AWS, Docker e CI/CD",
  ],
  email: "arthuralbefarodev@gmail.com",
  phone: "+55 27 99952-1684",
  location: "Vila Velha, ES, Brasil",
  availability: "Backend · Full Stack · Cloud",
  resumeUrl: "/arthur-albefaro-cv.pdf",
  avatar,
  company: {
    name: "Overload",
    url: "https://overloadmkt.com.br",
  },
};
