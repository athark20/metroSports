"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { SITE } from "@/lib/site";
import { CheckIcon, ArrowRightIcon, WhatsAppIcon, ShieldIcon } from "@/components/icons";

type Status = "idle" | "submitting" | "done" | "error";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", required: true, autoComplete: "name", half: false },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", half: true },
  { name: "email", label: "Email", type: "email", required: false, autoComplete: "email", half: true },
  { name: "address", label: "Address", type: "text", required: true, autoComplete: "street-address", half: false },
  { name: "city", label: "City", type: "text", required: true, autoComplete: "address-level2", half: true },
  { name: "state", label: "State", type: "text", required: true, autoComplete: "address-level1", half: true },
  { name: "pincode", label: "PIN code", type: "text", required: true, autoComplete: "postal-code", half: true },
] as const;

export default function CheckoutPage() {
  const { items, subtotal, count, clear } = useCart();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const [form, setForm] = useState<Record<string, string>>({});

  function update(name: string, value: string) {
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: form.name ?? "",
            email: form.email ?? "",
            phone: form.phone ?? "",
            address: form.address ?? "",
            city: form.city ?? "",
            state: form.state ?? "",
            pincode: form.pincode ?? "",
            notes: form.notes ?? "",
          },
          items: items.map((i) => ({
            slug: i.slug,
            name: i.name,
            brand: i.brand,
            qty: i.qty,
            price: i.price,
          })),
          subtotal,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Something went wrong.");
      setOrderId(data.orderId);
      setStatus("done");
      clear();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  // ── Order confirmed ──
  if (status === "done") {
    const waText = encodeURIComponent(
      `Hi MetroSports, I just placed order ${orderId}. Please confirm the details.`,
    );
    return (
      <div className="container-wide py-20">
        <div className="card-surface mx-auto grid max-w-lg place-items-center px-6 py-14 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-pitch text-paper">
            <CheckIcon className="h-8 w-8" />
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold uppercase tracking-tight">
            Order placed!
          </h1>
          <p className="mt-2 text-ink-soft">
            Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Your order reference is
          </p>
          <p className="mt-1 font-display text-2xl font-bold text-pitch">{orderId}</p>
          <p className="mt-3 max-w-sm text-sm text-ink-soft">
            We&apos;ll call you on {form.phone} shortly to confirm and arrange delivery &amp; payment.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${waText}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-6 px-6 py-3.5 text-sm"
          >
            <WhatsAppIcon className="h-5 w-5" /> Confirm on WhatsApp
          </a>
          <Link href="/shop" className="btn btn-ghost mt-2 px-6 py-2.5 text-xs">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  // ── Empty bag ──
  if (count === 0) {
    return (
      <div className="container-wide py-20">
        <div className="mx-auto grid max-w-lg place-items-center text-center">
          <h1 className="font-display text-3xl font-bold uppercase tracking-tight">
            Nothing to check out
          </h1>
          <p className="mt-2 text-ink-soft">Your bag is empty.</p>
          <Link href="/shop" className="btn btn-primary mt-6 px-7 py-3.5 text-sm">
            Shop cricket bats <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  // ── Checkout form ──
  return (
    <div className="container-wide py-10 md:py-14">
      <h1 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        Checkout
      </h1>
      <p className="mt-2 text-ink-soft">
        Enter your details — we&apos;ll confirm by phone. Pay on delivery or via the link we send.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <div>
          <h2 className="eyebrow text-ink-mute">Delivery details</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {FIELDS.map((field) => (
              <div key={field.name} className={field.half ? "col-span-1" : "col-span-2"}>
                <label
                  htmlFor={field.name}
                  className="mb-1.5 block text-sm font-medium text-ink"
                >
                  {field.label}
                  {field.required && <span className="text-danger"> *</span>}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  value={form[field.name] ?? ""}
                  onChange={(e) => update(field.name, e.target.value)}
                  inputMode={
                    field.name === "phone" || field.name === "pincode" ? "numeric" : undefined
                  }
                  className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] outline-none transition-colors focus:border-pitch focus:ring-2 focus:ring-pitch/20"
                />
              </div>
            ))}
            <div className="col-span-2">
              <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-ink">
                Order notes <span className="text-ink-mute">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Preferred weight, grip colour, knock-in request…"
                value={form.notes ?? ""}
                onChange={(e) => update("notes", e.target.value)}
                className="w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-[15px] outline-none transition-colors focus:border-pitch focus:ring-2 focus:ring-pitch/20"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2.5 rounded-xl bg-cream px-4 py-3 text-sm text-ink-soft">
            <ShieldIcon className="h-5 w-5 shrink-0 text-pitch" />
            Your details are only used to process this order. No spam, ever.
          </div>
        </div>

        {/* summary */}
        <aside className="lg:sticky lg:top-20 lg:h-fit">
          <div className="card-surface bg-cream p-6">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">
              Your order
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-3">
                  <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-willow/40">
                    <Image src={item.image} alt={item.name} fill sizes="56px" className="object-cover" />
                    <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-pitch px-1 text-[11px] font-bold text-paper">
                      {item.qty}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <p className="text-[15px] font-display font-semibold leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs text-ink-mute">{item.brand}</p>
                  </div>
                  <span className="self-center text-sm font-semibold tabular-nums">
                    {formatPrice(item.price * item.qty)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-2 border-t border-line pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-ink-soft">Subtotal</span>
                <span className="font-medium tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-soft">Shipping</span>
                <span className="font-medium">Confirmed by phone</span>
              </div>
            </div>
            <div className="mt-3 flex items-baseline justify-between border-t border-line pt-3">
              <span className="font-display text-base font-bold uppercase">Total</span>
              <span className="font-display text-2xl font-bold tabular-nums">
                {formatPrice(subtotal)}
              </span>
            </div>

            {status === "error" && (
              <p role="alert" className="mt-4 rounded-lg bg-danger/10 px-3 py-2 text-sm text-danger">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-primary mt-5 w-full py-4 text-sm disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Placing order…" : "Place order"}
              {status !== "submitting" && <ArrowRightIcon className="h-4 w-4" />}
            </button>
            <p className="mt-3 text-center text-xs text-ink-mute">
              By placing this order you agree to be contacted about it.
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
