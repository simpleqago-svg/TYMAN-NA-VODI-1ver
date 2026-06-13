import { NextResponse } from "next/server";
import {
  notifyCateringTeam,
  sendCateringPdfToGuest,
  validateCateringRequest,
  type CateringRequestPayload,
} from "@/lib/catering";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CateringRequestPayload;

    const error = validateCateringRequest(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const payload: CateringRequestPayload = {
      name: body.name.trim(),
      email: body.email?.trim() || undefined,
      phone: body.phone?.trim() || undefined,
      telegram: body.telegram?.trim() || undefined,
      comment: body.comment?.trim() || undefined,
    };

    await notifyCateringTeam(payload);

    if (payload.email) {
      await sendCateringPdfToGuest(payload.email, payload.name);

      return NextResponse.json({
        flow: "email",
        message:
          "Заявка принята. PDF с условиями отправлен на ваш email — проверьте входящие и спам.",
      });
    }

    return NextResponse.json({
      flow: "thanks",
      redirect: "/catering/thanks",
    });
  } catch {
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 500 },
    );
  }
}
