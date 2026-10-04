import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import Container from "@/components/container/Container";
import { FAQSection } from "@/components/faq/Faq";

const Contact = () => {
  return (
    <Container>
      <ContactHeader />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2fr)_450px]">
        <ContactForm />
        <ContactInfo />
      </div>

      <FAQSection />
    </Container>
  );
};

export default Contact;
