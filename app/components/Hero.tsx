export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white mb-20"
      style={{ minHeight: "60vh" }}
    >
      <div
        className="absolute inset-0 bg-[url('/Frame.png')] bg-cover bg-center"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-4 text-center">
        {/* Small badge with avatars + text */}
        <div className="mb-5 inline-flex items-center gap-3 mt-28 border border-[#E9EAED] rounded-full bg-white/10 px-4 py-1 backdrop-blur">
          <div className="flex -space-x-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-pink-400/90 text-xs font-semibold">
              A
            </span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-indigo-400/90 text-xs font-semibold">
              B
            </span>
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-sky-400/90 text-xs font-semibold">
              C
            </span>
          </div>
          <p className="text-xs font-medium text-black">
            and 1,382+ others have tried
          </p>
        </div>

        <h1 className="mb-4 max-w-2xl text-black text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
          Convert Your Store
          <br />
          into a <span className="text-black">Marketplace</span>
        </h1>

        <p className="mb-8 max-w-xl text-sm text-black md:text-base">
          Manage sellers, orders, fulfillment, and payouts <br/>we handle everything but the product.
        </p>
      </div>
    </section>
  );
}

