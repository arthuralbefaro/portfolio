import { GITHUB_USERNAME } from "@/data/socials";
import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "journal",
    title: "Journal",
    tagline:
      "Motor de razão contábil de partida dobrada em Java/Spring Boot, com prevenção de saldo negativo sob concorrência e invariantes financeiras impostas no PostgreSQL",
    status: "Projeto pessoal",
    featured: true,
    context:
      "Projeto público que implementa o motor de contabilidade por trás de uma carteira, banco ou sistema de pagamento: a peça que garante que dinheiro não aparece nem some por engano.",
    problem:
      "Garantir correção financeira sob concorrência. A parte difícil de um ledger não é somar valores — é o read-then-write da checagem de saldo quando dois saques da mesma conta correm ao mesmo tempo.",
    solution:
      "Invariante de partida dobrada (toda transação soma zero) imposta por constraint deferida no Postgres, lançamentos imutáveis via role de runtime restrito, saldo derivado da soma dos lançamentos, postagem idempotente por chave do cliente arbitrada por unique constraint, e correção por estorno em vez de edição.",
    architecture: [
      "Modelo de partida dobrada: toda transação é um conjunto de lançamentos que precisa somar zero, verificado por constraint deferida no Postgres.",
      "Lançamentos imutáveis: a aplicação roda com um role de runtime restrito que só insere e lê — não altera, apaga nem desabilita a trava de imutabilidade.",
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
          "Valores monetários usam BigDecimal/NUMERIC com arredondamento estrito — nunca float — para eliminar erro de precisão em somas e conciliação.",
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
    tagline:
      "Serviço de autorização multi-tenant (Policy Decision Point) em C#/.NET, com isolamento entre tenants por Row-Level Security e log de auditoria imutável no PostgreSQL",
    status: "Projeto pessoal",
    featured: true,
    context:
      "Projeto público que implementa um Policy Decision Point: um serviço que responde se um subject pode executar uma ação sobre um recurso, dentro de um tenant, com decisão determinística, explicável e registrada.",
    problem:
      "Tomar decisões de autorização determinísticas e explicáveis, garantir isolamento entre tenants que não vaze em nenhum caminho de acesso, e manter um registro de auditoria que sobreviva até à própria aplicação.",
    solution:
      "RBAC com decisão determinística e motivos tipados — todo allow e todo deny carrega o porquê —, isolamento entre tenants por Row-Level Security no Postgres provado com testes adversariais, log de auditoria append-only imutável até para o próprio role da aplicação, e revogação de acesso com efeito sobre decisões futuras.",
    architecture: [
      "Policy Decision Point: recebe subject, ação, recurso e tenant, e retorna allow/deny com o motivo tipado da decisão.",
      "RBAC determinístico: papéis e permissões avaliados sempre com o mesmo resultado para a mesma entrada.",
      "Isolamento multi-tenant por Row-Level Security no Postgres, aplicado no banco — não apenas filtrado na query da aplicação.",
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
          "Testes adversariais tentam cruzar tenant via SQL bruto e via filtro de aplicação ignorado de propósito — o RLS no Postgres barra os dois casos.",
      },
      {
        title: "Imutabilidade da auditoria por separação de privilégio",
        detail:
          "O log de auditoria é protegido contra alteração mesmo pelo role de banco usado pela própria aplicação, não só pelo caminho normal da API.",
      },
      {
        title: "Hash chain criptográfica: parada consciente",
        detail:
          "Decidi não implementar encadeamento criptográfico do log de auditoria nesta versão — documentado como trade-off explícito, não como lacuna esquecida.",
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
    tagline:
      "Gateway de entrega de webhooks em TypeScript/NestJS, com ingestão idempotente, fila baseada em Postgres e proteção contra SSRF na entrega",
    status: "Projeto pessoal",
    featured: true,
    context:
      "Projeto público que recebe eventos e os entrega a assinantes via webhook — a peça de infraestrutura que parece simples até aparecerem as perguntas difíceis: e se o processo cair no meio? E se o destino apontar para a própria rede interna?",
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
          "Duas requisições com a mesma chave de idempotência mas payloads diferentes são tratadas como conflito, não como a mesma entrega — validado por teste de integração.",
      },
      {
        title: "Fila sem infraestrutura externa",
        detail:
          "SELECT FOR UPDATE SKIP LOCKED no Postgres permite múltiplos workers processarem a fila de entregas concorrentemente sem um broker dedicado.",
      },
      {
        title: "At-least-once assumido, não exactly-once fingido",
        detail:
          "Retry, backoff e dead-letter queue ficaram fora do escopo desta versão — decisão documentada, não lacuna silenciosa.",
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
  {
    slug: "crm-notion",
    title: "Integração CRM → Notion",
    tagline:
      "Rotina de integração que sincroniza dados do GoHighLevel (CRM) com o Notion, normalizando informações não padronizadas e evitando duplicidade",
    status: "Projeto interno",
    period: "Overload · 2026",
    featured: true,
    context:
      "Na Overload, o GoHighLevel concentra leads e contatos, enquanto os times de operação trabalham no Notion. Os dados nasciam no CRM e eram levados ao Notion manualmente — processo lento, sujeito a erro e sempre defasado.",
    problem:
      "Não havia integração entre as duas plataformas e os dados do CRM chegam de forma não padronizada (campos customizados, formatos inconsistentes e ausentes), o que impede o consumo direto e exige uma etapa de normalização.",
    solution:
      "Desenvolvi uma rotina de integração que consome a API do GoHighLevel, normaliza os registros e os escreve no Notion via API — evitando duplicar dados já sincronizados e tratando falhas registro a registro para não interromper a integração.",
    architecture: [
      "Extração: leitura dos registros através da API do GoHighLevel.",
      "Normalização: padronização dos campos não estruturados do CRM (datas, telefones e campos customizados ausentes ou inconsistentes) para um formato consistente.",
      "Sincronização: escrita no Notion via API com controle de duplicidade — verifica se o registro já existe antes de criar ou atualizar.",
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
          "Como a rotina roda repetidamente, não podia recriar no Notion registros já sincronizados — a escrita verifica a existência antes de criar ou atualizar.",
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
];
