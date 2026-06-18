export interface ContactPageHeroContent {
  title: string;
  description: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export interface ContactInfoContent {
  title: string;
  followLabel: string;
  mapLabel: string;
}

export interface ContactFormContent {
  title: string;
  fullName: { label: string; placeholder: string };
  email: { label: string; placeholder: string };
  subject: { label: string; placeholder: string; options: string[] };
  message: { label: string; placeholder: string };
  submit: string;
}

export interface ContactPageContent {
  hero: ContactPageHeroContent;
  info: ContactInfoContent;
  form: ContactFormContent;
}
