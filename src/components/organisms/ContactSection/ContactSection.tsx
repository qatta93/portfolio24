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
      </ContactSectionContainer>
    </ContactSectionWrapper>
  );
};
