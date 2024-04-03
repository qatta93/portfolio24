import { useContactForm } from "./ContactForm.hooks";
import {
  ContactFormComponent,
  SuccessMessage,
  FormInput,
  FormTextArea,
  Loader,
  StyledButton,
  StyledLottie,
} from "./ContactForm.styled";
import { ContactFormType } from "./ContactForm.type";
import message from "./message.json";

export const ContactForm: ContactFormType = () => {
  const { isLoading, isSubmitted, handleSubmit } = useContactForm();

  if (isSubmitted) {
    return (
      <SuccessMessage>
        <StyledLottie animationData={message} loop={true} />
        <p>Thank you!</p>
        <p>I'll be in touch soon.</p>
      </SuccessMessage>
    );
  }

  return (
    <ContactFormComponent onSubmit={handleSubmit}>
      <FormInput
        type="text"
        placeholder="Your name"
        name="name"
        required></FormInput>
      <FormInput
        type="email"
        placeholder="Email"
        name="email"
        required></FormInput>
      <FormTextArea
        placeholder="Tell me everything..."
        name="message"
        required></FormTextArea>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledButton text="SEND" type="submit" value="Download CTA" />
      )}
    </ContactFormComponent>
  );
};
