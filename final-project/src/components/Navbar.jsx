import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse } from "flowbite";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const $targetEl = document.getElementById("navbar-sticky");
    const $triggerEl = document.querySelector('[data-collapse-toggle="navbar-sticky"]');

    const collapseOptions = {
      onToggle: () => {
        setIsOpen((prev) => !prev);
      },
    };

    if ($targetEl && $triggerEl) {
      const collapse = new Collapse($targetEl, $triggerEl, collapseOptions);

      return () => {
        collapse.collapse();
      };
    }
  }, []);

  return (
    <section id="navbar" className="fixed w-full z-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Ini Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./src/assets/img/NextStep Logo.png" className="h-8 hover:scale-105" alt="Next Step Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/login" className="text-white bg-[#6149C3] hover:bg-[#B65BC2] transition-colors font-medium rounded-lg text-sm px-4 py-2 text-center">
              Login
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors ${isActive ? "text-[#B65BC2] md:border-b-2 md:border-[#B65BC2]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent hover:text-[#B65BC2]"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/job-vacancy"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 transition-colors ${isActive ? "text-[#B65BC2] md:border-b-2 md:border-[#B65BC2]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent hover:text-[#B65BC2]"}`
                  }
                >
                  Job Vacancy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded md:p-0 transition-colors ${isActive ? "text-[#B65BC2] md:border-b-2 md:border-[#B65BC2]" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent hover:text-[#B65BC2]"}`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
