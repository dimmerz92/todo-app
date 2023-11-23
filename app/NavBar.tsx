import Link from "next/link";
import React from "react";
import { FaKiwiBird } from "react-icons/fa";
import { auth, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const { userId } = auth();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Todos", href: "/todos" },
  ];
  const auths = [
    { label: "Sign In", href: "/sign-in" },
    { label: "Register", href: "/register" },
  ];

  return (
    <header>
      <nav className="flex border-b mb-5 px-5 h-14 items-center justify-between">
        <div className="flex space-x-6">
          <Link href="/">
            <FaKiwiBird />
          </Link>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                className="text-zinc-500 hover:text-zinc-800 transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex space-x-6">
          <ul className="flex space-x-6">
            {!userId &&
              auths.map((auth) => (
                <Link
                  key={auth.href}
                  className="text-zinc-500 hover:text-zinc-800 transition-colors"
                  href={auth.href}
                >
                  {auth.label}
                </Link>
              ))}
          </ul>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
