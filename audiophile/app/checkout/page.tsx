"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  full?: boolean;
};

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const shipping = 50;
  const vat = Math.round(total * 0.2);
  const grandTotal = total + shipping + vat;

  const router = useRouter();
  const createOrder = useMutation(api.orders.createOrder);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    paymentMethod: "e-money",
    cardNumber: "",
    pin: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ CHECKOUT SUBMIT HANDLER WITH CONVEX + EMAIL
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const order = {
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      shipping: {
        address: formData.address,
        city: formData.city,
        country: formData.country,
        zip: formData.zip,
      },
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      })),
      totals: {
        subtotal: total,
        shipping,
        vat,
        grandTotal,
      },
      status: "pending",
      createdAt: Date.now(),
    };

    // ✅ Save Order
    const orderId = await createOrder(order);

    // ✅ Send Confirmation Email
    await fetch("/api/send-confirmation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        orderId,
        items: order.items,
        totals: order.totals,
      }),
    });

    setIsConfirmed(true);
    clearCart();
  };

  const handleClose = () => {
    router.push("/");
    setIsConfirmed(false);
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold uppercase mb-10 tracking-widest">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-[2fr,1fr] gap-12 bg-transparent">
        {/* LEFT SIDE FORM */}
        <div className="bg-white shadow-md rounded-lg p-10 space-y-8">
          <h2 className="uppercase text-[#D87D4A] text-sm tracking-widest font-bold mb-4">
            Billing Details
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
            <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <h2 className="uppercase text-[#D87D4A] text-sm tracking-widest font-bold mt-10 mb-4">
            Shipping Info
          </h2>

          <Input label="Address" name="address" value={formData.address} onChange={handleChange} full />

          <div className="grid sm:grid-cols-2 gap-6">
            <Input label="ZIP Code" name="zip" value={formData.zip} onChange={handleChange} />
            <Input label="City" name="city" value={formData.city} onChange={handleChange} />
            <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
          </div>
        </div>

        {/* SUMMARY */}
        <div className="bg-white shadow-md rounded-lg p-8 h-fit self-start">
          <h2 className="uppercase text-xl font-bold mb-6 tracking-widest">Summary</h2>

          <ul className="space-y-6 max-h-72 overflow-y-auto">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md bg-[#F1F1F1] object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm uppercase">{item.name}</p>
                    <p className="text-gray-500 text-sm">$ {item.price.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-gray-500 font-bold text-sm">x{item.quantity}</p>
              </li>
            ))}
          </ul>

          <div className="space-y-3 mt-10 text-sm tracking-wide">
            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Total</span>
              <span className="font-bold text-lg">$ {total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">Shipping</span>
              <span className="font-bold text-lg">$ {shipping}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 uppercase">VAT (Included)</span>
              <span className="font-bold text-lg">$ {vat.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mt-4">
              <span className="text-gray-500 uppercase">Grand Total</span>
              <span className="font-bold text-lg text-[#D87D4A]">$ {grandTotal.toLocaleString()}</span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-semibold uppercase py-4 mt-8 tracking-widest rounded-md transition-all"
            >
              Continue & Pay
            </button>
          </div>
        </div>
      </form>

      {/* CONFIRMATION MODAL */}
      {isConfirmed && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-10 max-w-md w-full mx-4">
            <Image
              src="/assets/checkout/icon-order-confirmation.svg"
              alt="Confirmation"
              width={64}
              height={64}
              className="mb-6"
            />
            <h2 className="text-2xl font-bold uppercase mb-2">
              Thank You<br />for your order
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              You will receive an email confirmation shortly.
            </p>

            <Link
              href="/"
              onClick={handleClose}
              className="block w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white text-center uppercase font-semibold py-4 mt-8 rounded-md transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

/* INPUT COMPONENT */
function Input({ label, name, value, onChange, full = false }: InputProps) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-[#D87D4A]"
        required
      />
    </div>
  );
}
