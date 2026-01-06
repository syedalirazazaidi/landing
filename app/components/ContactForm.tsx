export default function ContactForm() {
  return (
    <section className="relative z-10 -mt-10 flex flex-col items-center px-4 pb-20">
      {/* Top CTA buttons */}
      <div className="mb-6 flex flex-col gap-3 text-sm font-semibold md:flex-row">
        <button className="rounded-full bg-[#385090] px-7 py-3 text-white">
          Book a Demo
        </button>
        <button className="rounded-full border border-[#E9EAED] bg-[#F7F8FA] px-7 py-3 text-black">
          Start Free Trial
        </button>
        <button className="rounded-full border border-[#E9EAED] bg-[#F7F8FA] px-7 py-3 text-black">
          Get Started
        </button>
      </div>

      <div className="relative w-full max-w-4xl">
        <div 
          className="absolute -top-8 -left-8 -right-8 h-40 rounded-lg -z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(233, 78, 119, 0.15) 0%, rgba(240, 248, 220, 0.12) 50%, rgba(52, 176, 190, 0.15) 100%)',
            filter: 'blur(30px)',
          }}
        />
        <div 
          className="absolute top-0 -left-8 bottom-0 w-32 rounded-lg -z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(233, 78, 119, 0.12) 0%, rgba(233, 78, 119, 0.08) 50%, transparent 100%)',
            filter: 'blur(25px)',
          }}
        />
        <div 
          className="absolute top-0 -right-8 bottom-0 w-32 rounded-lg -z-10"
          style={{
            background: 'linear-gradient(180deg, rgba(52, 176, 190, 0.12) 0%, rgba(52, 176, 190, 0.08) 50%, transparent 100%)',
            filter: 'blur(25px)',
          }}
        />
        <div 
          className="relative rounded-lg p-[10px] overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #E9EAED 0%, #E9EAED 30%, rgba(233, 234, 237, 0.7) 50%, rgba(233, 234, 237, 0.4) 70%, rgba(233, 234, 237, 0.15) 85%, transparent 100%)'
          }}
        >
        <div className="rounded-lg bg-white p-8">
          <form className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Mallya Farma"
              className="w-full rounded-md border border-[#E9EAED] bg-[#F7F8FA] px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#385090] focus:ring-1 focus:ring-[#385090]"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="gettryit@gmail.com"
              className="w-full rounded-md border border-[#E9EAED] bg-[#F7F8FA] px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#385090] focus:ring-1 focus:ring-[#385090]"
            />
          </div>

          {/* How we can help? */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700">
              How we can help?
            </label>
            <textarea
              rows={4}
              className="w-full resize-none rounded-md border border-[#E9EAED] bg-[#F7F8FA] px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#385090] focus:ring-1 focus:ring-[#385090]"
            />
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-[#385090] px-4 py-3 text-sm font-semibold text-white "
            >
              Submit
            </button>
          </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}

