import { ContactForm } from "../../molecules/ContactForm";
import { SectionHeader } from "../../atoms/SectionHeader";
import {
  ContactSectionWrapper,
  FormContainer,
  AnimationContainer,
  ContactSectionContainer,
} from "./ContactSection.styled";
import { ContactSectionType } from "./ContactSection.type";

export const ContactSection: ContactSectionType = () => {
  return (
    <ContactSectionWrapper id="contact">
      <ContactSectionContainer>
        <SectionHeader
          sectionTitle="contact"
          description="Say Hello!"
          isContactSection={true}
        />
        <FormContainer>
          <ContactForm />
          <AnimationContainer>
            <img src="/images/contact.gif" alt="Contact animation" />
          </AnimationContainer>
        </FormContainer>
      </ContactSectionContainer>
    </ContactSectionWrapper>
  );
};
