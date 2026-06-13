/** Hero — профессиональные кадры из Content Foto */
export const heroSlides = [
  {
    id: "464A8790",
    word: "вечера",
    image: "/images/hero/464A8790.jpg",
    alt: "Живая музыка и вечерняя атмосфера в lounge",
    objectPosition: "center center",
  },
  {
    id: "464A8840",
    word: "компании",
    image: "/images/hero/464A8840.jpg",
    alt: "Гости в lounge — встреча с компанией",
    objectPosition: "center 35%",
  },
  {
    id: "464A9264",
    word: "свидания",
    image: "/images/hero/464A9264.jpg",
    alt: "Пара за коктейлями в lounge",
    objectPosition: "center 40%",
  },
  {
    id: "464A9580",
    word: "отдыха",
    image: "/images/hero/464A9580.jpg",
    alt: "Тёплый вечер с друзьями",
    objectPosition: "center 45%",
  },
  {
    id: "IMG_7620",
    word: "разговора",
    image: "/images/hero/IMG_7620.jpg",
    alt: "Спокойный разговор за столом с кальяном",
    objectPosition: "center center",
  },
] as const;

export const heroCycleWords = heroSlides.map((slide) => slide.word);

/** @deprecated use heroSlides — оставлено для совместимости */
export const heroScenarios = heroSlides.map((slide) => ({
  word: slide.word,
  image: slide.image,
  alt: slide.alt,
}));

/** Фото заведения для остальных блоков — этап 2+ */
export const venueImages = {
  barGreen: {
    src: "/images/venue/bar-green.jpg",
    alt: "Бар с зелёной рейкой",
  },
  barBartender: {
    src: "/images/venue/bar-bartender.jpg",
    alt: "Барная стойка",
  },
  barNeon: {
    src: "/images/venue/bar-neon.jpg",
    alt: "Неоновая подсветка бара",
  },
  terraceSummer: {
    src: "/images/venue/terrace-summer.jpg",
    alt: "Летняя терраса с напитками",
  },
  fruitPlatter: {
    src: "/images/venue/fruit-platter.jpg",
    alt: "Фруктовая тарелка",
  },
  cocktailsSmoke: {
    src: "/images/venue/cocktails-smoke.jpg",
    alt: "Авторские коктейли",
  },
} as const;

export const whyItems = [
  {
    id: "atmosphere",
    title: "Атмосфера для вечера",
    description:
      "Пространство, где можно спокойно провести время, пообщаться и остаться дольше.",
    images: [
      { src: "/images/why/atmosphere.jpg", alt: "Тёплый вечер в lounge" },
      { src: "/images/why/atmosphere-2.jpg", alt: "Живая музыка в зале" },
      { src: "/images/why/atmosphere-3.jpg", alt: "Гости в lounge" },
      { src: "/images/why/atmosphere-4.jpg", alt: "Вечерняя атмосфера" },
    ],
  },
  {
    id: "hookah",
    title: "Кальяны как часть отдыха",
    description:
      "Не просто услуга, а часть общего впечатления от вечера.",
    images: [
      { src: "/images/why/hookah.jpg", alt: "Кальянщик готовит кальян" },
      { src: "/images/why/hookah-2.jpg", alt: "Кальян за столом" },
      { src: "/images/why/hookah-3.jpg", alt: "Неоновая подсветка бара" },
    ],
  },
  {
    id: "kitchen",
    title: "Кухня и напитки в одном месте",
    description:
      "Можно не искать отдельный бар или ресторан — всё для вечера уже есть внутри.",
    images: [
      { src: "/images/why/kitchen-drinks.jpg", alt: "Бармены готовят коктейли" },
      { src: "/images/why/kitchen-2.jpg", alt: "Сырная тарелка" },
      { src: "/images/why/kitchen-3.jpg", alt: "Барная стойка с бокалами" },
    ],
  },
  {
    id: "vip",
    title: "VIP-комната для компании",
    description:
      "Отдельное пространство для тех, кто хочет провести вечер своим кругом.",
    images: [
      { src: "/images/why/vip-company.jpg", alt: "Компания в lounge" },
      { src: "/images/why/vip-2.jpg", alt: "Встреча за столом" },
    ],
  },
] as const;

export const atmosphereGallery = [
  {
    id: "party",
    src: "/images/atmosphere/01-party.jpg",
    alt: "Гости в lounge — наполненный зал и вечерняя энергия",
    mood: "Жизнь зала",
  },
  {
    id: "live-music",
    src: "/images/atmosphere/02-live-music.jpg",
    alt: "Живая музыка и гости за столами",
    mood: "Музыка и компания",
  },
  {
    id: "evening",
    src: "/images/atmosphere/03-evening.jpg",
    alt: "Тёплый вечер с друзьями",
    mood: "Тёплый свет",
  },
  {
    id: "conversation",
    src: "/images/atmosphere/04-conversation.jpg",
    alt: "Разговор за столом с кальяном",
    mood: "Разговор",
  },
  {
    id: "bar",
    src: "/images/atmosphere/05-bar.jpg",
    alt: "Бармены готовят коктейли",
    mood: "Напитки",
  },
  {
    id: "hookah",
    src: "/images/atmosphere/06-hookah.jpg",
    alt: "Кальянщик готовит кальян",
    mood: "Кальян",
  },
  {
    id: "company",
    src: "/images/atmosphere/07-company.jpg",
    alt: "Компания за коктейлями",
    mood: "Отдых",
  },
  {
    id: "food",
    src: "/images/atmosphere/08-food.jpg",
    alt: "Сырная тарелка на столе",
    mood: "Кухня",
  },
  {
    id: "performance",
    src: "/images/atmosphere/09-performance.jpg",
    alt: "Живое выступление",
    mood: "Событие",
  },
  {
    id: "mood",
    src: "/images/atmosphere/10-mood.jpg",
    alt: "Вечерняя атмосфера lounge",
    mood: "Настроение",
  },
] as const;

export const scenarios = [
  {
    id: "friends",
    title: "Встреча с друзьями",
    description:
      "Кальяны, напитки, кухня и атмосфера, в которой удобно провести весь вечер в одном месте.",
    image: "/images/atmosphere/02-live-music.jpg",
    imageAlt: "Компания друзей за столом с кальянами",
    galleryId: "live-music",
  },
  {
    id: "date",
    title: "Свидание",
    description:
      "Спокойный свет, приятная музыка и пространство, где можно нормально поговорить.",
    image: "/images/atmosphere/07-company.jpg",
    imageAlt: "Пара за коктейлями в lounge",
    galleryId: "company",
  },
  {
    id: "birthday",
    title: "День рождения",
    description:
      "Формат для компании: стол, кальяны, напитки, кухня и возможность заранее всё забронировать.",
    image: "/images/atmosphere/01-party.jpg",
    imageAlt: "Праздничная атмосфера в зале",
    galleryId: "party",
  },
  {
    id: "daytime",
    title: "День без спешки",
    description:
      "Можно приехать днём, поработать, выпить кофе или чай и остаться на вечер.",
    image: "/images/atmosphere/04-conversation.jpg",
    imageAlt: "Спокойная посадка за столом",
    galleryId: "conversation",
  },
] as const;

/** @deprecated use atmosphereGallery */
export const galleryImages = atmosphereGallery.map((item) => ({
  src: item.src,
  alt: item.alt,
}));

export const vipFeatures = [
  "Полностью отдельная комната, изолированная от общего зала",
  "Большой телевизор / экран",
  "PlayStation 5",
  "Актуальные игры",
  "Футбольные матчи и онлайн-трансляции",
  "Подходит для дня рождения",
  "Подходит для вечера с компанией",
  "Бронирование по депозиту",
] as const;

export const vipContent = {
  title: "VIP-комната для вашей компании",
  description:
    "Полностью изолированное пространство, где можно провести вечер отдельно от общего зала: отметить день рождения, посмотреть футбольный матч или онлайн-трансляцию на большом экране, поиграть в PlayStation 5 и спокойно провести время своим кругом.",
  visuals: [
    {
      id: "room",
      label: "Отдельная комната",
      caption: "Своё пространство — без посторонних в общем зале",
      src: "/images/vip/room.jpg",
      alt: "Компания проводит вечер в lounge",
    },
    {
      id: "screen",
      label: "Большой экран",
      caption: "Матч, трансляция или фильм — на большом экране",
      src: "/images/vip/screen.jpg",
      alt: "Зал с экраном",
    },
    {
      id: "ps5",
      label: "PlayStation 5",
      caption: "Игры и вечер с друзьями в приватном формате",
      src: "/images/vip/company.jpg",
      alt: "Компания за столом",
    },
  ],
} as const;

export const menuPreviewContent = {
  label: "Меню",
  title: "Всё для полноценного отдыха",
  description:
    "Кальяны, кухня и напитки — в одном месте. Здесь только обзор категорий, полное меню на отдельной странице.",
  ctaLabel: "Посмотреть меню",
} as const;

export const menuCategories = [
  {
    id: "hookah",
    title: "Кальяны",
    description: "Классика, авторские миксы и сезонные варианты",
    image: "/images/menu/hookah.jpg",
    imageAlt: "Кальянщик готовит кальян",
  },
  {
    id: "kitchen",
    title: "Кухня",
    description: "Закуски, горячее и блюда на компанию",
    image: "/images/menu/kitchen.jpg",
    imageAlt: "Блюда на столе",
  },
  {
    id: "drinks",
    title: "Напитки",
    description: "Коктейли, кофе, чай и безалкогольное",
    image: "/images/menu/drinks.jpg",
    imageAlt: "Бармены готовят напитки",
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
] as const;

export const cateringContent = {
  label: "Кейтеринг и корпоративы",
  title: "Кейтеринг и корпоративы",
  description:
    "Организуем выездной формат или приём в lounge: кальяны, кухня, напитки и отдельная зона под вашу компанию. Оставьте заявку — пришлём условия и свяжемся для деталей.",
  image: "/images/catering/corporate.jpg",
  imageAlt: "Корпоративный вечер в lounge",
  pdfLabel: "Ознакомиться с условиями",
  pdfDownloadLabel: "Скачать PDF",
  telegramLabel: "Получить в Telegram",
  formTitle: "Заявка на кейтеринг / корпоратив",
  formHint:
    "Укажите email — отправим PDF на почту. Без email: телефон или Telegram, PDF на странице «Спасибо» или через бота.",
} as const;

export const bookingTriggerContent = {
  title: "Лучше бронировать заранее",
  subtitle: "Ограниченное количество мест",
  ctaLabel: "Забронировать стол",
  contactsLabel: "Контакты и адрес",
} as const;

export const sectionActions = {
  hero: { href: "#why", label: "Почему сюда" },
  why: {
    hint: "Посмотрите, как выглядит вечер в lounge.",
    href: "#atmosphere",
    label: "Смотреть атмосферу",
  },
  atmosphere: {
    hint: "Нужна приватность на компанию или праздник?",
    href: "#vip",
    label: "VIP-комната",
  },
  vip: {
    hint: "Хотите заранее выбрать, что заказать?",
    href: "#menu-preview",
    label: "Посмотреть меню",
  },
  reviews: {
    hint: "Планируете мероприятие или корпоратив?",
    href: "#catering",
    label: "Кейтеринг и корпоративы",
  },
  booking: { href: "#contacts", label: "Контакты и адрес" },
} as const;

export const menuPageContent = {
  label: "Меню",
  title: "Меню",
  description:
    "Кальяны, кухня, напитки и десерты — ознакомьтесь перед визитом. Удобный PDF или список ниже.",
  pdfOpenLabel: "Открыть PDF",
  pdfDownloadLabel: "Скачать PDF",
  pdfNote: "Цены ориентировочные. Актуальное наличие уточняйте у персонала.",
  backLabel: "На главную",
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
