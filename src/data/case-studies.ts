import { GITHUB_USERNAME } from "@/lib/site";
import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "sistema-interno-gestao",
    title: "Sistema interno de gestão",
    chip: "fullstack · produção",
    tagline:
      "Sistema interno fullstack usado por uma agência de marketing para gerir a carteira de clientes, o comercial e a operação, com uma camada de IA que apoia decisões.",
    status: "Projeto profissional",
    period: "2025",
    featured: true,
    // TODO(arthur): fortalecer a prova com dados reais quando disponíveis —
    // nº de usuários internos, nº de integrações ativas, screenshot anonimizado.
    evidence: "Em produção · uso diário pela equipe da agência",
    context:
      "A operação ficava espalhada entre planilhas, o CRM e conversas soltas. Não havia um lugar único onde a equipe visse a saúde da carteira, o andamento do comercial e as demandas de cada squad. As informações nasciam em ferramentas diferentes e eram cruzadas na mão.",
    problem:
      "Centralizar gestão de clientes, comercial e operação num sistema só, com dados vindos de várias fontes externas, controle de acesso por função e por squad, e apoio de IA para transformar dados dispersos em ação, tudo com informação sincronizada e consistente.",
    solution:
      "Sistema fullstack com backend em TypeScript (NestJS) e Python e frontend em React, sobre PostgreSQL. Reúne painel executivo, gestão de demandas por squad, CRM com qualificação de lead para SDRs, cálculo de saúde da carteira e do cliente, e chat interno da equipe. Integra fontes externas via API e usa uma camada de IA que absorve o histórico de cada cliente para sugerir ações e sinalizar risco.",
    architecture: [
      "Backend em NestJS e Python expondo APIs consumidas por um frontend em React, com controle de acesso por função e por squad.",
      "PostgreSQL como base central, com dados sincronizados de plataformas externas (CRM, plataformas de anúncio) via API.",
      "Integração com WhatsApp via API para leitura de contexto de conversas.",
      "Camada de IA integrando múltiplos provedores de LLM (Anthropic Claude e OpenAI), que consome o histórico de cada cliente para calcular saúde, sugerir ações e apoiar a qualificação de leads.",
      "Módulos separados por área (gestão, operação, inteligência) com navegação e busca unificadas.",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "Python",
      "C# & .NET",
      "React",
      "PostgreSQL",
      "NoSQL",
      "Amazon Web Services",
      "integrações via API (CRM, Meta Ads, Google Ads, WhatsApp)",
      "Anthropic Claude",
      "OpenAI",
    ],
    challenges: [
      {
        title: "Muitas fontes, um lugar só",
        detail:
          "Dados vinham de CRM, plataformas de anúncio e conversas, cada um num formato. O sistema sincroniza e normaliza tudo para um modelo consistente no Postgres.",
      },
      {
        title: "Acesso por função e por squad",
        detail:
          "Cada pessoa vê o que é do seu escopo. O controle de permissão separa o que gestor, SDR e administrador enxergam, sem misturar dados entre squads.",
      },
      {
        title: "IA aplicada a decisão, não a texto",
        detail:
          "Em vez de um chat genérico, a IA lê o caso real de cada cliente e devolve algo acionável: um score de saúde, uma sugestão de ação, um alerta de risco. Usa mais de um provedor de LLM em vez de ficar preso a um só.",
      },
      {
        title: "Sistema em uso",
        detail:
          "Não é protótipo. A equipe usa no dia a dia, então estabilidade e consistência dos dados são requisito, não detalhe.",
      },
    ],
    demonstrates:
      "Sistema fullstack real, em produção, integrando várias fontes externas, com controle de acesso, IA aplicada a decisão e uma equipe usando no dia a dia.",
  },
  {
    slug: "crm-notion",
    title: "Integração CRM → Notion",
    chip: "integração · produção",
    tagline:
      "Rotina de integração que sincroniza dados do GoHighLevel (CRM) com o Notion, normalizando informações não padronizadas e evitando duplicidade",
    status: "Projeto interno",
    period: "Overload · 2025",
    featured: true,
    context:
      "Na Overload, o GoHighLevel concentra leads e contatos, enquanto os times de operação trabalham no Notion. Os dados nasciam no CRM e eram levados ao Notion manualmente, em um processo lento, sujeito a erro e sempre defasado.",
    problem:
      "Não havia integração entre as duas plataformas e os dados do CRM chegam de forma não padronizada (campos customizados, formatos inconsistentes e ausentes), o que impede o consumo direto e exige uma etapa de normalização.",
    solution:
      "Desenvolvi uma rotina de integração que consome a API do GoHighLevel, normaliza os registros e os escreve no Notion via API, evitando duplicar dados já sincronizados e tratando falhas registro a registro para não interromper a integração.",
    architecture: [
      "Extração: leitura dos registros através da API do GoHighLevel.",
      "Normalização: padronização dos campos não estruturados do CRM (datas, telefones e campos customizados ausentes ou inconsistentes) para um formato consistente.",
      "Sincronização: escrita no Notion via API com controle de duplicidade, verificando se o registro já existe antes de criar ou atualizar.",
      "Resiliência: respeito aos limites de requisição das APIs, com retentativas, e isolamento de erros por registro.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "REST APIs",
      "Notion API",
      "GoHighLevel API",
    ],
    challenges: [
      {
        title: "Controle de duplicidade",
        detail:
          "Como a rotina roda repetidamente, não podia recriar no Notion registros já sincronizados. A escrita verifica a existência antes de criar ou atualizar.",
      },
      {
        title: "Limites de requisição das APIs",
        detail:
          "GoHighLevel e Notion impõem limites de chamadas. A integração controla o ritmo das requisições e refaz tentativas quando necessário.",
      },
      {
        title: "Dados não padronizados",
        detail:
          "Campos customizados ausentes ou com formatos inconsistentes dificultavam o consumo. Adicionei uma etapa de normalização tolerante a esses casos.",
      },
      {
        title: "Falhas parciais",
        detail:
          "Um registro inválido não podia derrubar o lote inteiro. O processamento isola o erro por registro e segue com os demais.",
      },
    ],
    result: [
      "Eliminou a cópia manual de dados entre CRM e Notion.",
      "Base mais consistente no Notion para alimentar automações e dashboards internos.",
      "Lógica de normalização e sincronização reaproveitável para novas integrações.",
    ],
    demonstrates:
      "Integração entre sistemas externos via API, consistência de dados, lógica de backend e automação aplicada a uma operação real",
  },
  {
    slug: "journal",
    title: "Journal",
    chip: "ledger",
    tagline:
      "Motor de razão contábil de partida dobrada em Java/Spring Boot, com prevenção de saldo negativo sob concorrência e invariantes financeiras impostas no PostgreSQL",
    status: "Projeto pessoal",
    featured: true,
    proof: {
      command: "./gradlew test",
      result: "52 tests, 0 failures · overdraft sob concorrência provado",
    },
    context:
      "Projeto público que implementa o motor de contabilidade por trás de uma carteira, banco ou sistema de pagamento: a peça que garante que dinheiro não aparece nem some por engano.",
    problem:
      "Garantir correção financeira sob concorrência. A parte difícil de um ledger não é somar valores. É o read-then-write da checagem de saldo quando dois saques da mesma conta correm ao mesmo tempo.",
    solution:
      "Invariante de partida dobrada (toda transação soma zero) imposta por constraint deferida no Postgres, lançamentos imutáveis via role de runtime restrito, saldo derivado da soma dos lançamentos, postagem idempotente por chave do cliente arbitrada por unique constraint, e correção por estorno em vez de edição.",
    architecture: [
      "Modelo de partida dobrada: toda transação é um conjunto de lançamentos que precisa somar zero, verificado por constraint deferida no Postgres.",
      "Lançamentos imutáveis: a aplicação roda com um role de runtime restrito que só insere e lê, sem alterar, apagar ou desabilitar a trava de imutabilidade.",
      "Saldo derivado: calculado pela soma dos lançamentos da conta, sem coluna de saldo mutável para divergir da fonte de verdade.",
      "Idempotência: postagem de transação identificada por chave de idempotência do cliente, arbitrada por unique constraint no banco.",
      "Concorrência: prevenção de saldo negativo com lock pessimista (SELECT ... FOR UPDATE) na conta durante o débito.",
      "Correção por estorno: erros são revertidos com uma transação reversora, nunca por edição do lançamento original.",
    ],
    technologies: [
      "Java 25",
      "Spring Boot 4",
      "PostgreSQL",
      "JPA/Hibernate",
      "Flyway",
      "JUnit 5",
      "Testcontainers",
      "Gradle",
    ],
    challenges: [
      {
        title: "Corrida no saldo sob concorrência",
        detail:
          "Dois saques da mesma conta competindo no read-then-write do saldo podiam levá-lo a negativo. Reproduzi a corrida sem lock e depois eliminei com lock pessimista, com um teste de concorrência determinístico.",
      },
      {
        title: "Privilégio de lock sem abrir brecha",
        detail:
          "Conceder ao role de runtime o privilégio de lock de linha sem reabrir a proteção contra alteração ou exclusão de lançamentos que a imutabilidade exige.",
      },
      {
        title: "Dinheiro sem ponto flutuante",
        detail:
          "Valores monetários usam BigDecimal/NUMERIC com arredondamento estrito, nunca float, para eliminar erro de precisão em somas e conciliação.",
      },
    ],
    result: [
      "Invariante de partida dobrada e imutabilidade de lançamentos impostas no banco, não apenas na aplicação.",
      "Corrida de saldo negativo sob concorrência reproduzida e depois eliminada, com teste de concorrência determinístico.",
      "Suíte de testes adversariais sobre PostgreSQL real via Testcontainers, cobrindo idempotência, estorno e lock pessimista.",
    ],
    demonstrates:
      "Correção financeira sob concorrência, com garantias de integridade impostas no banco de dados e provadas por testes adversariais",
    links: {
      github: `https://github.com/${GITHUB_USERNAME}/journal-ledger`,
    },
  },
  {
    slug: "verdict",
    title: "Verdict",
    chip: "authz",
    tagline:
      "Serviço de autorização multi-tenant (Policy Decision Point) em C#/.NET, com isolamento entre tenants por Row-Level Security e log de auditoria imutável no PostgreSQL",
    status: "Projeto pessoal",
    featured: true,
    proof: {
      command: "dotnet test",
      result: "50 passed · isolamento entre tenants provado",
    },
    context:
      "Projeto público que implementa um Policy Decision Point: um serviço que responde se um subject pode executar uma ação sobre um recurso, dentro de um tenant, com decisão determinística, explicável e registrada.",
    problem:
      "Tomar decisões de autorização determinísticas e explicáveis, garantir isolamento entre tenants que não vaze em nenhum caminho de acesso, e manter um registro de auditoria que sobreviva até à própria aplicação.",
    solution:
      "RBAC com decisão determinística e motivos tipados, em que todo allow e todo deny carrega o porquê; isolamento entre tenants por Row-Level Security no Postgres provado com testes adversariais; log de auditoria append-only imutável até para o próprio role da aplicação; e revogação de acesso com efeito sobre decisões futuras.",
    architecture: [
      "Policy Decision Point: recebe subject, ação, recurso e tenant, e retorna allow/deny com o motivo tipado da decisão.",
      "RBAC determinístico: papéis e permissões avaliados sempre com o mesmo resultado para a mesma entrada.",
      "Isolamento multi-tenant por Row-Level Security no Postgres, aplicado no banco, não apenas filtrado na query da aplicação.",
      "Auditoria append-only: toda decisão é registrada em log imutável, protegido por separação de privilégio mesmo contra o role da aplicação.",
      "Revogação: acesso revogado passa a refletir imediatamente nas decisões seguintes.",
    ],
    technologies: [
      "C#/.NET 10",
      "ASP.NET Core",
      "PostgreSQL",
      "EF Core",
      "xUnit",
      "Testcontainers",
    ],
    challenges: [
      {
        title: "Isolamento provado no limite, não no caminho feliz",
        detail:
          "Testes adversariais tentam cruzar tenant via SQL bruto e via filtro de aplicação ignorado de propósito. O RLS no Postgres barra os dois casos.",
      },
      {
        title: "Imutabilidade da auditoria por separação de privilégio",
        detail:
          "O log de auditoria é protegido contra alteração mesmo pelo role de banco usado pela própria aplicação, não só pelo caminho normal da API.",
      },
      {
        title: "Hash chain criptográfica: parada consciente",
        detail:
          "Decidi não implementar encadeamento criptográfico do log de auditoria nesta versão, documentado como trade-off explícito, não como lacuna esquecida.",
      },
    ],
    result: [
      "Isolamento entre tenants garantido no banco (RLS), provado por testes que tentam contorná-lo diretamente em SQL.",
      "Toda decisão de autorização (allow/deny) registrada com motivo tipado em log de auditoria imutável.",
      "Revogação de acesso com efeito imediato nas decisões futuras, coberta por teste de integração.",
    ],
    demonstrates:
      "Autorização multi-tenant com isolamento e auditoria impostos no banco de dados e provados por testes adversariais",
    links: {
      github: `https://github.com/${GITHUB_USERNAME}/verdict-authz`,
    },
  },
  {
    slug: "courier",
    title: "Courier",
    chip: "webhooks",
    tagline:
      "Gateway de entrega de webhooks em TypeScript/NestJS, com ingestão idempotente, fila baseada em Postgres e proteção contra SSRF na entrega",
    status: "Projeto pessoal",
    featured: true,
    proof: {
      command: "npm test",
      result: "188 passed · idempotência e SSRF provados",
    },
    context:
      "Projeto público que recebe eventos e os entrega a assinantes via webhook. É a peça de infraestrutura que parece simples até aparecerem as perguntas difíceis: e se o processo cair no meio? E se o destino apontar para a própria rede interna?",
    problem:
      "O processo pode cair entre aceitar o evento e enfileirar a entrega, dois produtores podem mandar a mesma chave de idempotência com corpos diferentes, e a URL de destino pode resolver para um endereço interno (SSRF).",
    solution:
      "Ingestão idempotente por hash canônico do payload, evento e entregas gravados na mesma transação para nada se perder em silêncio, Postgres como fila com SELECT FOR UPDATE SKIP LOCKED para workers concorrentes sem coordenação externa, assinatura HMAC sobre os bytes exatos do payload, e proteção contra SSRF com validação e pinning do IP resolvido, sem seguir redirecionamentos.",
    architecture: [
      "Ingestão: evento recebido é identificado por um hash canônico do payload, tornando reenvios idempotentes.",
      "Persistência atômica: evento e as entregas geradas a partir dele são gravados na mesma transação.",
      "Fila em Postgres: workers concorrentes disputam entregas pendentes com SELECT FOR UPDATE SKIP LOCKED, sem fila externa.",
      "Assinatura: cada entrega é assinada com HMAC sobre os bytes exatos enviados, para o assinante validar a origem.",
      "Proteção contra SSRF: o IP resolvido do destino é validado e fixado antes do envio, sem seguir redirecionamentos.",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Vitest",
      "Testcontainers",
    ],
    challenges: [
      {
        title: "Idempotência com corpos divergentes",
        detail:
          "Duas requisições com a mesma chave de idempotência mas payloads diferentes são tratadas como conflito, não como a mesma entrega, validado por teste de integração.",
      },
      {
        title: "Fila sem infraestrutura externa",
        detail:
          "SELECT FOR UPDATE SKIP LOCKED no Postgres permite múltiplos workers processarem a fila de entregas concorrentemente sem um broker dedicado.",
      },
      {
        title: "At-least-once assumido, não exactly-once fingido",
        detail:
          "Retry, backoff e dead-letter queue ficaram fora do escopo desta versão: decisão documentada, não lacuna silenciosa.",
      },
    ],
    result: [
      "Ingestão idempotente e persistência atômica de evento e entregas, provadas por teste de integração contra Postgres real.",
      "Fila de entrega concorrente sem coordenação externa, usando lock do próprio Postgres.",
      "Proteção contra SSRF (URL resolvendo para rede interna) coberta por teste que tenta o ataque e falha.",
    ],
    demonstrates:
      "Entrega assíncrona confiável, com idempotência e concorrência seguras e segurança de saída (SSRF), provadas por testes de integração contra Postgres real",
    links: {
      github: `https://github.com/${GITHUB_USERNAME}/courier`,
    },
  },
];
