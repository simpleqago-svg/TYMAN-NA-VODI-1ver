# Tyman na Vodi

Одностраничный лендинг lounge-заведения с отдельной страницей меню.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## Что уже есть

- Hero, «Почему сюда», атмосфера + сценарии, VIP, обзор меню, отзывы, триггер бронирования, футер с картой
- Sticky-кнопка «Забронировать стол» на мобилке
- Модальное окно бронирования → WhatsApp
- Страница `/menu`

## Что заменить

Все настройки в `src/lib/site-config.ts`:

- адрес, телефон, Instagram
- WhatsApp / Telegram для бронирования
- ссылка на Google Maps embed

Контент и placeholder-меню — в `src/lib/content.ts`.

Фото сейчас с Unsplash — замените на свои в компонентах секций.

## Деплой

```bash
npm run build
```

Подходит для [Vercel](https://vercel.com) — бесплатный хостинг.
