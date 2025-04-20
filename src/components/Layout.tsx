import React from "react";
import { Link } from "react-router-dom"; // Permet d'afficher le contenu des pages

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="sticky top-0 bg-gray-800 p-4 shadow-md z-50">
        <nav className="flex justify-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Accueil
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            À propos
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">
            Mes projets
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-10 flex flex-col items-center h-full overflow-y-hidden">
        {children}
      </main>
      <footer className="sticky bottom-0 bg-gray-800 p-5 shadow-md text-center">
        © 2025 Seydou Ouattara - Tous droits réservés
      </footer>
    </div>
  );
}
export default Layout;
