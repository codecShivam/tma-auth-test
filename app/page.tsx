'use client';

import { useEffect, useState } from 'react';

interface User {
  first_name: string;
  phone_number?: string;
  username?: string;
}

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);

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
          setUser(initDataUnsafe.user);
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
      {/* Show user details if authenticated */}
      {user && (
        <div id="user-details">
          <h2>User Details</h2>
          <p>Name: {user.first_name}</p>
          {user.phone_number && <p>Phone Number: {user.phone_number}</p>}
          {user.username && <p>Username: {user.username}</p>}
        </div>
      )}
    </div>
  );
};

export default HomePage;
