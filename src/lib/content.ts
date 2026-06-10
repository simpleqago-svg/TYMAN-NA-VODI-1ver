export const whyItems = [
  {
    title: "Атмосфера для вечера",
    description:
      "Пространство, где можно спокойно провести время, пообщаться и остаться дольше.",
  },
  {
    title: "Кальяны как часть отдыха",
    description:
      "Не просто услуга, а часть общего впечатления от вечера.",
  },
  {
    title: "Кухня и напитки в одном месте",
    description:
      "Можно не искать отдельный бар или ресторан — всё для вечера уже есть внутри.",
  },
  {
    title: "VIP-комната для компании",
    description:
      "Отдельное пространство для тех, кто хочет провести вечер своим кругом.",
  },
] as const;

export const scenarios = [
  {
    id: "friends",
    title: "Встреча с друзьями",
    description:
      "Кальяны, напитки, кухня — весь вечер в одном месте.",
    image: "/images/venue/company.jpg",
  },
  {
    id: "date",
    title: "Свидание",
    description: "Спокойный свет, музыка, можно поговорить.",
    image: "/images/venue/cocktail.jpg",
  },
  {
    id: "birthday",
    title: "День рождения",
    description: "Стол, кальяны, напитки, бронь заранее.",
    image: "/images/venue/main-hall.jpg",
  },
  {
    id: "daytime",
    title: "День без спешки",
    description: "Днём — кофе и работа, вечером — остаться.",
    image: "/images/venue/lounge-bar.jpg",
  },
] as const;

export const galleryImages = [
  {
    src: "/images/venue/main-hall.jpg",
    alt: "Основной зал с зелёной стеной и бордовой мебелью",
  },
  {
    src: "/images/venue/interior-green.jpg",
    alt: "Интерьер с ребристой зелёной стеной",
  },
  {
    src: "/images/venue/entrance.jpg",
    alt: "Входная зона и ресепшн",
  },
  {
    src: "/images/venue/lounge-bar.jpg",
    alt: "Lounge-зона и барная стойка",
  },
  {
    src: "/images/venue/cocktail.jpg",
    alt: "Авторский коктейль",
  },
  {
    src: "/images/venue/company.jpg",
    alt: "Гости в lounge",
  },
] as const;

export const vipFeatures = [
  "Полностью отдельная комната, изолированная от общего зала",
  "Большой телевизор / экран",
  "PlayStation 5 с актуальными играми",
  "Футбольные матчи и онлайн-трансляции",
  "Подходит для дня рождения и вечера с компанией",
  "Бронирование по депозиту",
] as const;

export const menuCategories = [
  {
    id: "hookah",
    title: "Кальяны",
    description: "Классика, миксы и сезонные варианты",
    image: "/images/venue/interior-green.jpg",
  },
  {
    id: "kitchen",
    title: "Кухня",
    description: "Закуски, горячее и блюда на компанию",
    image: "/images/venue/main-hall.jpg",
  },
  {
    id: "drinks",
    title: "Напитки",
    description: "Коктейли, кофе, чай и безалкогольное",
    image: "/images/venue/cocktail.jpg",
  },
] as const;

export const reviews = [
  {
    text: "Пришли компанией — остались до закрытия. Уютно, вкусно, кальян отличный.",
    author: "Алексей К.",
    initials: "АК",
    source: "Google",
    rating: 5,
    date: "Март 2026",
  },
  {
    text: "VIP-комната идеальна для дня рождения: экран, PS5, никто не мешает.",
    author: "Марина С.",
    initials: "МС",
    source: "Google",
    rating: 5,
    date: "Февраль 2026",
  },
  {
    text: "Брали стол на свидание — тихо, красиво, можно спокойно поговорить.",
    author: "Дмитрий В.",
    initials: "ДВ",
    source: "Google",
    rating: 5,
    date: "Февраль 2026",
  },
  {
    text: "Заехали днём поработать с ноутбуком, вечером остались на кальян.",
    author: "Екатерина Л.",
    initials: "ЕЛ",
    source: "Google",
    rating: 5,
    date: "Январь 2026",
  },
  {
    text: "Отличная атмосфера и сервис. Коктейли и кухня — на уровне.",
    author: "Игорь М.",
    initials: "ИМ",
    source: "Google",
    rating: 5,
    date: "Январь 2026",
  },
  {
    text: "Удобно бронировать заранее. Стол был готов, всё прошло без суеты.",
    author: "Ольга П.",
    initials: "ОП",
    source: "Google",
    rating: 4,
    date: "Декабрь 2025",
  },
  {
    text: "Красивый интерьер, приятный персонал. Вернёмся с друзьями.",
    author: "Никита Р.",
    initials: "НР",
    source: "Google",
    rating: 5,
    date: "Декабрь 2025",
  },
  {
    text: "Хорошее место для вечера у воды — спокойно, стильно, без лишнего шума.",
    author: "Анна Т.",
    initials: "АТ",
    source: "Google",
    rating: 5,
    date: "Ноябрь 2025",
  },
] as const;

export const cateringContent = {
  title: "Кейтеринг и корпоративы",
  description:
    "Организуем выездной формат или приём в lounge: кальяны, кухня, напитки и отдельная зона под вашу компанию.",
  image: "/images/venue/lounge-bar.jpg",
  imageAlt: "Lounge-зона для мероприятий",
  pdfLabel: "Скачать условия (PDF)",
} as const;

export const menuPageSections = [
  {
    id: "hookah",
    title: "Кальяны",
    items: [
      { name: "Классика", price: "от 1 500 ₽", note: "Табак на выбор" },
      { name: "Фруктовая чаша", price: "от 2 200 ₽", note: "Апельсин, грейпфрут, ананас" },
      { name: "Авторский микс", price: "от 1 800 ₽", note: "Миксы от кальянщика" },
      { name: "Premium", price: "от 2 500 ₽", note: "Премиальные табаки" },
    ],
  },
  {
    id: "kitchen",
    title: "Кухня",
    items: [
      { name: "Сет закусок", price: "890 ₽", note: "На компанию" },
      { name: "Бургер Tyman", price: "690 ₽", note: "Говядина, соус, картофель" },
      { name: "Паста", price: "590 ₽", note: "На выбор" },
      { name: "Стейк", price: "1 290 ₽", note: "200 г" },
    ],
  },
  {
    id: "drinks",
    title: "Напитки",
    items: [
      { name: "Авторский коктейль", price: "590 ₽", note: "Классика и сезонное" },
      { name: "Кофе", price: "от 250 ₽", note: "Эспрессо, капучино, лatte" },
      { name: "Чай", price: "от 350 ₽", note: "Китайский и травяной" },
      { name: "Лимонад", price: "390 ₽", note: "Домашний" },
    ],
  },
  {
    id: "desserts",
    title: "Десерты",
    items: [
      { name: "Чизкейк", price: "390 ₽", note: "" },
      { name: "Тирамisu", price: "420 ₽", note: "" },
      { name: "Мороженое", price: "290 ₽", note: "3 шарика" },
      { name: "Фруктовая тарелка", price: "590 ₽", note: "Сезонные фрукты" },
    ],
  },
] as const;
