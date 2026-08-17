"use client";

import { useEffect } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return <LanguageProvider>{children}</LanguageProvider>;
}
