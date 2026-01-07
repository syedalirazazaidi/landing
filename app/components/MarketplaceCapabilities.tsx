export default function MarketplaceCapabilities() {
  const capabilities = [
    {
      title: "Order Fulfillment",
      description: "Streamline your order processing and fulfillment workflow with automated systems."
    },
    {
      title: "Payout Management",
      description: "Efficiently manage seller payouts and financial transactions with ease.transation"
    },
    {
      title: "Seller Management",
      description: "Comprehensive tools to manage and onboard sellers effectively.sellers effectively."
    },
    {
      title: "Catalog Control",
      description: "Take full control of your product catalog and inventory management.inventory management."
    },
    {
      title: "Local Pickup",
      description: "Enable local pickup options for your customers with location-based services.location-based services"
    },
    {
      title: "Service Bookings",
      description: "Manage service appointments and bookings seamlessly. bookings seamlessly"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold text-slate-900 mb-12">
          Marketplace Capabilities
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

        >
          {capabilities.map((item, index) => (
            <div key={index} className="relative">
              <div
                className="absolute -inset-4 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, rgba(233, 78, 119, 0.15) 0%, rgba(240, 248, 220, 0.12) 50%, rgba(52, 176, 190, 0.15) 100%)',
                  filter: 'blur(18px)',
                  zIndex: 0,
                }}
              />
              <div
                className="rounded-lg bg-white p-6 flex flex-col relative"
                style={{
                  zIndex: 1,
                  border: 'none',
                  outline: 'none',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#385090] rounded flex-shrink-0"></div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#8A8A8A] mt-0 ml-12  tracking-wider">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

