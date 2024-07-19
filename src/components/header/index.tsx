import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import universityLogo from '../../../public/universityLogo.png';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 h-28 flex items-center fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="left-0 flex">
          <Image
            src={universityLogo}
            alt="University Logo"
            width={200}
            height={200}
            className="object-contain hidden lg:block"
          />
          <Link href="/" className="flex items-center px-8">
            <span className="text-2xl font-bold">
              Sistem Informasi Manajemen Ruang
            </span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              {/* disini list menu */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
