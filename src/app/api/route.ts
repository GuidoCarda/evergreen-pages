import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

export async function GET(request: Request) {
  return new Response("Hello world");
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const pickupData = formData.get("pickup-date");

  if (!name || !email || !pickupData) {
    return new Response("Complete all the form fields", { status: 400 });
  }
  const reserveId = Math.floor(Math.random() * 10000);
  console.log("Sending reserve id by email...");

  return new Response(JSON.stringify(reserveId));
}
