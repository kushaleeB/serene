import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/sections/contact/ContactForm";
import { ContactInfo } from "@/sections/contact/ContactInfo";

export function ContactSection() {
  return (
    <section className="bg-[#f9f9f7] section-py" aria-label="Contact information and inquiry form">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
