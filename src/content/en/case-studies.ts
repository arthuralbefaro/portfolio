import { caseStudies as ptCaseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types";

const pt = new Map(ptCaseStudies.map((study) => [study.slug, study]));

function base(slug: string): CaseStudy {
  const study = pt.get(slug);
  if (!study) {
    throw new Error(`Missing base case study: ${slug}`);
  }
  return study;
}

const internalManagementSystem: CaseStudy = {
  ...base("sistema-interno-gestao"),
  title: "Internal management system",
  chip: "full-stack · production",
  statusLabel: "Professional project",
  tagline:
    "A full-stack internal system used by a marketing agency to manage its client portfolio, sales, and operations, with an AI layer that supports decisions.",
  evidence: "In production · used daily by the agency team",
  context:
    "The operation was scattered across spreadsheets, the CRM, and scattered chats. There was no single place where the team could see portfolio health, sales progress, and each squad's workload. Information originated in different tools and was cross-referenced by hand.",
  problem:
    "Centralize client, sales, and operations management into a single system, with data coming from several external sources, access control by role and by squad, and AI support to turn scattered data into action, all with synchronized and consistent information.",
  solution:
    "A full-stack system with a TypeScript (NestJS) and Python backend and a React frontend, over PostgreSQL. It brings together an executive dashboard, squad-based task management, a CRM with lead qualification for SDRs, portfolio and client health scoring, and an internal team chat. It integrates external sources via API and uses an AI layer that ingests each client's history to suggest actions and flag risk.",
  architecture: [
    "A NestJS and Python backend exposing APIs consumed by a React frontend, with access control by role and by squad.",
    "PostgreSQL as the central store, with data synchronized from external platforms (CRM, ad platforms) via API.",
    "WhatsApp integration via API to read conversation context.",
    "An AI layer integrating multiple LLM providers (Anthropic Claude and OpenAI) that ingests each client's history to compute client health, suggest actions, and support lead qualification.",
    "Modules separated by area (management, operations, intelligence) with unified navigation and search.",
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
    "API integrations (CRM, Meta Ads, Google Ads, WhatsApp)",
    "Anthropic Claude",
    "OpenAI",
  ],
  challenges: [
    {
      title: "Many sources, one place",
      detail:
        "Data came from the CRM, ad platforms, and conversations, each in its own format. The system synchronizes and normalizes everything into a consistent model in Postgres.",
    },
    {
      title: "Access by role and by squad",
      detail:
        "Each person sees only what belongs to their scope. Permission control separates what a manager, an SDR, and an admin can see, without mixing data across squads.",
    },
    {
      title: "AI applied to decisions, not text",
      detail:
        "Instead of a generic chat, the AI reads each client's real case and returns something actionable: a health score, a suggested action, a risk alert. It uses more than one LLM provider rather than being locked to a single one.",
    },
    {
      title: "A system in use",
      detail:
        "Not a prototype. The team uses it daily, so stability and data consistency are requirements, not details.",
    },
  ],
  demonstrates:
    "A real, in-production full-stack system integrating several external sources, with access control, AI applied to decisions, and a team using it daily.",
};

const journal: CaseStudy = {
  ...base("journal"),
  statusLabel: "Personal project",
  tagline:
    "Double-entry ledger engine in Java/Spring Boot, with negative-balance prevention under concurrency and financial invariants enforced in PostgreSQL",
  proof: {
    command: "./gradlew test",
    result: "52 tests, 0 failures · overdraft under concurrency proven",
  },
  context:
    "A public project implementing the accounting engine behind a wallet, bank, or payment system: the piece that guarantees money does not appear or disappear by mistake.",
  problem:
    "Guaranteeing financial correctness under concurrency. The hard part of a ledger is not summing values, it is the read-then-write of the balance check when two withdrawals from the same account run at the same time.",
  solution:
    "A double-entry invariant (every transaction sums to zero) enforced by a deferred constraint in Postgres, immutable entries via a restricted runtime role, a balance derived from the sum of entries, idempotent posting keyed by a client-supplied idempotency key and arbitrated by a unique constraint, and correction by reversal instead of editing.",
  architecture: [
    "Double-entry model: every transaction is a set of entries that must sum to zero, verified by a deferred constraint in Postgres.",
    "Immutable entries: the application runs under a restricted runtime role that can only insert and read, it cannot update, delete, or disable the immutability guard.",
    "Derived balance: computed from the sum of the account's entries, with no mutable balance column to drift from the source of truth.",
    "Idempotency: transaction posting identified by a client idempotency key, arbitrated by a unique constraint in the database.",
    "Concurrency: negative-balance prevention with a pessimistic lock (SELECT ... FOR UPDATE) on the account during the debit.",
    "Correction by reversal: errors are undone with a reversing transaction, never by editing the original entry.",
  ],
  challenges: [
    {
      title: "Balance race under concurrency",
      detail:
        "Two withdrawals from the same account competing in the balance read-then-write could drive it negative. I reproduced the race without a lock and then eliminated it with a pessimistic lock, backed by a deterministic concurrency test.",
    },
    {
      title: "Lock privilege without opening a hole",
      detail:
        "Granting the runtime role the row-lock privilege without reopening the protection against altering or deleting entries that immutability requires.",
    },
    {
      title: "Money without floating point",
      detail:
        "Monetary values use BigDecimal/NUMERIC with strict rounding, never float, to eliminate precision errors in sums and reconciliation.",
    },
  ],
  result: [
    "Double-entry invariant and entry immutability enforced in the database, not only in the application.",
    "Negative-balance race under concurrency reproduced and then eliminated, with a deterministic concurrency test.",
    "An adversarial test suite over a real PostgreSQL via Testcontainers, covering idempotency, reversal, and pessimistic locking.",
  ],
  demonstrates:
    "Financial correctness under concurrency, with integrity guarantees enforced in the database and proven by adversarial tests",
};

const verdict: CaseStudy = {
  ...base("verdict"),
  statusLabel: "Personal project",
  tagline:
    "Multi-tenant authorization service (Policy Decision Point) in C#/.NET, with tenant isolation via Row-Level Security and an immutable audit log in PostgreSQL",
  proof: {
    command: "dotnet test",
    result: "50 passed · tenant isolation proven",
  },
  context:
    "A public project implementing a Policy Decision Point: a service that answers whether a subject may perform an action on a resource, within a tenant, with a decision that is deterministic, explainable, and recorded.",
  problem:
    "Making authorization decisions that are deterministic and explainable, guaranteeing tenant isolation that does not leak on any access path, and keeping an audit record that survives even the application itself.",
  solution:
    "RBAC with a deterministic decision and typed reasons, every allow and every deny carries its why, tenant isolation via Row-Level Security in Postgres proven with adversarial tests, an append-only audit log immutable even to the application's own role, and access revocation that takes effect on future decisions.",
  architecture: [
    "Policy Decision Point: takes a subject, action, resource, and tenant, and returns allow/deny with the typed reason for the decision.",
    "Deterministic RBAC: roles and permissions evaluated with the same result for the same input every time.",
    "Multi-tenant isolation via Row-Level Security in Postgres, enforced in the database, not just filtered in the application query.",
    "Append-only auditing: every decision is recorded in an immutable log, protected by privilege separation even against the application role.",
    "Revocation: revoked access is immediately reflected in subsequent decisions.",
  ],
  challenges: [
    {
      title: "Isolation proven at the boundary, not on the happy path",
      detail:
        "Adversarial tests try to cross tenants via raw SQL and via a deliberately bypassed application filter, RLS in Postgres blocks both cases.",
    },
    {
      title: "Audit immutability through privilege separation",
      detail:
        "The audit log is protected against tampering even by the database role the application itself uses, not only through the normal API path.",
    },
    {
      title: "Cryptographic hash chain: a deliberate stop",
      detail:
        "I chose not to implement cryptographic chaining of the audit log in this version, documented as an explicit trade-off, not a forgotten gap.",
    },
  ],
  result: [
    "Tenant isolation enforced in the database (RLS), proven by tests that try to bypass it directly in SQL.",
    "Every authorization decision (allow/deny) recorded with a typed reason in an immutable audit log.",
    "Access revocation with immediate effect on future decisions, covered by an integration test.",
  ],
  demonstrates:
    "Multi-tenant authorization with isolation and auditing enforced in the database and proven by adversarial tests",
};

const courier: CaseStudy = {
  ...base("courier"),
  statusLabel: "Personal project",
  tagline:
    "Webhook delivery gateway in TypeScript/NestJS, with idempotent ingestion, a Postgres-based queue, and SSRF protection on delivery",
  proof: {
    command: "npm test",
    result: "188 passed · idempotency and SSRF proven",
  },
  context:
    "A public project that receives events and delivers them to subscribers via webhook, the infrastructure piece that looks simple until the hard questions show up: what if the process crashes midway? What if the destination points to the internal network itself?",
  problem:
    "The process can crash between accepting the event and enqueuing the delivery, two producers can send the same idempotency key with different bodies, and the destination URL can resolve to an internal address (SSRF).",
  solution:
    "Idempotent ingestion via a canonical hash of the payload, event and deliveries written in the same transaction so nothing is lost silently, Postgres as a queue with SELECT FOR UPDATE SKIP LOCKED for concurrent workers without external coordination, an HMAC signature over the exact payload bytes, and SSRF protection with validation and pinning of the resolved IP, without following redirects.",
  architecture: [
    "Ingestion: a received event is identified by a canonical hash of the payload, making resends idempotent.",
    "Atomic persistence: the event and the deliveries generated from it are written in the same transaction.",
    "Postgres queue: concurrent workers compete for pending deliveries with SELECT FOR UPDATE SKIP LOCKED, with no external queue.",
    "Signing: each delivery is signed with HMAC over the exact bytes sent, so the subscriber can validate the origin.",
    "SSRF protection: the destination's resolved IP is validated and pinned before sending, without following redirects.",
  ],
  challenges: [
    {
      title: "Idempotency with divergent bodies",
      detail:
        "Two requests with the same idempotency key but different payloads are treated as a conflict, not as the same delivery, validated by an integration test.",
    },
    {
      title: "A queue without external infrastructure",
      detail:
        "SELECT FOR UPDATE SKIP LOCKED in Postgres lets multiple workers process the delivery queue concurrently without a dedicated broker.",
    },
    {
      title: "At-least-once assumed, not exactly-once faked",
      detail:
        "Retry, backoff, and a dead-letter queue were left out of scope in this version, a documented decision, not a silent gap.",
    },
  ],
  result: [
    "Idempotent ingestion and atomic persistence of event and deliveries, proven by an integration test against a real Postgres.",
    "A concurrent delivery queue without external coordination, using Postgres's own locking.",
    "SSRF protection (URL resolving to the internal network) covered by a test that attempts the attack and fails.",
  ],
  demonstrates:
    "Reliable asynchronous delivery, with safe idempotency and concurrency and outbound security (SSRF), proven by integration tests against a real Postgres",
};

const crmNotion: CaseStudy = {
  ...base("crm-notion"),
  title: "CRM → Notion integration",
  chip: "integration · production",
  statusLabel: "Internal project",
  tagline:
    "An integration routine that syncs GoHighLevel (CRM) data into Notion, normalizing non-standardized information and preventing duplication.",
  context:
    "At Overload, GoHighLevel holds leads and contacts, while the operations teams work in Notion. Data was born in the CRM and carried into Notion by hand, a slow process, error-prone and always out of date.",
  problem:
    "There was no integration between the two platforms, and CRM data arrives non-standardized (custom fields, inconsistent and missing formats), which prevents direct consumption and requires a normalization step.",
  solution:
    "I built an integration routine that consumes the GoHighLevel API, normalizes the records, and writes them into Notion via API, avoiding duplication of already-synced data and handling failures record by record so the integration is not interrupted.",
  architecture: [
    "Extraction: reading the records through the GoHighLevel API.",
    "Normalization: standardizing the CRM's unstructured fields (dates, phone numbers, and missing or inconsistent custom fields) into a consistent format.",
    "Synchronization: writing to Notion via API with duplication control, checking whether the record already exists before creating or updating it.",
    "Resilience: respecting the APIs' rate limits, with retries, and isolating errors per record.",
  ],
  challenges: [
    {
      title: "Duplication control",
      detail:
        "Since the routine runs repeatedly, it could not recreate already-synced records in Notion, the write checks for existence before creating or updating.",
    },
    {
      title: "API rate limits",
      detail:
        "GoHighLevel and Notion impose call limits. The integration paces its requests and retries when needed.",
    },
    {
      title: "Non-standardized data",
      detail:
        "Missing custom fields or inconsistent formats made consumption hard. I added a normalization step tolerant of those cases.",
    },
    {
      title: "Partial failures",
      detail:
        "One invalid record could not bring down the whole batch. Processing isolates the error per record and continues with the rest.",
    },
  ],
  result: [
    "Eliminated the manual copying of data between CRM and Notion.",
    "A more consistent base in Notion to feed internal automations and dashboards.",
    "Reusable normalization and synchronization logic for new integrations.",
  ],
  demonstrates:
    "Integration between external systems via API, data consistency, backend logic, and automation applied to a real operation",
};

const translations: Record<string, CaseStudy> = {
  [internalManagementSystem.slug]: internalManagementSystem,
  [journal.slug]: journal,
  [verdict.slug]: verdict,
  [courier.slug]: courier,
  [crmNotion.slug]: crmNotion,
};

export const caseStudies: CaseStudy[] = ptCaseStudies.map(
  (study) => translations[study.slug] ?? study,
);
