import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SILK_BG = "https://cdn.poehali.dev/projects/0b80e863-c8b8-4410-9c81-4f8c6721ef95/bucket/8dc7aacf-9ddc-42ff-ae7d-7c756f17e529.jpg";

export default function Thanks() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen font-sans text-[#3a3040] flex flex-col items-center justify-center relative overflow-hidden">

      {/* Шёлковый фон */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SILK_BG})` }}
      />

      <div
        className="relative z-10 text-center px-6 max-w-xl mx-auto transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
      >
        {/* Символ бесконечности */}
        <div className="text-[#d4cce0] text-4xl mb-8 select-none">∞</div>

        {/* Заголовок */}
        <h1 className="font-serif text-5xl md:text-6xl font-light text-[#3a3040] leading-tight mb-6">
          Спасибо<br /><em>за ваш ответ</em>
        </h1>

        {/* Разделитель */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#d4cce0]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c4b8d4]" />
          <div className="h-px w-12 bg-[#d4cce0]" />
        </div>

        {/* Романтичный текст */}
        <p className="font-serif text-xl text-[#7c7088] font-light leading-relaxed mb-3">
          Мы с нетерпением ждём этого дня —
        </p>
        <p className="font-serif text-xl italic text-[#9b85b0] font-light leading-relaxed mb-10">
          когда все самые близкие люди окажутся рядом, и начнётся что-то по-настоящему волшебное.
        </p>

        {/* Дата */}
        <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-[#a89eb8] mb-12">
          22 июля 2026 · Кимры
        </p>

        {/* Место для гифки */}
        <div className="mb-12 border border-[#e8e2f0] bg-white/70 backdrop-blur-sm rounded-sm overflow-hidden">
          <div className="aspect-[4/3] flex flex-col items-center justify-center gap-2">
            <span className="text-3xl">🎉</span>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#c4b8d4]">здесь будет ваша гифка</p>
          </div>
        </div>

        {/* Кнопка назад */}
        <button
          onClick={() => navigate("/")}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#a89eb8] hover:text-[#7c7088] transition-colors duration-300 border-b border-[#e8e2f0] pb-0.5"
        >
          Вернуться на главную
        </button>

        {/* Подпись */}
        <p className="font-serif text-sm italic text-[#c4b8d4] mt-12">
          Арина & Александр
        </p>
      </div>
    </div>
  );
}