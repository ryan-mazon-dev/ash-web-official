"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { ChevronDownIcon } from "@/components/icons";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          description="Have questions? We have answers. If you need more help, reach out to our support team."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-card rounded-xl border border-border overflow-hidden transition-colors hover:border-primary/30"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-card-foreground pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
