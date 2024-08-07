"use client";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandLinktree } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard", authRequired: true },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-24">
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 md:pointer-events-none"
            >
              <TbBrandLinktree className="w-7 h-7" />
              <span className="md:hidden font-semibold">Menu</span>
            </button>

            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <SignedIn key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-gray-900 transition duration-300"
                  >
                    {item.label}
                  </Link>
                </SignedIn>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <SignedOut>
              <Link
                href="/sign-in"
                className="text-gray-800 hover:text-gray-500 bg-transparent border-2 shadow-md py-1 px-3 rounded-lg transition duration-300"
              >
                Sign In
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white m-3 -mt-0 rounded-xl backdrop:blur-xl shadow-lg absolute top-full left-0 right-0"
          >
            <nav className="flex flex-col p-4 space-y-3">
              {menuItems.map((item) => (
                <SignedIn key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800 transition duration-300"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </SignedIn>
              ))}
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="text-gray-800 hover:text-gray-500 bg-transparent border-2 shadow-md py-1 px-3 rounded-lg transition duration-300 rounded-md transition duration-300 shadow-md hover:shadow-lg text-center"
                  onClick={toggleMenu}
                >
                  Sign In
                </Link>
              </SignedOut>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
