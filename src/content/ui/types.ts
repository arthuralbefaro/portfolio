export interface UiDictionary {
  skipToContent: string;
  header: {
    resume: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  hero: {
    mark: string;
    resume: string;
    available: string;
    workSuffix: string;
    photoAlt: string;
  };
  about: {
    mark: string;
    title: string;
    skills: string;
    languages: string;
    education: string;
  };
  techStack: {
    mark: string;
    title: string;
    description: string;
  };
  caseStudies: {
    mark: string;
    title: string;
    description: string;
    fields: {
      context: string;
      problem: string;
      solution: string;
      architecture: string;
      challenges: string;
      technologies: string;
      result: string;
      demonstrates: string;
    };
    links: {
      code: string;
      demo: string;
      post: string;
    };
    expand: string;
    collapse: string;
  };
  certifications: {
    mark: string;
    title: string;
    description: string;
    viewCredential: string;
  };
  experience: {
    mark: string;
    title: string;
    current: string;
  };
  education: {
    mark: string;
    title: string;
  };
  contact: {
    mark: string;
    title: string;
    description: string;
    resume: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      errors: {
        name: string;
        email: string;
        message: string;
      };
      fallback: {
        title: string;
        description: string;
      };
      sendVia: {
        whatsapp: string;
        email: string;
      };
    };
  };
  footer: {
    navLabel: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
      resume: string;
    };
    nav: {
      casos: string;
      certificacoes: string;
      experiencia: string;
      contato: string;
    };
    rights: string;
  };
  meta: {
    title: string;
    description: string;
    ogTagline: string;
    keywords: string[];
  };
}
