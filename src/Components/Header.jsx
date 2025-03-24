import React from "react";
import computer from "../pictures/computer.png";
import tajriba from "../pictures/tajriba.png";
import loyiha from "../pictures/loyiha.png";
import hizmat from "../pictures/hizmat.png";
import Havsizlik from "../pictures/Havsizlik.png";
import hover from '../pictures/hover.svg'
const Header = () => {
  return (
    <div className="text-white  mt-4 md:h-[100vh] container px-4 md:px-10">
      {/* Основной баннер */}
      <div className="md:max-w-[1200px] mx-auto md:min-h-[600px] flex flex-col-reverse lg:flex-row items-center text-center lg:text-left">
        {/* Текстовая часть */}
        <div className="w-full md:w-1/2 order-2 md:order-none">
          <h2 className="font-bold text-[20px] md:text-[48px] text-start">
            Yuqori sifatdagi
            <span className="block font-normal">aniqlikka asoslanib</span>
            <span className="block text-[var(--violet)]">istalgan turdagi</span>
            dasturlarni tayyorlaymiz
          </h2>
          <button className="bg-[var(--violet)] py-3 block px-6 rounded-lg mt-6">
            Xizmatlar haqida
          </button>
        </div>

        {/* Изображение - остается справа */}
        <div className="relative md:left-[-50px] md:scale-170 md:right-70 top-25 scale-135 flex items-center justify-center w-full md:w-1/2 order-1 md:order-none">
          {/* Второе изображение (фон) */}
          <img className="absolute w-[110%] md:w-full h-auto object-contain z-[-1]" src={hover} alt="hover" />

          {/* Первое изображение (основное) */}
          <img className="relative w-[90%] md:w-full h-auto object-contain" src={computer} alt="computer" />
        </div>

      </div>

      {/* Карточки с данными */}
      <div className="container relative md:bottom-4 bottom-10 right-10 max-w-[1440px] mx-auto grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 items-center mt-6 md:mt-10">
        {[
          { img: tajriba, title: "7+ yillik", text: "Umumiy tajriba" },
          { img: loyiha, title: "5+", text: "Tugallangan loyiha" },
          { img: hizmat, title: "8+", text: "Xizmat turlari" },
          { img: Havsizlik, title: "100%", text: "Xavfsizlik darajasi" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex relative    md:flex-row items-center gap-2 md:px-4 px-2 md:py-6 py-3 rounded-lg backdrop-blur-md transition duration-300 hover:backdrop-blur-lg bg-[rgba(255,255,255,0.1)] shadow-lg"
          >
            <img src={item.img} alt={item.title} className="  w-6 h-6 md:w-12 md:h-12" />
            <div className="text-left">
              <p className="font-bold text-[10px] md:text-[20px]">{item.title}</p>
              <p className="text-[8px] md:text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
