import { useState } from "react";
import Icon from "@/components/ui/icon";

const SUNSET_BG = "https://cdn.poehali.dev/projects/0b80e863-c8b8-4410-9c81-4f8c6721ef95/files/4313af61-4c32-4530-a167-6b6d1f7f53dd.jpg";

const timeline = [
  { time: "15:00", icon: "Church", title: "Церемония бракосочетания", desc: "Торжественная регистрация союза" },
  { time: "16:00", icon: "Camera", title: "Фотосессия", desc: "Прогулка и памятные снимки" },
  { time: "18:00", icon: "UtensilsCrossed", title: "Банкет", desc: "Праздничный ужин, тосты, танцы" },
  { time: "23:00", icon: "Music", title: "Вечеринка", desc: "Живая музыка и дискотека" },
];

const dresscode = [
  { color: "#B57BCA", name: "Фиолетовый" },
  { color: "#C8A8DC", name: "Лавандовый" },
  { color: "#D4B8E0", name: "Сиреневый" },
  { color: "#E8D5F0", name: "Нежный" },
  { color: "#7B4F9E", name: "Глубокий" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", guests: "1", attendance: "yes", wishes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f0fa] font-sans text-[#2d1f3d]">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SUNSET_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[#f5f0fa]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-300/50 animate-float"
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
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-purple-200/90 mb-6">
            приглашение на свадьбу
          </p>

          <div className="relative mb-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-purple-200/70 text-2xl">✦</div>
            <h1 className="font-serif text-7xl md:text-9xl font-light text-white leading-none tracking-wide">
              Арина
            </h1>
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="h-px w-16 bg-purple-300/60" />
              <span className="font-serif italic text-purple-200 text-3xl">&</span>
              <div className="h-px w-16 bg-purple-300/60" />
            </div>
            <h1 className="font-serif text-7xl md:text-9xl font-light text-white leading-none tracking-wide">
              Александр
            </h1>
          </div>

          <p className="font-sans text-sm tracking-[0.3em] uppercase text-purple-100/80 mt-8">
            22 июля 2026 · Кимры
          </p>

          <CountdownTimer targetDate="2026-07-22" />

          <a
            href="#rsvp"
            className="inline-block mt-10 px-10 py-3 border border-purple-200/60 text-purple-100 font-sans text-xs tracking-[0.3em] uppercase hover:bg-purple-300/20 transition-all duration-500"
          >
            Подтвердить присутствие
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={20} className="text-purple-200/60" />
        </div>
      </section>

      {/* ─── НАША ИСТОРИЯ ─── */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <SectionLabel>Наша история</SectionLabel>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-[#3d2156] mb-8 leading-tight">
          Путь к этому<br /><em>прекрасному дню</em>
        </h2>
        <p className="font-sans text-sm leading-relaxed text-[#7a5a9a] font-light max-w-xl mx-auto">
          Мы встретились однажды вечером, когда небо было именно таким — тёплым, золотым, 
          бесконечным. С тех пор каждый закат мы встречаем вместе. И теперь хотим разделить 
          самый главный момент нашей жизни с вами — людьми, которые дороги нам больше всего.
        </p>

        <div className="mt-14 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 via-transparent to-purple-200/30 z-10 pointer-events-none" />
          <div className="border border-purple-200 p-1">
            <div className="bg-[#ede8f5] aspect-[4/3] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-transparent" />
              <Icon name="ImagePlus" size={32} className="text-purple-400/60 relative z-10" />
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-purple-400/70 relative z-10">
                Ваше совместное фото
              </p>
              <p className="font-sans text-[10px] text-purple-400/50 relative z-10">
                Напишите мне — загружу ваше фото
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 text-purple-300/30 text-[80px] font-serif leading-none select-none">✦</div>
        </div>
      </section>

      {/* ─── ДАТА И МЕСТО ─── */}
      <section className="py-20 px-6 bg-[#ede8f5] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />

        <div className="max-w-4xl mx-auto">
          <SectionLabel>Детали торжества</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <DetailCard icon="Calendar" title="Дата">
              <p className="font-serif text-3xl text-[#3d2156] font-light">22 июля</p>
              <p className="font-sans text-xs text-purple-400 tracking-widest uppercase mt-1">2026 года</p>
            </DetailCard>
            <DetailCard icon="MapPin" title="Место">
              <p className="font-serif text-2xl text-[#3d2156] font-light">Усадьба</p>
              <p className="font-sans text-xs text-purple-400 tracking-widest uppercase mt-1">ул. 50 лет ВЛКСМ, 117, Кимры</p>
            </DetailCard>
            <DetailCard icon="Clock" title="Начало">
              <p className="font-serif text-3xl text-[#3d2156] font-light">15:00</p>
              <p className="font-sans text-xs text-purple-400 tracking-widest uppercase mt-1">Просим не опаздывать</p>
            </DetailCard>
          </div>
        </div>
      </section>

      {/* ─── ПРОГРАММА ─── */}
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <SectionLabel>Программа вечера</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3d2156] mb-14 text-center leading-tight">
          Как пройдёт<br /><em>этот день</em>
        </h2>
        <div className="relative">
          <div className="absolute left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-14 h-14 shrink-0 border border-purple-200 flex items-center justify-center bg-white group-hover:border-purple-400 transition-colors duration-300 relative z-10">
                  <Icon name={item.icon} size={18} className="text-purple-400" />
                </div>
                <div className="pt-2">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-purple-400 mb-1">{item.time}</p>
                  <p className="font-serif text-xl text-[#3d2156] font-light">{item.title}</p>
                  <p className="font-sans text-xs text-[#7a5a9a] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ДРЕСС-КОД ─── */}
      <section className="py-20 px-6 bg-[#ede8f5] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Дресс-код</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3d2156] mb-4 leading-tight">
            Палитра вечера
          </h2>
          <p className="font-sans text-xs text-[#7a5a9a] mb-12 max-w-sm mx-auto">
            Просим придерживаться нежной цветовой гаммы — оттенков лаванды, сирени и фиолетового
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {dresscode.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 group">
                <div
                  className="w-14 h-14 rounded-full border-2 border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-md"
                  style={{ backgroundColor: item.color }}
                />
                <p className="font-sans text-[9px] tracking-widest uppercase text-purple-400">{item.name}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[10px] text-purple-300 mt-8 tracking-wider uppercase">
            Белый и чёрный цвет — только для жениха и невесты
          </p>
        </div>
      </section>

      {/* ─── ВАЖНЫЕ ПОЖЕЛАНИЯ ─── */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <SectionLabel>Нам важно</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3d2156] mb-12 text-center leading-tight">
          Несколько<br /><em>пожеланий</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: "Gift", title: "Подарки", text: "Лучший подарок для нас — ваше присутствие. Если хотите порадовать — конверт будет кстати." },
            { icon: "Baby", title: "Дети", text: "Мы обожаем детей, но этот вечер — для взрослых. Заранее позаботьтесь о няне." },
            { icon: "Flower2", title: "Живые цветы", text: "Пожалуйста, без срезанных цветов — у невесты аллергия. Лучше горшечные растения." },
            { icon: "Bell", title: "Тосты", text: "Пожелания от гостей — лучшая часть вечера. Готовьте трогательные слова!" },
          ].map((item) => (
            <div key={item.title} className="border border-purple-200 bg-white/50 p-6 hover:border-purple-300 transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <Icon name={item.icon} size={16} className="text-purple-400 mt-0.5 shrink-0 group-hover:text-purple-500 transition-colors" />
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-purple-400 mb-2">{item.title}</p>
                  <p className="font-sans text-xs text-[#7a5a9a] leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── RSVP ─── */}
      <section id="rsvp" className="py-24 px-6 bg-[#ede8f5] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,120,220,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-xl mx-auto text-center">
          <SectionLabel>Ваш ответ</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3d2156] mb-3 leading-tight">
            Будете ли вы<br /><em>с нами?</em>
          </h2>
          <p className="font-sans text-xs text-[#7a5a9a] mb-12">
            Просим подтвердить до 1 июля 2026
          </p>

          {submitted ? (
            <div className="border border-purple-300 bg-white/60 p-12 text-center">
              <div className="text-4xl mb-4 text-purple-400">✦</div>
              <p className="font-serif text-2xl text-[#3d2156] font-light">Спасибо!</p>
              <p className="font-sans text-xs text-[#7a5a9a] mt-3">Мы получили ваш ответ и очень ждём вас</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-purple-400 block mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Иван Иванов"
                  className="w-full bg-white border border-purple-200 px-4 py-3 font-sans text-sm text-[#3d2156] placeholder-purple-200 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-purple-400 block mb-2">Присутствие</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ val: "yes", label: "Да, буду!" }, { val: "no", label: "К сожалению, нет" }].map(opt => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setForm({ ...form, attendance: opt.val })}
                      className={`py-3 px-4 font-sans text-xs tracking-widest uppercase border transition-all duration-300 ${
                        form.attendance === opt.val
                          ? "border-purple-400 bg-purple-100 text-purple-600"
                          : "border-purple-200 text-purple-300 bg-white hover:border-purple-300"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-purple-400 block mb-2">Количество гостей</label>
                <select
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-white border border-purple-200 px-4 py-3 font-sans text-sm text-[#3d2156] focus:outline-none focus:border-purple-400 transition-colors"
                >
                  {["1", "2", "3", "4"].map(n => (
                    <option key={n} value={n}>{n} {n === "1" ? "гость" : "гостя"}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-purple-400 block mb-2">Пожелания молодожёнам</label>
                <textarea
                  value={form.wishes}
                  onChange={e => setForm({ ...form, wishes: e.target.value })}
                  rows={3}
                  placeholder="Напишите что-нибудь тёплое..."
                  className="w-full bg-white border border-purple-200 px-4 py-3 font-sans text-sm text-[#3d2156] placeholder-purple-200 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-purple-500 border border-purple-500 text-white font-sans text-xs tracking-[0.3em] uppercase hover:bg-purple-600 transition-all duration-300"
              >
                Отправить ответ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 px-6 text-center border-t border-purple-200">
        <div className="text-purple-300 text-3xl mb-4 font-serif">✦</div>
        <p className="font-serif text-2xl italic text-purple-300 font-light">«Любовь никогда не перестаёт»</p>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-purple-300 mt-4">Арина & Александр · 22.07.2026</p>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-px w-8 bg-purple-300/60" />
      <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-purple-400">{children}</p>
      <div className="h-px w-8 bg-purple-300/60" />
    </div>
  );
}

function DetailCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="text-center border border-purple-200 bg-white/60 p-8 hover:border-purple-300 transition-colors duration-300">
      <Icon name={icon} size={20} className="text-purple-400 mx-auto mb-4" />
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-purple-400 mb-4">{title}</p>
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
          <p className="font-serif text-4xl font-light text-purple-100">{String(val).padStart(2, "0")}</p>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-purple-200/70 mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}