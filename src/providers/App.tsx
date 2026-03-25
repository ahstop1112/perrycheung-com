'use client';

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { I18nextProvider } from 'react-i18next';
import i18n from "@/lang/i18n";
import LightTheme from '@/styles/LightTheme';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={LightTheme}>
          <CssBaseline />
          {children}
      </ThemeProvider>
    </I18nextProvider>
  );
};