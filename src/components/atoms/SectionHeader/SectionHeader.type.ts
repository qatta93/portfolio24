import { ReactElement } from "react";

interface SectionHeaderProps {
  sectionTitle: string;
  description: string;
  isContactSection?: boolean;
}

export type SectionHeaderType = (props: SectionHeaderProps) => ReactElement;
