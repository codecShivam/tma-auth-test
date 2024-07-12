'use client'

import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Telegram = (window as any).Telegram;
      Telegram.WebApp.ready();

      document.getElementById('auth-button')?.addEventListener('click', () => {
        const initData = Telegram.WebApp.initData;
        const initDataUnsafe = Telegram.WebApp.initDataUnsafe;

        console.log(initData, initDataUnsafe);

        if (initData) {
          alert('User authenticated');
          // Use initDataUnsafe.user to get authenticated user information
          console.log(initDataUnsafe.user);
        } else {
          alert('User not authenticated');
        }
      });
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Telegram Mini App</h1>
      <button id="auth-button">Authenticate</button>
    </div>
  );
};

export default HomePage;
