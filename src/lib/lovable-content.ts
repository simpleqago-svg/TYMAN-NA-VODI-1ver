export const lovableHeroImage = {
  src: "/images/hero/464A8790.jpg",
  alt: "Tyman na Vodi — вечер у воды",
};

export const lovableWhyCards = [
  {
    title: "Атмосфера для вечера",
    text: "Пространство, где можно спокойно пообщаться и остаться дольше — без суеты и шумного зала.",
  },
  {
    title: "Бар и коктейли",
    text: "Авторские и классические напитки — полноценная часть вечера, не дополнение к кальяну.",
  },
  {
    title: "Кальяны",
    text: "Часть отдыха и атмосферы, а не отдельная услуга «за столом».",
  },
  {
    title: "VIP-комната",
    text: "Отдельное пространство для компании — приватно, со своим форматом.",
  },
] as const;

export const lovableScenarios = [
  {
    title: "Встреча с друзьями",
    text: "Кальяны, бар, кухня — весь вечер в одном месте.",
  },
  {
    title: "Свидание",
    text: "Спокойный свет, музыка, можно поговорить.",
  },
  {
    title: "День рождения",
    text: "Стол, напитки, кальяны — бронь заранее.",
  },
  {
    title: "День без спешки",
    text: "Днём — кофе и работа, вечером — остаться.",
  },
] as const;

export const lovableGallery = [
  { src: "/images/atmosphere/07-company.jpg", alt: "Гости вечером", span: "row-span-2" },
  { src: "/images/atmosphere/05-bar.jpg", alt: "Коктейль", span: "" },
  { src: "/images/atmosphere/06-hookah.jpg", alt: "Кальян", span: "" },
  { src: "/images/atmosphere/08-food.jpg", alt: "Кухня", span: "row-span-2" },
  { src: "/images/atmosphere/03-evening.jpg", alt: "Бар", span: "" },
  { src: "/images/vip/room.jpg", alt: "VIP-комната", span: "" },
] as const;

export const lovableVipBullets = [
  "Отдельная комната",
  "Большой экран",
  "PS5 и актуальные игры",
  "Трансляции",
  "День рождения и частные встречи",
  "Бронь по депозиту",
] as const;

export const lovableMenuTeaser = [
  { title: "Кальяны", img: "/images/menu/hookah.jpg" },
  { title: "Кухня", img: "/images/menu/kitchen.jpg" },
  { title: "Бар", img: "/images/menu/drinks.jpg" },
] as const;

export const lovableReviews = [
  {
    quote:
      "Зашли на коктейль — остались на весь вечер. Бар сильный, кальян ненавязчивый, музыка — ровно такая, чтобы говорить.",
    name: "Анна К.",
    source: "Google",
  },
  {
    quote:
      "Брали VIP на день рождения компании из десяти человек. Свой формат, никто не отвлекал, кухня вынесла отдельно.",
    name: "Михаил Д.",
    source: "Google",
  },
  {
    quote:
      "Спокойное место у воды без пафоса. Видно, что сделано для людей, которые сюда возвращаются.",
    name: "Елена С.",
    source: "Google",
  },
] as const;
