import { NavLink } from "react-router";

export default function Navbar() {
  const links = [
    { name: "Homepage", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-900 shadow-lg shadow-neutral-500">
      <div className="py-2 flex items-center justify-center">
        <nav className="flex space-x-1 sm:space-x-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-xl font-bold transition-all duration-300 ${
                  isActive
                    ? "text-violet-400"
                    : "text-neutral-400 hover:text-slate-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}