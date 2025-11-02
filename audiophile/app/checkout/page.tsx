"use client";

import { useCart } from "@/components/CartContext";
import CartItem from "@/components/CartItem";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    payment: "e-money",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsModalOpen(true);
    clearCart();
  };

  return (
    <main className="bg-[#f2f2f2] py-20 px-6 md:px-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto grid md:grid-cols-[2fr,1fr] gap-10"
      >
        {/* Checkout Form */}
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-10 uppercase tracking-wider">
            Checkout
          </h1>

          {/* Billing Details */}
          <section className="mb-10">
            <h2 className="text-[#D87D4A] text-sm font-semibold uppercase tracking-widest mb-4">
              Billing Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Name" name="name" value={form.name} onChange={handleChange} />
              <Input
                label="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <Input
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* Shipping Info */}
          <section className="mb-10">
            <h2 className="text-[#D87D4A] text-sm font-semibold uppercase tracking-widest mb-4">
              Shipping Info
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                full
              />
              <Input
                label="ZIP Code"
                name="zip"
                value={form.zip}
                onChange={handleChange}
              />
              <Input
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
              <Input
                label="Country"
                name="country"
                value={form.country}
                onChange={handleChange}
              />
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h2 className="text-[#D87D4A] text-sm font-semibold uppercase tracking-widest mb-4">
              Payment Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-2 flex flex-col gap-3">
                <label className="text-sm font-semibold">Payment Method</label>
                <div className="flex gap-4">
                  <Radio
                    label="e-Money"
                    name="payment"
                    checked={form.payment === "e-money"}
                    onChange={() => setForm((p) => ({ ...p, payment: "e-money" }))}
                  />
                  <Radio
                    label="Cash on Delivery"
                    name="payment"
                    checked={form.payment === "cash"}
                    onChange={() => setForm((p) => ({ ...p, payment: "cash" }))}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg p-8 h-fit">
          <h2 className="text-lg font-bold mb-6 uppercase">Summary</h2>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <CartItem key={item.slug} {...item} />
            ))}
          </div>

          <div className="flex justify-between text-sm mb-2">
            <p className="text-gray-500 uppercase">Total</p>
            <p className="font-bold">${total.toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <p className="text-gray-500 uppercase">Shipping</p>
            <p className="font-bold">$50</p>
          </div>
          <div className="flex justify-between text-sm mb-6">
            <p className="text-gray-500 uppercase">VAT (Included)</p>
            <p className="font-bold">${(total * 0.2).toFixed(0)}</p>
          </div>
          <div className="flex justify-between text-sm mb-6">
            <p className="text-gray-500 uppercase">Grand Total</p>
            <p className="font-bold text-[#D87D4A]">
              ${(total + 50).toLocaleString()}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D87D4A] text-white py-3 font-bold rounded-md uppercase tracking-widest hover:bg-[#fbaf85]"
          >
            Continue & Pay
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 max-w-md w-full text-left relative">
      {/* Success Icon */}
      <div className="bg-[#D87D4A] rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="4"
            d="M6 14l4.243 4.243L18.485 10"
          />
        </svg>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
        Thank you <br /> for your order
      </h2>
      <p className="text-gray-600 mb-6">
        You will receive an email confirmation shortly.
      </p>

      {/* Order Summary Preview */}
      <div className="bg-[#f1f1f1] rounded-lg overflow-hidden mb-6">
        <div className="flex flex-col md:flex-row">
          {/* Left: Item Summary */}
          <div className="flex-1 bg-white p-6 rounded-t-lg md:rounded-tr-none md:rounded-bl-lg">
            {cart.length > 0 && (
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={cart[0].image}
                    alt={cart[0].name}
                    className="w-12 h-12 rounded-lg bg-gray-100"
                  />
                  <div>
                    <p className="font-bold text-sm text-black">
                      {cart[0].name.split(" ")[0]}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${cart[0].price.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 font-semibold">
                  x{cart[0].quantity}
                </p>
              </div>
            )}

            {cart.length > 1 && (
              <p className="text-center text-gray-500 text-sm font-medium">
                and {cart.length - 1} other item
                {cart.length > 2 ? "s" : ""}
              </p>
            )}
          </div>

          {/* Right: Total */}
          <div className="bg-black text-white flex flex-col justify-center items-start p-6 md:w-1/2 rounded-b-lg md:rounded-bl-none md:rounded-tr-lg">
            <p className="uppercase text-sm text-gray-400 mb-1">Grand Total</p>
            <p className="text-lg font-bold">
              ${(total + 50).toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <Link href="/">
        <button
          onClick={() => setIsModalOpen(false)}
          className="bg-[#D87D4A] text-white w-full py-3 rounded-md font-bold uppercase tracking-widest hover:bg-[#fbaf85]"
        >
          Back to Home
        </button>
      </Link>
    </div>
  </div>
)}


/* Helper components */
function Input({
  label,
  name,
  value,
  onChange,
  full = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  full?: boolean;
}) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
      />
    </div>
  );
}

function Radio({
  label,
  name,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  checked: boolean;
  onChange: any;
}) {
  return (
    <label className="flex items-center gap-3 border border-gray-300 rounded-md py-2 px-4 cursor-pointer hover:border-[#D87D4A] w-full">
      <input type="radio" name={name} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}
