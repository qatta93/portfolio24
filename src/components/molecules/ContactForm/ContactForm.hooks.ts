import { useState } from "react";
import { UseContactFormType } from "./ContactForm.type";

export const useContactForm: UseContactFormType = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleWebForm(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const accessKey = process.env.REACT_APP_FORM_ACCESS_KEY;
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    setIsLoading(true);
    handleWebForm(e);
  };

  return { handleSubmit, isLoading, isSubmitted };
};
