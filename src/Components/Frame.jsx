import React from "react";
import icon1 from '../pictures/frame_pictures/icon1.svg'
import icon2 from '../pictures/frame_pictures/icon2.svg'
import icon3 from '../pictures/frame_pictures/icon3.svg'
import icon4 from '../pictures/frame_pictures/icon4.svg'
import icon5 from '../pictures/frame_pictures/icon5.svg'
import icon6 from '../pictures/frame_pictures/icon6.svg'
import icon7 from '../pictures/frame_pictures/icon.svg'
import icon8 from '../pictures/frame_pictures/icon8.svg'
import icon9 from '../pictures/frame_pictures/icon9.svg'

import hover from '../pictures/hover.svg'


const services = [
  { title: "Landing sahifalar", desc: "G'oya, tashviqot va mahsulot sahifalari, mijozlarni jalb qilish uchun", img: icon1 },
  { title: "Korporativ web-sayt", desc: "Kompaniyangiz uchun mustahkam tashrif sahifasi, mijozlar bilan aloqani osonlashtirish uchun", img: icon2 },
  { title: "Online do'kon", desc: "Mahsulotlar yoki xizmatlarni online tarzda sotish tizimi", img: icon3 },
  { title: "CRM tizimi", desc: "Mijozlar bilan ishlashni avtomatlashtirish va biznesingizni rivojlantirish", img: icon4 },
  { title: "Portfolio saytlar", desc: "Shaxsiy yoki kompaniya uchun imidj saytlar", img: icon5 },
  { title: "Blog sahifalari", desc: "Maqolalar, yangiliklar, interaktiv kontent joylash uchun", img: icon6 },
  { title: "Ta'lim platformasi", desc: "Kurslar, video-darsliklar, test tizimi va o'quvchilarga maxsus bo'limlar", img: icon7 },
  { title: "ERP platformasi", desc: "Biznes jarayonlarini boshqarish tizimi, mahsulotlar, ombor va buxgalteriya uchun", img: icon8 },
  { title: "ERP platformasi", desc: "Biznes jarayonlarini boshqarish tizimi, mahsulotlar, ombor va buxgalteriya uchun", img: icon9 },

];

const Frame = () => {
  return (
    <div className="container mx-auto py-16 text-white">
     
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">Xizmat turlari</h2>
      <p className="text-center mb-12 text-gray-300">Dasturiy ta'minotning eng talabgir xizmat turlari</p>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-[rgba(255,255,255,0.1)] rounded-xl shadow-lg text-center hover:bg-[var(--violet)] px-10 py-20 hover:bg-opacity-80 hover:scale-105 transition">
            <div className=" ">  <img src={service.img} alt={service.title} className=" mx-auto mb-4 " /></div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            
            <p className="text-gray-300 mt-2">{service.desc}</p>
          </div>
        ))}


      </div>
    </div>
  );
};

export default Frame;
