export const siteConfig = {
  name: "Tyman na Vodi",
  tagline: "Lounge-пространство для вечера у воды",
  description:
    "Атмосферное lounge-пространство: кальяны, кухня, напитки и VIP-комната для вашего вечера.",
  address: "Адрес будет добавлен",
  phone: "+7 (000) 000-00-00",
  instagram: "https://instagram.com/tyman_na_vodi",
  instagramHandle: "@tyman_na_vodi",
  hours: {
    weekdays: "12:00 — 00:00",
    weekend: "12:00 — 02:00",
    label: "Ежедневно",
  },
  booking: {
    whatsapp: "79000000000",
    telegram: "tyman_na_vodi",
  },
  catering: {
    pdfUrl: "/documents/catering-conditions.pdf",
    conditionsPageUrl: "/catering/conditions",
    /** Бот отдаёт PDF после /start — замените на реального бота */
    telegramBotUrl: "https://t.me/tyman_na_vodi?start=catering_pdf",
    /** Куда уходит заявка (SMS/WhatsApp/Telegram на стороне Tymana) */
    notifyPhone: "+79000000000",
    notifyEmail: "catering@tyman-na-vodi.ru",
  },
  menu: {
    /** Замените на финальный PDF-файл меню */
    pdfUrl: "/documents/menu.pdf",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.0!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru",
} as const;
