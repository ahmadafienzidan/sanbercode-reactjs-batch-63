import { useEffect, useState } from "react";
import { Drawer } from "flowbite";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const initializeDrawer = () => {
      const $targetEl = document.getElementById("sidebar");
      const $triggerEl = document.querySelector('[data-drawer-toggle="sidebar"]');

      const drawerOptions = {
        placement: "left",
        backdrop: true,
        bodyScrolling: false,
        edge: false,
      };

      if ($targetEl && $triggerEl) {
        const drawer = new Drawer($targetEl, $triggerEl, drawerOptions);

        const showHandler = () => setIsOpen(true);
        const hideHandler = () => setIsOpen(false);

        $targetEl.addEventListener("show.bs.drawer", showHandler);
        $targetEl.addEventListener("hide.bs.drawer", hideHandler);

        return () => {
          drawer.hide();
          $targetEl.removeEventListener("show.bs.drawer", showHandler);
          $targetEl.removeEventListener("hide.bs.drawer", hideHandler);
        };
      }
    };

    initializeDrawer();
  }, []);

  return (
    <aside id="sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform duration-200 bg-white border-r border-gray-200 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="w-5 h-5 text-[#6149C3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/list-job-vacancy" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="w-5 h-5 text-[#6149C3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3">Job Vacancies</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/list-job-vacancy/form" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="w-5 h-5 text-[#6149C3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="ml-3">Add New Job</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/profile" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="w-5 h-5 text-[#6149C3]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Profile</span>
            </a>
          </li>
          <li>
            <a href="/dashboard/change-password" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="w-5 h-5 text-[#6149C3]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="ml-3">Change Password</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
