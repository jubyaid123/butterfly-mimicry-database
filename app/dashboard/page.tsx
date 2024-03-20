// pages/dashboard.tsx
'use client';

import React from 'react';
import useAuth from '../hooks/gateAuth';
import Link from 'next/link';

export default function Dashboard() {
  useAuth(); // Protect this page with authentication

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold">Dashboard</div>
          <ul className="flex space-x-4">
            <li>
              
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
        {/* Dashboard content goes here */}
        <div>
          <p>This is your dashboard. Here you can find quick access to important information and tasks.</p>
          {/* Example content */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Quick Stats</h2>
            <ul>
              <li>Number of visits today: 100</li>
              <li>Open tasks: 5</li>
              {/* Add more stats or information as needed */}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
