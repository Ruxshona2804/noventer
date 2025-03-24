import React from "react";
import main_image1 from "../pictures/main_image1.png";
import main_image2 from "../pictures/main_image2.png";
import main_image3 from "../pictures/main_image3.png";
import hover from '../pictures/hover.svg'
const Main = () => {
  const cards = [
    {
      img: main_image1,
      title: "Boshlanishi",
      text: "Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib qo’ydik",
    },
    {
      img: main_image2,
      title: "Uzoq muddatli loyihalar",
      text: "Tajribamiz davomida umumiy hisobda - - loyiha uchun -- - muddatda ishlab topshirdik",
    },
    {
      img: main_image3,
      title: "Jamoamiz kengaymoqda",
      text: "Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda",
    },
  ];

  return (
    <section className="pt-7 text-white text-center">
      {/* Заголовок */}
      <div className="bg-[var(--violet)] py-7 mb-9 md:text-start text-center md:pl-20">
        <h2 className="text-2xl  md:text-4xl font-bold">Biz haqimizda</h2>
        <p className="text-gray-300 text-lg">Qisqacha ma'lumot</p>
      </div>

      {/* Карточки */}
      <div className="container grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.1)] rounded-xl text-start overflow-hidden shadow-lg"
          >
             <img className="absolute w-[50%] md:w-[50%] h-auto object-contain z-[-1]" src={hover} alt="hover" />
            <img src={card.img} alt={card.title} className="w-full h-[70%] object-cover" />
           
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-300 md:text-[14px] md:pb-2 pb-19 text-[12px]">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Текст внизу */}
      <p className="mt-8 mb-8 text-gray-300 text-sm px-6 max-w-3xl md:text-start  mx-auto">
        Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
    </section>
  );
};

export default Main;
