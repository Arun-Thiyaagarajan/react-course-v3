'use client';

import { ReactNode } from "react";
import { ThemeProvider } from "./theme-providers";
import { Toaster } from "@/components/ui/toaster";

function Providers({children}: {children: ReactNode}) {
  return (
    <>
      <Toaster />
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
