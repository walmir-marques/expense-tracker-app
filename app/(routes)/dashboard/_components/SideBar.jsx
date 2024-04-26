import { UserButton } from "@clerk/nextjs";
import { menuList } from "../../../../constants/index";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

const SideBar = ({ isMenuOpen, toggleMenu }) => {
  const path = usePathname();

  return (
    <div className="border shadow-sm">
      <div className="md:w-64 md:flex md:flex-col md:h-screen">
        <div className="p-5">
          <h1 className="text-2xl font-bold text-green-300">
            Money <span className="text-purple-600">Tracker</span> 💰
          </h1>
          <div className="mt-5 md:block">
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
        </div>
        <div className="md:flex md:flex-col md:justify-end md:items-end md:h-full">
          <div className="fixed bottom-10 p-5 flex gap-2 items-center md:hidden">
            <UserButton />
            Profile
          </div>
        </div>
      </div>

      {/* Menu lateral para dispositivos móveis */}
      {isMenuOpen && (
        <div className="md:hidden relative h-screen bg-gray-500 bg-opacity-75 z-50">
          <div className="p-5">
            {menuList.map((menu) => (
              <Link href={menu.path} key={menu.id}>
                <h2
                  className={`flex gap-2 items-center text-gray-500 mb-2 font-medium p-5 cursor-pointer rounded-md hover:text-purple-600 hover:bg-purple-200 ${
                    path === menu.path && "text-purple-600 bg-purple-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <menu.icon />
                  {menu.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;
