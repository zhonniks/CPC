"use client";
import useScroll from "@/lib/hooks/use-scroll";
import Link from "next/link";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import ContestDropdown from "./contest-dropdown";
import { useState } from "react";
import Image from "next/image";

export default function NavBar({ session }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const [dropdown, setDropdown] = useState(false)

  const scrolled = useScroll(50);
  const closeMobileMenu = () => setClick(false);

  

  return (
    <>
    <SignInModal />
    <div
      className={`fixed top-0 w-full ${scrolled ? "bg-gradient-to-r from-black to-gray-900" : "bg-black"
        } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
        <Link href="/" className="flex items-center font-stylus text-2xl text-white"> {/* Changed text color to white */}
        <Image
              src="/cpc2.png"
              alt="N17R logo"
              width="130"
              height="70"
              className="mr-2 rounded-sm"
            ></Image>
        </Link>
        <div className="flex space-x-8">
          <Link href="/" className="text-white hover:text-blue-800 transition-colors"> {/* Changed text color to white */}
            Chat
          </Link>
          <Link href="/new" className="text-white hover:text-blue-800 transition-colors"> {/* Changed text color to white */}
            Opens
          </Link>
          session (
            <ContestDropdown session={session} />
          ) 
        </div>
        <div>
          {session ? (
            <UserDropdown session={session} />
          ) : (
            <button
              className="rounded-full border border-white bg-white text-mediumseagreen p-1.5 px-4 text-sm transition-all hover:bg-mediumseagreen hover:text-white"
              onClick={() => setShowSignInModal(true)}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  </>
  );
}