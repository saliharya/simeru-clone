import React from 'react';
import Image from 'next/image';
import universityLogo from '../../../public/universityLogo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="items-center hidden xl:block lg:block">
          <Image
            src={universityLogo}
            alt="University Logo"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="text-center flex-1 mx-2">
          <h3 className="text-lg font-semibold mb-1">Biro Sistem Informasi dan Komunikasi</h3>
          <p className="text-sm">Universitas Ahmad Dahlan</p>
          <p className="text-sm">Jalan Kapas No.9, Yogyakarta</p>
          <p className="text-sm">Telp. 0274 563 515, 379 418; Fax. 0274 564 604</p>
          <p className="text-sm">Email: <a href="mailto:biskom@uad.ac.id" className="text-blue-400 hover:underline">biskom@uad.ac.id</a></p>
        </div>


        <div className="hidden xl:block lg:block text-right flex-shrink-0">
          <p className="font-bold">MORAL AND INTELLECTUAL INTEGRITY</p>
        </div>
      </div>
    </footer>
  );
}
