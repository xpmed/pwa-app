'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then((reg) => {
        console.log('SW zarejestrowany:', reg);
      }).catch((err) => {
        console.error('Błąd rejestracji SW:', err);
      });
    }
  }, []);

  return null;
}
