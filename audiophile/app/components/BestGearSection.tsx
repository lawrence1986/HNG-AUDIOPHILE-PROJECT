export default function BestGearSection() {
  return (
    <section className="bg-gray-50 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-16">
      <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
          Bringing You the <span className="text-[#D87D4A]">Best</span> Audio Gear
        </h2>
        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Located at the heart of Port Harcourt, Audiophile offers high-end headphones, speakers, and audio accessories designed to deliver studio-quality sound.
        </p>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="Best Audio Gear"
          className="rounded-lg w-full max-w-sm md:max-w-md"
        />
      </div>
    </section>
  );
}
