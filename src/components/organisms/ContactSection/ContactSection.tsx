import { ContactForm } from "../../molecules/ContactForm";
import { SectionHeader } from "../../atoms/SectionHeader";
import {
  ContactSectionWrapper,
  FormContainer,
  AnimationContainer,
} from "./ContactSection.styled";
import { ContactSectionType } from "./ContactSection.type";

export const ContactSection: ContactSectionType = () => {
  return (
    <ContactSectionWrapper>
      <FormContainer>
        <SectionHeader
          sectionTitle="contact"
          description="Say Hello!"
          isContactSection={true}
        />
        <ContactForm />
      </FormContainer>
      <AnimationContainer>
        <p>animation</p>
      </AnimationContainer>
    </ContactSectionWrapper>
  );
};
