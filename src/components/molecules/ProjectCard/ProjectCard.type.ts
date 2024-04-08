import { ReactElement } from "react";

interface ProjectCardProps {
  className?: string;
  image: string;
  title: string;
  technologies: Array<string>;
  description: string;
  links: Array<object>;
}

export type ProjectCardType = (props: ProjectCardProps) => ReactElement;
