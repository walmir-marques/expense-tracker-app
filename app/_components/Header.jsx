"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex justify-between items-center p-5  bg-gray-900">
      <h1 className="text-2xl font-bold text-green-300">
        Money <span className="text-purple-600">Tracker</span> 💰
      </h1>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in">
          <Button variant="landingPage">Logar / Cadastrar</Button>
        </Link>
      )}
    </div>
  );
};
export default Header;
