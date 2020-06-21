import React, { useState } from 'react';
import Link from 'next/link';

import { Logo } from './vectors';
import { mainNavigation } from '../data/site-navigation';
import { MobileMenu } from './mobile-menu';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-20 bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center flex-shrink-0 rounded-full focus:outline-none focus:shadow-outline">
              <Logo className="w-auto h-10 text-teal-500 transition duration-150 ease-in-out fill-current hover:text-teal-700" />
            </a>
          </Link>
          <div className="hidden h-full space-x-8 sm:ml-6 sm:flex">
            {mainNavigation.map((navItem) => (
              <Link key={navItem.id} href={navItem.slug}>
                <a className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300">
                  {navItem.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center -mr-2 sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
              aria-label="Main menu"
              aria-expanded="false"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              {isOpen ? (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
