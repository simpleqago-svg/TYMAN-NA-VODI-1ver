import { siteConfig } from "@/lib/site-config";

export type CateringRequestPayload = {
  name: string;
  email?: string;
  phone?: string;
  telegram?: string;
  comment?: string;
};

export type CateringSubmitResult =
  | { flow: "email"; message: string }
  | { flow: "thanks"; redirect: string };

export function validateCateringRequest(payload: CateringRequestPayload): string | null {
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const telegram = payload.telegram?.trim();

  if (!name) return "Укажите имя";
  if (!email && !phone && !telegram) {
    return "Укажите email, телефон или Telegram";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Некорректный email";
  }
  return null;
}

export async function notifyCateringTeam(payload: CateringRequestPayload) {
  const lines = [
    "Новая заявка: кейтеринг / корпоратив",
    `Имя: ${payload.name}`,
    payload.email ? `Email: ${payload.email}` : null,
    payload.phone ? `Телефон: ${payload.phone}` : null,
    payload.telegram ? `Telegram: ${payload.telegram}` : null,
    payload.comment ? `Комментарий: ${payload.comment}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  console.info("[catering:notify]", lines);

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CATERING_CHAT_ID;

  if (botToken && chatId) {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines }),
    });
  }

  return lines;
}

export async function sendCateringPdfToGuest(email: string, name: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CATERING_EMAIL_FROM ?? "Tyman na Vodi <onboarding@resend.dev>";

  const pdfUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://tyman-na-vodi.ru"}${siteConfig.catering.pdfUrl}`;

  console.info("[catering:email]", { to: email, name, pdfUrl });

  if (!apiKey) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "Условия кейтеринга — Tyman na Vodi",
      html: `
        <p>Здравствуйте, ${name}!</p>
        <p>Спасибо за интерес к кейтерингу и корпоративам Tyman na Vodi.</p>
        <p><a href="${pdfUrl}">Скачать PDF с условиями</a></p>
        <p>Мы свяжемся с вами для уточнения деталей.</p>
      `,
    }),
  });

  return response.ok;
}
