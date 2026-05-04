import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SUNSET_BG = "https://cdn.poehali.dev/projects/0b80e863-c8b8-4410-9c81-4f8c6721ef95/files/4313af61-4c32-4530-a167-6b6d1f7f53dd.jpg";

// Палитра: белый фон, пыльно-лиловые акценты, тёмно-серый текст
// --text-dark:   #3a3040   (заголовки)
// --text-mid:    #7c7088   (подписи)
// --text-light:  #a89eb8   (мелкий текст)
// --accent:      #9b85b0   (иконки, линии)
// --bg-soft:     #f9f7fc   (чередующиеся секции)
// --border:      #e8e2f0   (рамки)

const timeline = [
  { time: "14:00", icon: "Church", title: "Церемония бракосочетания", desc: "Торжественная регистрация союза" },
  { time: "15:30", icon: "Camera", title: "Фотосессия", desc: "Прогулка и памятные снимки" },
  { time: "17:00", icon: "UtensilsCrossed", title: "Банкет", desc: "Праздничный ужин, тосты, танцы" },
  { time: "23:00", icon: "Sunset", title: "Конец торжества", desc: "Спасибо, что разделили этот день с нами" },
];

const dresscode = [
  { color: "#B57BCA", name: "Фиолетовый" },
  { color: "#C8A8DC", name: "Лавандовый" },
  { color: "#D4B8E0", name: "Сиреневый" },
  { color: "#E8D5F0", name: "Нежный" },
  { color: "#7B4F9E", name: "Глубокий" },
];

export default function Index() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", guests: "1", attendance: "yes", wishes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    navigate("/thanks");
  };

  return (
    <div className="min-h-screen bg-[#faf8fd] font-sans text-[#3a3040]">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SUNSET_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-[#faf8fd]" />

        <div className="relative z-10 text-center px-6 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
          <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-[#a89eb8] mb-8">
            приглашение на свадьбу
          </p>

          <div className="relative mb-4">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c4b8d4] text-xl">∞</div>
            <h1 className="font-serif text-7xl md:text-9xl font-light text-[#3a3040] leading-none tracking-wide">
              Арина
            </h1>
            <div className="flex items-center justify-center gap-4 my-3">
              <div className="h-px w-16 bg-[#d4cce0]" />
              <span className="font-serif italic text-[#9b85b0] text-2xl">&</span>
              <div className="h-px w-16 bg-[#d4cce0]" />
            </div>
            <h1 className="font-serif text-7xl md:text-9xl font-light text-[#3a3040] leading-none tracking-wide">
              Александр
            </h1>
          </div>

          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#7c7088] mt-8">
            22 июля 2026 · Кимры
          </p>

          <CountdownTimer targetDate="2026-07-22" />


        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={20} className="text-[#c4b8d4]" />
        </div>
      </section>

      {/* ─── НАША ИСТОРИЯ ─── */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center bg-[#faf8fd]">
        <SectionLabel>Наша история</SectionLabel>
        <h2 className="font-serif text-5xl md:text-6xl font-light text-[#3a3040] mb-8 leading-tight">
          Путь к этому<br /><em>прекрасному дню</em>
        </h2>
        <p className="font-sans text-sm leading-relaxed text-[#7c7088] font-light max-w-xl mx-auto">
          Мы встретились однажды вечером, когда небо было именно таким — тёплым, золотым,
          бесконечным. С тех пор каждый закат мы встречаем вместе. И теперь хотим разделить
          самый главный момент нашей жизни с вами — людьми, которые дороги нам больше всего.
        </p>

        <div className="mt-14 relative">
          <div className="border border-[#e8e2f0] p-1">
            <div className="bg-[#f9f7fc] aspect-[4/3] flex flex-col items-center justify-center gap-3 relative overflow-hidden">
              <Icon name="ImagePlus" size={28} className="text-[#c4b8d4]" />
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#c4b8d4]">
                Ваше совместное фото
              </p>
              <p className="font-sans text-[9px] text-[#d4cce0]">
                Напишите мне — загружу ваше фото
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 text-[#e8e2f0] text-[70px] font-serif leading-none select-none">✦</div>
        </div>
      </section>

      {/* ─── ДАТА И МЕСТО ─── */}
      <section className="py-20 px-6 bg-[#f9f7fc] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4cce0] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4cce0] to-transparent" />
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Детали торжества</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <DetailCard icon="Calendar" title="Дата">
              <p className="font-serif text-3xl text-[#3a3040] font-light">22 июля</p>
              <p className="font-sans text-[10px] text-[#a89eb8] tracking-widest uppercase mt-1">2026 года</p>
            </DetailCard>
            <DetailCard icon="MapPin" title="Место">
              <p className="font-serif text-2xl text-[#3a3040] font-light">Усадьба</p>
              <p className="font-sans text-[10px] text-[#a89eb8] tracking-widest uppercase mt-1">ул. 50 лет ВЛКСМ, 117, Кимры</p>
            </DetailCard>
            <DetailCard icon="Clock" title="Начало">
              <p className="font-serif text-3xl text-[#3a3040] font-light">14:00</p>
              <p className="font-sans text-[10px] text-[#a89eb8] tracking-widest uppercase mt-1">Просим не опаздывать</p>
            </DetailCard>
          </div>
        </div>
      </section>

      {/* ─── ПРОГРАММА ─── */}
      <section className="py-24 px-6 max-w-2xl mx-auto">
        <SectionLabel>Программа вечера</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3a3040] mb-14 text-center leading-tight">
          Как пройдёт<br /><em>этот день</em>
        </h2>
        <div className="relative">
          <div className="absolute left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-[#d4cce0] to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-14 h-14 shrink-0 border border-[#e8e2f0] flex items-center justify-center bg-white group-hover:border-[#c4b8d4] transition-colors duration-300 relative z-10">
                  <Icon name={item.icon} size={18} className="text-[#9b85b0]" />
                </div>
                <div className="pt-2">
                  <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a89eb8] mb-1">{item.time}</p>
                  <p className="font-serif text-xl text-[#3a3040] font-light">{item.title}</p>
                  <p className="font-sans text-xs text-[#7c7088] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ДРЕСС-КОД ─── */}
      <section className="py-20 px-6 bg-[#f9f7fc] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4cce0] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4cce0] to-transparent" />
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>Дресс-код</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3a3040] mb-4 leading-tight">
            Палитра вечера
          </h2>
          <p className="font-sans text-xs text-[#7c7088] mb-12 max-w-sm mx-auto">
            Просим придерживаться нежной гаммы — оттенков лаванды, сирени и пыльного лилового
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {dresscode.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-2 group">
                <div
                  className="w-12 h-12 rounded-full border border-white shadow-sm group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: item.color }}
                />
                <p className="font-sans text-[9px] tracking-widest uppercase text-[#a89eb8]">{item.name}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[10px] text-[#c4b8d4] mt-8 tracking-wider uppercase">
            Белый и чёрный цвет — только для жениха и невесты
          </p>
        </div>
      </section>

      {/* ─── ВАЖНЫЕ ПОЖЕЛАНИЯ ─── */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <SectionLabel>Нам важно</SectionLabel>
        <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3a3040] mb-12 text-center leading-tight">
          Несколько<br /><em>пожеланий</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: "Gift", title: "Подарки", text: "Лучший подарок для нас — ваше присутствие. Если хотите порадовать — конверт будет кстати." },
            { icon: "Bell", title: "Тосты", text: "Пожелания от гостей — лучшая часть вечера. Готовьте трогательные слова!" },
          ].map((item) => (
            <div key={item.title} className="border border-[#e8e2f0] p-6 hover:border-[#c4b8d4] transition-colors duration-300 group">
              <div className="flex items-start gap-4">
                <Icon name={item.icon} size={15} className="text-[#9b85b0] mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#a89eb8] mb-2">{item.title}</p>
                  <p className="font-sans text-xs text-[#7c7088] leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── RSVP ─── */}
      <section id="rsvp" className="py-24 px-6 bg-[#f9f7fc] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4cce0] to-transparent" />
        <div className="max-w-xl mx-auto text-center">
          <SectionLabel>Ваш ответ</SectionLabel>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3a3040] mb-3 leading-tight">
            Будете ли вы<br /><em>с нами?</em>
          </h2>
          <p className="font-sans text-xs text-[#7c7088] mb-12">
            Просим подтвердить до 1 июля 2026
          </p>

          {submitted ? (
            <div className="border border-[#e8e2f0] bg-white p-12 text-center">
              <div className="text-3xl mb-4 text-[#c4b8d4]">✦</div>
              <p className="font-serif text-2xl text-[#3a3040] font-light">Спасибо!</p>
              <p className="font-sans text-xs text-[#7c7088] mt-3">Мы получили ваш ответ и очень ждём вас</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a89eb8] block mb-2">Ваше имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Иван Иванов"
                  className="w-full bg-white border border-[#e8e2f0] px-4 py-3 font-sans text-sm text-[#3a3040] placeholder-[#d4cce0] focus:outline-none focus:border-[#9b85b0] transition-colors"
                />
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a89eb8] block mb-2">Присутствие</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ val: "yes", label: "Да, буду!" }, { val: "no", label: "К сожалению, нет" }].map(opt => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setForm({ ...form, attendance: opt.val })}
                      className={`py-3 px-4 font-sans text-[10px] tracking-widest uppercase border transition-all duration-300 ${
                        form.attendance === opt.val
                          ? "border-[#9b85b0] bg-[#f3eef9] text-[#6b5485]"
                          : "border-[#e8e2f0] text-[#a89eb8] bg-white hover:border-[#c4b8d4]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a89eb8] block mb-2">Количество гостей</label>
                <select
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                  className="w-full bg-white border border-[#e8e2f0] px-4 py-3 font-sans text-sm text-[#3a3040] focus:outline-none focus:border-[#9b85b0] transition-colors"
                >
                  {["1", "2", "3", "4"].map(n => (
                    <option key={n} value={n}>{n} {n === "1" ? "гость" : "гостя"}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a89eb8] block mb-2">Дополнительная информация для нас</label>
                <textarea
                  value={form.wishes}
                  onChange={e => setForm({ ...form, wishes: e.target.value })}
                  rows={3}
                  placeholder="Напишите что-нибудь..."
                  className="w-full bg-white border border-[#e8e2f0] px-4 py-3 font-sans text-sm text-[#3a3040] placeholder-[#d4cce0] focus:outline-none focus:border-[#9b85b0] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#9b85b0] border border-[#9b85b0] text-white font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-[#8a74a0] transition-all duration-300"
              >
                Отправить ответ
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 px-6 text-center border-t border-[#e8e2f0]">
        <div className="text-[#d4cce0] text-2xl mb-4">∞</div>
        <p className="font-serif text-2xl italic text-[#a89eb8] font-light">«Любовь навсегда»</p>
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#c4b8d4] mt-4">Арина & Александр · 22.07.2026</p>
      </footer>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="h-px w-8 bg-[#d4cce0]" />
      <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#a89eb8]">{children}</p>
      <div className="h-px w-8 bg-[#d4cce0]" />
    </div>
  );
}

function DetailCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="text-center border border-[#e8e2f0] bg-white p-8 hover:border-[#c4b8d4] transition-colors duration-300">
      <Icon name={icon} size={18} className="text-[#9b85b0] mx-auto mb-4" />
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#a89eb8] mb-4">{title}</p>
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
    <div className="flex items-center justify-center gap-8 mt-10">
      {[
        { val: days, label: "дней" },
        { val: hours, label: "часов" },
        { val: minutes, label: "минут" },
      ].map(({ val, label }) => (
        <div key={label} className="text-center">
          <p className="font-serif text-4xl font-light text-[#3a3040]">{String(val).padStart(2, "0")}</p>
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#a89eb8] mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}