import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Иконки для гамбургера
import logo from "../svgPictures/logo.svg";

const Navbar = () => {
  const [language, setLanguage] = useState("Uz");
  const [menuOpen, setMenuOpen] = useState(false); // Состояние для меню

  return (
    <div className="pb-10 container">
      {/* Навигация */}
      <nav className="container flex py-5 justify-between items-center text-white">
        {/* Мобильная версия */}
        <div className="flex w-full md:hidden items-center justify-between">
          {/* Кнопка смены языка (слева) */}
          <button
            onClick={() => setLanguage(language === "Uz" ? "Ru" : "Uz")}
            className="text-sm px-3 py-2 rounded-md hover:bg-gray-700 transition"
          >
            {language}
          </button>

          {/* Логотип (по центру) */}
          <img src={logo} alt="logo" className="w-40 h-auto" />

          {/* Гамбургер-меню (справа) */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Десктопное меню */}
        <div className="hidden md:flex justify-between items-center w-full">
          {/* Логотип слева */}
          <img src={logo} alt="logo" />

          {/* Меню */}
          <ul className="flex items-center gap-10">
            <li>Bosh sahifa</li>
            <li>Portfolio</li>
            <li>Xizmatlar</li>
            <li>Aloqa</li>
          </ul>

          {/* Кнопки */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === "Uz" ? "Ru" : "Uz")}
              className="text-sm md:text-base px-3 py-2 rounded-md hover:bg-gray-700 transition"
            >
              {language}
            </button>
            <button className="px-4 py-2 text-white border rounded-lg backdrop-blur-md transition duration-300 hover:backdrop-blur-lg bg-white/10 shadow-lg">
              Loyiha bormi?
            </button>
          </div>
        </div>
      </nav>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white p-5 flex flex-col items-center gap-4 md:hidden">
          <ul className="flex flex-col items-center gap-5">
            <li>Bosh sahifa</li>
            <li>Portfolio</li>
            <li>Xizmatlar</li>
            <li>Aloqa</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
