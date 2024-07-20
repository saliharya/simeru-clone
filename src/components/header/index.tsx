'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import universityLogo from '../../../public/universityLogo.png';

export default function Header() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' }); // Redirect to home or any other page after sign out
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg h-20 flex items-center fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center">
          <Image
            src={universityLogo}
            alt="University Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transform hover:scale-105"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
