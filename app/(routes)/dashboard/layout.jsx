import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;