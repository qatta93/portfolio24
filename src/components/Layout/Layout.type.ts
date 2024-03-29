import { ReactElement, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export type LayoutType = (props: LayoutProps) => ReactElement;
