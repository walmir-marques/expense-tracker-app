"use client";

import { UserButton } from "@clerk/nextjs";
import { menuList } from "../../../../constants/index";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const path = usePathname();

  return (
    <div className="h-screen p-5 border shadow-sm">
      <h1 className="text-2xl font-bold text-green-300">
        Money <span className="text-purple-600">Tracker</span> 💰
      </h1>
      <div className="mt-5">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <h2
              className={`flex gap-2 items-center text-gray-500 mb-2 font-medium p-5 cursor-pointer rounded-md hover:text-purple-600 hover:bg-purple-200 ${
                path === menu.path && "text-purple-600 bg-purple-200"
              }`}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
};
export default SideBar;
