import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SILK_BG = "https://cdn.poehali.dev/projects/0b80e863-c8b8-4410-9c81-4f8c6721ef95/files/7e67cb85-cbbb-474e-bee6-af0be850bbc3.jpg";

export default function Thanks() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const gifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Подключаем скрипт Tenor для гифки
    if (gifRef.current && !document.querySelector('script[src="https://tenor.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://tenor.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen font-sans text-black flex flex-col items-center justify-center relative overflow-hidden py-16">

      {/* Шёлковый фон */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${SILK_BG})` }}
      />

      <div
        className="relative z-10 text-center px-6 max-w-sm mx-auto w-full transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
      >
        {/* Символ бесконечности */}
        <div className="text-black/20 text-4xl mb-8 select-none">∞</div>

        {/* Заголовок */}
        <h1 className="font-serif text-5xl md:text-6xl font-light text-black leading-tight mb-6">
          Спасибо<br /><em>за ваш ответ</em>
        </h1>

        {/* Разделитель */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-black/15" />
          <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
          <div className="h-px w-12 bg-black/15" />
        </div>

        {/* Романтичный текст */}
        <p className="font-serif text-xl text-black/60 font-light leading-relaxed mb-3">
          Мы с нетерпением ждём этого дня —
        </p>
        <p className="font-serif text-xl italic text-black/50 font-light leading-relaxed mb-10">
          когда все самые близкие люди окажутся рядом, и начнётся что-то по-настоящему волшебное.
        </p>

        {/* Дата */}
        <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-black/40 mb-10">
          22 июля 2026 · Кимры
        </p>

        {/* Гифка */}
        <div ref={gifRef} className="mb-10 overflow-hidden rounded-sm">
          <div
            className="tenor-gif-embed"
            data-postid="10674288337814969177"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="100%"
          />
        </div>

        {/* Кнопка назад */}
        <button
          onClick={() => navigate("/")}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-black/40 hover:text-black/70 transition-colors duration-300 border-b border-black/15 pb-0.5"
        >
          Вернуться на главную
        </button>

        {/* Подпись */}
        <p className="font-serif text-sm italic text-black/30 mt-10">
          Арина & Александр
        </p>
      </div>
    </div>
  );
}
