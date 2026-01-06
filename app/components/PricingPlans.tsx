export default function PricingPlans() {
  const plans = [
    {
      name: "Basic Plan",
      target: "Startups or small businesses",
      price: "$19",
      period: "/ month",
      features: [
        "Access to basic financial tracking tools",
        "Monthly income and expense reports",
        "Basic cash flow management",
        "Tax calculation assistance",
        "Basic invoicing features",
        "Real-time transaction updates",
        "Regular software updates"
      ],
      highlighted: false
    },
    {
      name: "Premium Plan",
      target: "Growing businesses",
      price: "$39",
      period: "/ month",
      features: [
        "Access to basic financial tracking tools",
        "Monthly income and expense reports",
        "Basic cash flow management",
        "Tax calculation assistance",
        "Basic invoicing features",
        "Real-time transaction updates",
        "Regular software updates"
      ],
      highlighted: true
    },
    {
      name: "Enterprise Plan",
      target: "Large organizations",
      price: "$99",
      period: "/ month",
      features: [
        "Access to basic financial tracking tools",
        "Monthly income and expense reports",
        "Basic cash flow management",
        "Tax calculation assistance",
        "Basic invoicing features",
        "Real-time transaction updates",
        "Regular software updates"
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-slate-800 mb-12">
          Find the Right Plan for Your Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-[#385090] text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              <div
                className={`text-sm font-semibold mb-2 ${
                  plan.highlighted ? "text-blue-200" : "text-[#385090]"
                }`}
              >
                {plan.name}
              </div>

              <p
                className={`text-sm mb-4 ${
                  plan.highlighted ? "text-white/80" : "text-slate-600"
                }`}
              >
                {plan.target}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-white/70" : "text-slate-600"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span
                      className={`mt-1 ${
                        plan.highlighted ? "text-white" : "text-slate-600"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-white/90" : "text-slate-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-md font-semibold ${
                  plan.highlighted
                    ? "bg-white text-[#385090] hover:bg-white/90"
                    : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                }`}
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

