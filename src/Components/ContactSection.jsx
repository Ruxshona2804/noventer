


export default function ContactSection() {
  return (
    <div className="grid items-center justify-center p-6">
      <div className="flex flex-col text-white items-center md:mb-15">
     
        <h3 className="text-[48px] font-bold">Biz bilan aloqa</h3>
        <p>Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz</p>
      </div>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Team Section (2/3) */}
        <div className="md:col-span-2 div p-4  rounded-2xl shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-6">Bizning jamoa haqida</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-2 rounded-2xl div">
                <div className="w-20 h-20  bg-white rounded-md mb-3"></div>
                <div>
                  <h3 className="text-white font-medium ">Xusanov Alibek</h3>
                  <p className="text-gray-400 text-sm">Developer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Consultation Section (1/3) */}
        <div className=" div p-4  rounded-2xl shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-6">Bepul konsultatsiya</h2>
          <p className="text-gray-400 text-sm mb-6">
            Loyihangiz bo‘yicha boshlang‘ich bepul konsultatsiya uchun ma’lumotlaringizni qoldiring.
          </p>
          <input
            type="text"
            placeholder="Ismingiz"
            className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-400 mb-4 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Telefon raqamingiz"
            className="w-full p-3 bg-gray-800 rounded-xl text-white placeholder-gray-400 mb-6 focus:outline-none"
          />
          <button className="w-full bg-[var(--violet)] text-white font-semibold py-3 rounded-xl transition">
            Jo’natish
          </button>
        </div>
      </div>
    </div>
  );
}