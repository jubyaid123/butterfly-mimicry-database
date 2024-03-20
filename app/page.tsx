'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PasswordGate = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Check on component mount if the user is already authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      router.push('/dashboard'); // Adjust this path to the authenticated part of your site
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "butterflymimicry") {
      localStorage.setItem('isAuthenticated', 'true'); // Mark the user as authenticated
      router.push('/dashboard'); // Adjust this path as needed
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="font-bold text-lg text-center">
          Enter password given to access the Butterfly Database
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xs">
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="border-2 text-black border-gray-300 p-2 rounded-md"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                Submit
            </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
