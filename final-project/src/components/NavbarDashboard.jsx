import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavbarDashboard = ({ onToggleSidebar }) => {
  const { user } = useContext(AuthContext);
  const NextStep = "/img/NextStep.png";

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button onClick={onToggleSidebar} type="button" className="p-2 mr-3 text-gray-600 rounded cursor-pointer md:hidden">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            <Link to="/" className="flex items-center">
              <img src={NextStep} className="h-8 mr-3" alt="NextStep Logo" />
            </Link>
          </div>
          <div className="flex items-center">
            <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full object-cover" src={user?.image_url || "https://randomuser.me/api/portraits/men/75.jpg"} alt="user photo" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
