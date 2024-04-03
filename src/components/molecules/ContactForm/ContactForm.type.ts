import { ChangeEvent, ReactElement } from "react";

interface UseContactFormReturn {
  isLoading: boolean;
  isSubmitted: boolean;
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}

export type ContactFormType = () => ReactElement;

export type UseContactFormType = () => UseContactFormReturn;
