import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 text-white shadow-md z-10 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Portfolio de Seydou</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className={`hover:text-gray-500 ${
                  location.pathname === "/" ? "text-gray-300" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-gray-500 ${
                  location.pathname === "/about" ? "text-gray-300" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`hover:text-gray-500 ${
                  location.pathname === "/projects" ? "text-gray-300" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-gray-500 ${
                  location.pathname === "/contact" ? "text-gray-300" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
