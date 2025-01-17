import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}

interface ThemeProviderProps {
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
  disableTransitionOnChange: boolean;
  children: React.ReactNode;
}

export function ThemeProvider({
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
  children,
}: ThemeProviderProps) {
  return (
    <div data-theme-provider={attribute} data-default-theme={defaultTheme}>
      {children}
    </div>
  );
}
