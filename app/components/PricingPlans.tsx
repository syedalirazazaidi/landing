type Plan = {
  name: string;
  target: string;
  price: string;
  period: string;
  features: { text: string; muted?: boolean }[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic Plan",
    target: "Startups or small businesses",
    price: "$19",
    period: "/ month",
    features: [
      { text: "Access to basic financial tracking tools" },
      { text: "Monthly income and expense reports" },
      { text: "Basic cash flow management" },
      { text: "Tax calculation assistance" },
      { text: "Basic invoicing features" },
      { text: "Real-time transaction updates", muted: true },
      { text: "Regular software updates", muted: true },
    ],
  },
  {
    name: "Premium Plan",
    target: "Growing businesses",
    price: "$39",
    period: "/ month",
    highlighted: true,
    features: [
      { text: "Access to basic financial tracking tools" },
      { text: "Monthly income and expense reports" },
      { text: "Basic cash flow management" },
      { text: "Tax calculation assistance" },
      { text: "Basic invoicing features" },
      { text: "Real-time transaction updates" },
      { text: "Regular software updates", muted: true },
    ],
  },
  {
    name: "Enterprise Plan",
    target: "Large organizations",
    price: "$99",
    period: "/ month",
    features: [
      { text: "Access to basic financial tracking tools" },
      { text: "Monthly income and expense reports" },
      { text: "Basic cash flow management" },
      { text: "Tax calculation assistance" },
      { text: "Basic invoicing features" },
      { text: "Real-time transaction updates" },
      { text: "Regular software updates" },
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-white px-4 pb-20 pt-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Find the Right
          <br />
          Plan for Your Journey
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isHighlight = plan.highlighted;
            return (
              <div
                key={plan.name}
                className={`flex h-full flex-col rounded-[28px] border ${
                  isHighlight
                    ? "border-transparent bg-[#385090] text-white shadow-[0_20px_60px_rgba(56,80,144,0.35)]"
                    : "border-[#E9EAED] bg-white text-slate-900 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
                } px-6 py-8 md:px-8`}
              >
                {/* Plan badge */}
                <div
                  className={`inline-flex self-start rounded-full px-4 py-2 text-sm font-semibold ${
                    isHighlight
                      ? "bg-white text-[#385090]"
                      : "bg-[#f2f4f7] text-[#385090]"
                  }`}
                >
                  {plan.name}
                </div>

                <p
                  className={`mt-4 text-sm font-medium ${
                    isHighlight ? "text-white/85" : "text-slate-600"
                  }`}
                >
                  {plan.target}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-3xl font-bold md:text-4xl">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-1 text-sm ${
                      isHighlight ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <div
                  className={`my-6 h-px ${
                    isHighlight ? "bg-white/30" : "bg-[#E9EAED]"
                  }`}
                />

                <div className="mb-4 text-base font-semibold">
                  Features include:
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span
                        className={`mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold ${
                          isHighlight
                            ? "bg-white text-[#385090]"
                            : feature.muted
                            ? "bg-slate-200 text-slate-500"
                            : "bg-[#385090] text-white"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`leading-relaxed ${
                          isHighlight
                            ? feature.muted
                              ? "text-white/70"
                              : "text-white"
                            : feature.muted
                            ? "text-slate-500"
                            : "text-slate-800"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full rounded-full px-4 py-3 text-sm font-semibold ${
                    isHighlight
                      ? "bg-white text-[#385090] hover:bg-white/90"
                      : "bg-white text-slate-900 ring-1 ring-[#E9EAED] hover:bg-slate-50"
                  }`}
                >
                  Choose This Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

