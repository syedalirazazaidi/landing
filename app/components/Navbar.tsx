import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/marketplace-logo.png"
            alt="Marketcube logo"
            width={240}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Links */}
        <div className="hidden items-center border border-[#E9EAED] rounded-full py-2 px-3 gap-8 text-sm font-medium text-slate-700 md:flex">
          <button className="hover:text-slate-900">Features</button>
          <button className="hover:text-slate-900">Solutions</button>
          <button className="hover:text-slate-900">Testimonials</button>
          <button className="hover:text-slate-900">Resources</button>
        </div>

        {/* Right side button */}
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-[#E9EAED] px-4 py-2 text-sm font-semibold text-black">
            Register Now
          </button>
        </div>
      </nav>
    </header>
  );
}

