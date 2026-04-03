import { useState } from "react";
import Icon from "@/components/ui/icon";

const SUNSET_BG = "https://cdn.poehali.dev/projects/0b80e863-c8b8-4410-9c81-4f8c6721ef95/files/3616ecb7-b087-4e03-8fa8-e47a10405869.jpg";

const timeline = [
  { time: "15:00", icon: "Church", title: "Церемония бракосочетания", desc: "Торжественная регистрация союза" },
  { time: "16:00", icon: "Camera", title: "Фотосессия", desc: "Прогулка и памятные снимки" },
  { time: "18:00", icon: "UtensilsCrossed", title: "Банкет", desc: "Праздничный ужин, тосты, танцы" },
  { time: "23:00", icon: "Music", title: "Вечеринка", desc: "Живая музыка и дискотека" },
];

const dresscode = [
  { color: "#C9956B", name: "Терракота" },
  { color: "#E8C9A0", name: "Золотой" },
  { color: "#8B5E3C", name: "Шоколад" },
  { color: "#F5E6D3", name: "Жемчуг" },
  { color: "#6B4C3B", name: "Тёмный орех" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", guests: "1", attendance: "yes", wishes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#1a0e08] font-sans text-[#f5e6d3]">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SUNSET_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#1a0e08]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-amber-300/40 animate-float"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 4) * 15}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + (i % 3)}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-amber-300/80 mb-6">
            приглашение на свадьбу
          </p>

          <div className="relative mb-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-amber-400/60 text-2xl">✦</div>
            <h1 className="font-serif text-7xl md:text-9xl font-light text-white leading-none tracking-wide">
              Арина
            </h1>
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="h-px w-16 bg-amber-400/50" />
              <span className="font-serif italic text-amber-300 text-3xl">&</span>
              <div className="h-px w-16 bg-amber-400/50" />
            </div>
            <h1 className="font-serif text-7xl md:text-9xl font-light text-white leading-none tracking-wide">
              Александр
            </h1>
          </div>

          <p className="font-sans text-sm tracking-[0.3em] uppercase text-amber-200/70 mt-8">
            22 июля 2026 · Кимры
          </p>

          <CountdownTimer targetDate="2026-07-22" />

          <a
            href="#rsvp"
            className="inline-block mt-10 px-10 py-3 border border-amber-400/50 text-amber-200 font-sans text-xs tracking-[0.3em] uppercase hover:bg-amber-400/10 transition-all duration-500"
          >
            Подтвердить присутствие
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={20} className="text-amber-300/50" />
        </div>
      </section>

      {/* ─── НАША ИСТОРИЯ ─── */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <SectionLabel>Наша история</SectionLabel>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-amber-100 mb-8 leading-tight">
          Путь к этому<br /><em>прекрасному дню</em>
        </h2>
        <p className="font-sans text-sm leading-relaxed text-[#c9a882] font-light max-w-xl mx-auto">
          Мы встретились однажды вечером, когда небо было именно таким — тёплым, золотым, 
          бесконечным. С тех пор каждый закат мы встречаем вместе. И теперь хотим разделить 
          самый главный момент нашей жизни с вами — людьми, которые дороги нам больше всего.
        </p>

        <div className="mt-14 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-transparent to-amber-600/20 z-10 pointer-events-none" />
          <div className="border border-amber-800/30 p-1">
            <div className="bg-[#2a1810] aspect-[4/3] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent" />
              <Icon name="ImagePlus" size={32} className="text-amber-700/50 relative z-10" />
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-amber-700/50 relative z-10">
                Ваше совместное фото
              </p>
              <p className="font-sans text-[10px] text-amber-800/40 relative z-10">
                Напишите мне — загружу ваше фото
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 text-amber-600/20 text-[80px] font-serif leading-none select-none">✦</div>
        </div>
      </section>

      {/* ─── ДАТА И МЕСТО ─── */}
      <section className="py-20 px-6 bg-[#140c06] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <SectionLabel>Детали торжества</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <DetailCard icon="Calendar" title="Дата">
              <p className="font-serif text-3xl text-amber-200 font-light">14 июня</p>
              <p className="font-sans text-xs text-amber-700 tracking-widest uppercase mt-1">2026 года</p>
            </DetailCard>
            <DetailCard icon="MapPin" title="Место">
              <p className="font-serif text-2xl text-amber-200 font-light">Гранд Отель</p>
              <p className="font-sans text-xs text-amber-700 tracking-widest uppercase mt-1">Сочи, ул. Приморская, 1</p>
            </DetailCard>
            <DetailCard icon="Clock" title="Начало">
              <p className="font-serif text-3xl text-amber-200 font-light">15:00</p>
              <p className="font-sans text-xs text-amber-700 tracking-widest uppercase mt-1">Просим не опаздывать</p>
            </DetailCard>
          </div>
        </div>
      </section>

      {/* ─── ПРОГРАММА ─── */}
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <SectionLabel>Программа вечера</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-amber-100 mb-14 text-center leading-tight">
          Как пройдёт<br /><em>этот день</em>
        </h2>
        <div className="relative">
          <div className="absolute left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-amber-700/60 via-amber-600/30 to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-14 h-14 shrink-0 border border-amber-700/40 flex items-center justify-center bg-[#1a0e08] group-hover:border-amber-500/60 transition-colors duration-300 relative z-10">
                  <Icon name={item.icon} size={18} className="text-amber-500/70" />
                </div>
                <div className="pt-2">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber-600 mb-1">{item.time}</p>
                  <p className="font-serif text-xl text-amber-100 font-light">{item.title}</p>
                  <p className="font-sans text-xs text-[#9a7a5a] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ДРЕСС-КОД ─── */}
      <section className="py-20 px-6 bg-[#140c06] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Дресс-код</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-amber-100 mb-4 leading-tight">
            Палитра вечера
          </h2>
          <p className="font-sans text-xs text-[#9a7a5a] mb-12 max-w-sm mx-auto">
            Просим придерживаться тёплой цветовой гаммы — оттенков заката и земли
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {dresscode.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 group">
                <div
                  className="w-14 h-14 rounded-full border-2 border-white/5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  style={{ backgroundColor: item.color }}
                />
                <p className="font-sans text-[9px] tracking-widest uppercase text-amber-700/70">{item.name}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[10px] text-amber-800/50 mt-8 tracking-wider uppercase">
            Белый и чёрный цвет — только для жениха и невесты
          </p>
        </div>
      </section>

      {/* ─── ВАЖНЫЕ ПОЖЕЛАНИЯ ─── */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <SectionLabel>Нам важно</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-amber-100 mb-12 text-center leading-tight">
          Несколько<br /><em>пожеланий</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "Gift", title: "Подарки", text: "Лучший подарок для нас — ваше присутствие. Если хотите порадовать — конверт будет кстати." },
            { icon: "Baby", title: "Дети", text: "Мы обожаем детей, но этот вечер — для взрослых. Заранее позаботьтесь о няне." },
            { icon: "Flower2", title: "Живые цветы", text: "Пожалуйста, без срезанных цветов — у невесты аллергия. Лучше горшечные растения." },
            { icon: "Bell", title: "Тосты", text: "Пожелания от гостей — лучшая часть вечера. Готовьте трогательные слова!" },
          ].map((item) => (
            <div key={item.title} className="border border-amber-800/20 p-6 hover:border-amber-700/40 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <Icon name={item.icon} size={16} className="text-amber-600/60 mt-0.5 shrink-0 group-hover:text-amber-500/80 transition-colors" />
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-amber-500/70 mb-2">{item.title}</p>
                  <p className="font-sans text-xs text-[#9a7a5a] leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── RSVP ─── */}
      <section id="rsvp" className="py-24 px-6 bg-[#140c06] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,90,30,0.05)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-xl mx-auto text-center">
          <SectionLabel>Ваш ответ</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-amber-100 mb-3 leading-tight">
            Будете ли вы<br /><em>с нами?</em>
          </h2>
          <p className="font-sans text-xs text-[#9a7a5a] mb-12">
            Просим подтвердить до 1 июля 2026
          </p>

          {submitted ? (
            <div className="border border-amber-700/40 p-12 text-center">
              <div className="text-4xl mb-4">✦</div>
              <p className="font-serif text-2xl text-amber-200 font-light">Спасибо!</p>
              <p className="font-sans text-xs text-[#9a7a5a] mt-3">Мы получили ваш ответ и очень ждём вас</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber-600/70 block mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Иван Иванов"
                  className="w-full bg-transparent border border-amber-800/30 px-4 py-3 font-sans text-sm text-amber-100 placeholder-amber-900/50 focus:outline-none focus:border-amber-600/50 transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber-600/70 block mb-2">Присутствие</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ val: "yes", label: "Да, буду!" }, { val: "no", label: "К сожалению, нет" }].map(opt => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setForm({ ...form, attendance: opt.val })}
                      className={`py-3 px-4 font-sans text-xs tracking-widest uppercase border transition-all duration-300 ${
                        form.attendance === opt.val
                          ? "border-amber-500/60 bg-amber-500/10 text-amber-300"
                          : "border-amber-800/30 text-amber-700/60 hover:border-amber-700/50"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber-600/70 block mb-2">Количество гостей</label>
                <select
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-[#140c06] border border-amber-800/30 px-4 py-3 font-sans text-sm text-amber-100 focus:outline-none focus:border-amber-600/50 transition-colors"
                >
                  {["1", "2", "3", "4"].map(n => (
                    <option key={n} value={n} className="bg-[#140c06]">{n} {n === "1" ? "гость" : "гостя"}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber-600/70 block mb-2">Пожелания молодожёнам</label>
                <textarea
                  value={form.wishes}
                  onChange={e => setForm({ ...form, wishes: e.target.value })}
                  rows={3}
                  placeholder="Напишите что-нибудь тёплое..."
                  className="w-full bg-transparent border border-amber-800/30 px-4 py-3 font-sans text-sm text-amber-100 placeholder-amber-900/50 focus:outline-none focus:border-amber-600/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-amber-700/20 border border-amber-600/40 text-amber-200 font-sans text-xs tracking-[0.3em] uppercase hover:bg-amber-600/30 transition-all duration-300"
              >
                Отправить ответ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 px-6 text-center border-t border-amber-900/30">
        <div className="text-amber-600/30 text-3xl mb-4 font-serif">✦</div>
        <p className="font-serif text-2xl italic text-amber-800/50 font-light">«Любовь никогда не перестаёт»</p>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber-900/40 mt-4">Арина & Александр · 22.07.2026</p>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-px w-8 bg-amber-700/40" />
      <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-amber-600/70">{children}</p>
      <div className="h-px w-8 bg-amber-700/40" />
    </div>
  );
}

function DetailCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="text-center border border-amber-800/20 p-8 hover:border-amber-700/40 transition-colors duration-300">
      <Icon name={icon} size={20} className="text-amber-600/50 mx-auto mb-4" />
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-amber-700/60 mb-4">{title}</p>
      {children}
    </div>
  );
}

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const target = new Date(targetDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="flex items-center justify-center gap-6 mt-10">
      {[
        { val: days, label: "дней" },
        { val: hours, label: "часов" },
        { val: minutes, label: "минут" },
      ].map(({ val, label }) => (
        <div key={label} className="text-center">
          <p className="font-serif text-4xl font-light text-amber-200">{String(val).padStart(2, "0")}</p>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-amber-700/60 mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}