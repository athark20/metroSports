import { NextResponse } from "next/server";

export type OrderItem = {
  slug: string;
  name: string;
  brand: string;
  qty: number;
  price: number;
};

export type OrderPayload = {
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    notes?: string;
  };
  items: OrderItem[];
  subtotal: number;
};

// In-memory order log (resets on restart). Swap this for a DB / email / webhook
// when you're ready — the shape is already correct.
const ORDERS: Array<OrderPayload & { id: string; createdAt: string }> = [];

function orderId() {
  const n = (ORDERS.length + 1).toString().padStart(4, "0");
  return `MS-${n}`;
}

export async function POST(req: Request) {
  let body: OrderPayload;
  try {
    body = (await req.json()) as OrderPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { customer, items } = body ?? {};
  if (!customer?.name || !customer?.phone || !customer?.address) {
    return NextResponse.json(
      { error: "Name, phone and address are required." },
      { status: 422 },
    );
  }
  if (!items || items.length === 0) {
    return NextResponse.json({ error: "Your bag is empty." }, { status: 422 });
  }

  const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0);
  const order = {
    id: orderId(),
    createdAt: new Date().toISOString(),
    ...body,
    subtotal,
  };
  ORDERS.push(order);

  // Surface the order in server logs so you can see it land while testing.
  console.log("📦 New MetroSports order:", JSON.stringify(order, null, 2));

  return NextResponse.json({ ok: true, orderId: order.id });
}
