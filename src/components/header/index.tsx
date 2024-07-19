import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import universityLogo from '../../../public/universityLogo.png';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 h-28 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold">
            Sistem Informasi Manajemen Ruang
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Image
                src={universityLogo}
                alt="University Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
