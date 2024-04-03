import {
  SectionHeaderWrapper,
  SectionTitle,
  SectionDescription,
  TitleContainer,
} from "./SectionHeader.styled";
import { SectionHeaderType } from "./SectionHeader.type";

export const SectionHeader: SectionHeaderType = ({
  sectionTitle,
  description,
  isContactSection,
}) => (
  <SectionHeaderWrapper>
    <TitleContainer>
      <span></span>
      <SectionTitle>{sectionTitle}</SectionTitle>
    </TitleContainer>
    <SectionDescription isContactSection={isContactSection}>{description}</SectionDescription>
  </SectionHeaderWrapper>
);
