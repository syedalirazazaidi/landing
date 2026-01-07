"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How do I get started with your platform?",
    answer:
      "Getting started is simple! Sign up for free on our platform, and you’ll gain instant access to all the tools you need to begin managing your finances seamlessly.",
  },
  {
    question: "How do you ensure my data is secure?",
    answer: "",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "",
  },
  {
    question: "Do you provide customer support for users?",
    answer: "",
  },
  {
    question: "Is there a free trial period available?",
    answer: "",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-4 pb-20 pt-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col  space-y-4">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Frequently
            <br />
            Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Have another question? Please contact our team!
          </p>
          <button className="w-fit rounded-full bg-[#385090] px-6 py-3 text-sm font-semibold text-white shadow-sm">
            Contact Our Team
          </button>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            const hasAnswer = item.answer.trim().length > 0;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border border-[#E9EAED]  shadow-[0_6px_20px_rgba(0,0,0,0.04)]`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </span>
                  <svg
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {isOpen && hasAnswer && (
                  <div className="border-t border-[#E9EAED]  px-5 py-4 text-sm text-slate-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

