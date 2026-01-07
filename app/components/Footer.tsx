import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#385090] px-6 py-10 text-white md:px-12 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left: logo + description */}
        <div className="max-w-sm space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/marketcube-icon.png"
              alt="Marketcube logo"
              width={160}
              height={30}
              className="h-8 w-auto"
            />
            <p className=" uppercase">Market<span className="font-extrabold ">cube</span><span className="lowercase ">.io</span></p>
          </div>
          <p className="text-sm leading-relaxed text-white">
            We deliver smart financial tools to help <br/>businesses grow and succeed
            effortlessly.
          </p>
        </div>

        {/* Middle: link columns */}
        <div className="flex flex-1 flex-wrap justify-start gap-12 text-sm md:justify-center">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-white">
              <li>Our Mission</li>
              <li>Our Vision</li>
              <li>Our Story</li>
              <li>Meet Our Team</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Solutions</h3>
            <ul className="space-y-3 text-white">
              <li>Financial Management</li>
              <li>Expense Tracking</li>
              <li>Cash Flow Optimization</li>
              <li>Customizable Reports</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="space-y-3 text-white">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Whitepapers</li>
              <li>eBooks</li>
            </ul>
          </div>
        </div>

        {/* Right: social icons */}
        <div className="flex items-start justify-start gap-3 md:justify-end">
          {["instagram", "x", "youtube"].map((name) => (
            <button
              key={name}
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-white text-[#385090] shadow-sm"
            >
              <span className="sr-only">{name}</span>
              <span className="text-lg">
                {name === "instagram" && "◎"}
                {name === "x" && "✕"}
                {name === "youtube" && "▶"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/70 md:flex-row">
        <p>© Copyright Creafi 2024</p>
        <div className="flex gap-6">
          <span>All Right Reserved</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

