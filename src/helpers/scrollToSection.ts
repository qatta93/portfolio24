export const scrollToSection = (elementId: string) => {
  const anchor = document.getElementById(elementId);
  anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  return;
};
