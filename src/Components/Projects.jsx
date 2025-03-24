import React from "react";
import loyiha1 from "../pictures/loyiha1.png";
import loyiha2 from "../pictures/loyiha2.png";
import loyiha3 from "../pictures/loyiha3.png";
import hover from '../pictures/hover.svg'
const Projects = () => {
  return (
    <div className="text-white">
      <div className="mx-auto text-center mb-9">
        <h2 className="md:text-[48px] text-[32px] font-bold">Loyihalarimiz</h2>
        <p className="md:text-[18px] text-[14px]">biz haqimizda gapirsin!</p>
      </div>

      <div className="container flex flex-col gap-10">
        {/* Project 1 */}
        <div className="projects flex flex-col md:flex-row items-center gap-5 md:gap-10 rounded-2xl">
          <div className="w-full md:w-[50%]">
            <img className="rounded-[16px] w-full" src={loyiha1} alt="loyiha" />
          </div>
          <div className="w-full md:w-[50%] text-center md:text-left">
          <img className="absolute w-[50%] md:w-[50%] h-auto object-contain z-[-1]" src={hover} alt="hover" />
            <h3 className="font-bold text-[24px] md:mb-4 text-start">Tourmad loyihasi</h3>
            <p className="md:text-[18px] text-[14px] text-start">
            Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.

            </p>
            <button className="px-4 py-2 text-white border rounded-lg block bg-white/10 shadow-lg mt-5">
              Loyihani ko’rish
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="projects flex flex-col md:flex-row-reverse items-center gap-5 md:gap-10 rounded-2xl">
           <img className="absolute w-[50%] md:w-[50%] h-auto object-contain z-[-1]" src={hover} alt="hover" />
          <div className="w-full md:w-[50%]">
            <img className="rounded-[16px] w-full" src={loyiha2} alt="loyiha" />
            <img className="absolute w-[50%] md:w-[50%] h-auto object-contain z-[-1]" src={hover} alt="hover" />
          </div>
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h3 className="font-bold text-[24px] md:mb-4 text-start">ProRun loyihasi</h3>
            <p className="md:text-[18px] text-[14px] text-start">
            Prorun.uz – bu saytda tez-tez bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir musobaqada qatnashishingiz mumkin. 
Nima uchun sayt qurilgan? Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun yangi web ilova ishlab chiqildi.

            </p>
            <button className="px-4 py-2 text-white border rounded-lg block bg-white/10 shadow-lg mt-5">
              Loyihani ko’rish
            </button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="projects flex flex-col md:flex-row items-center gap-5 md:gap-10 rounded-2xl">
          <div className="w-full md:w-[50%]">
            <img className="rounded-[16px] w-full" src={loyiha3} alt="loyiha" />
          </div>
          <div className="w-full md:w-[50%] text-center md:text-left">
            <h3 className="font-bold text-[24px] md:mb-4 text-start">Xalq trans loyihasi</h3>
            <p className="md:text-[18px] text-[14px] text-start">
            Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p>
            <button className="px-4 py-2 text-white border rounded-lg block bg-white/10 shadow-lg mt-5">
              Loyihani ko’rish
            </button>
          </div>
        </div>
      </div>

      <div>
        <button className="bg-[var(--violet)] py-3 px-6 rounded-lg mt-10 block mx-auto">
          Boshqa loyihalarni ko’rish
        </button>
      </div>
    </div>
  );
};

export default Projects;