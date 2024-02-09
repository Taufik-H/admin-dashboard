import SidebarButton from "../molecules/sidebar-button";
import { SiNextdotjs } from "react-icons/si";
const SidebarMenu = () => {
  return (
    <div className="bg-white h-full min-h-screen px-4 shadow-lg  py-5 fixed left-0 bottom-0 md:static peer-focus:left-0 peer:transition ease-out delay-100 duration-200">
      <div className="flex items-center md:justify-center lg:justify-start gap-3 mb-5">
        <SiNextdotjs size={35} />
        <div className="md:hidden lg:block">
          <div className="text-xl text-slate-900 font-semibold">NGLAMAR</div>
          <div className="text-xs text-slate-500">Dashboard</div>
        </div>
      </div>
      <SidebarButton />
    </div>
  );
};

export default SidebarMenu;
