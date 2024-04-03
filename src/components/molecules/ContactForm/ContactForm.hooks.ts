import { useState } from "react";
import { UseContactFormType } from "./ContactForm.type";

export const useContactForm: UseContactFormType = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleWebForm(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
    });
    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);
      setIsLoading(false);
    }
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    setIsLoading(true);
    handleWebForm(e);
  };

  return { handleSubmit, isLoading, isSubmitted };
};
