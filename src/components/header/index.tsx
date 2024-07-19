import React from 'react'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

export default function Header() {

return (
<header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Universitas Ahmad Dahlan
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-300">
                
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
