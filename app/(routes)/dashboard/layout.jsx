"use client";

import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";
import { db } from "../../../utils/dbConfig";
import { Budgets } from "../../../utils/schema.jsx";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("cliquei");
  };

  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    if (result?.length === 0) {
      router.replace("/dashboard/budgets");
    }
  };

  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideBar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
      <div className="md:hidden fixed top-5 left-5h ">
        <MenuIcon className="block text-gray-500" onClick={toggleMenu} />
      </div>
    </div>
  );
};
export default DashboardLayout;
