import { useState } from "react";
import { useContactForm } from "./ContactForm.hooks";
import {
  SuccessMessage,
  Loader,
  StyledButton,
  StyledLottie,
  Container,
  InputWrapper,
  InputWrapperLocation,
  Label,
  Form,
  StyledInput,
  StyledTextarea,
} from "./ContactForm.styled";
import { ContactFormType } from "./ContactForm.type";
import message from "./message.json";
import { getCurrentDate } from "helpers/getCurrentDate";

export const ContactForm: ContactFormType = () => {
  const { isLoading, isSubmitted, handleSubmit } = useContactForm();

  const [formData, setFormData] = useState({
    location: "",
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputWrapperLocation>
          <StyledInput
            required
            type="text"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
            placeholder="Location"
          />
          <Label>{getCurrentDate()}</Label>
        </InputWrapperLocation>
        <Label>Hi Patrycja,</Label>
        <InputWrapper>
          <Label>My name is</Label>
          <StyledInput
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name*"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>and I work with</Label>
          <StyledInput
            type="text"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            placeholder="Company*"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>You can reach me at</Label>
          <StyledInput
            required
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Phone*"
          />
        </InputWrapper>
        <InputWrapper>
          <Label>or at</Label>
          <StyledInput
            required
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email*"
          />
        </InputWrapper>
        <InputWrapper>
          <StyledTextarea
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Message*"
          />
        </InputWrapper>
        <Label>
          Regards,
          <br />
          {formData.name}
        </Label>
        {isLoading ? (
          <Loader />
        ) : (
          <StyledButton text="SEND" type="submit" value="Download CTA" />
        )}
      </Form>
    </Container>
  );
};
