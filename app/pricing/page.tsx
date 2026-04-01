"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";
import { PricingCard } from "@/components/ui/pricing-card";
import { pricingTiers, faqs } from "@/lib/data";
import { ChevronDownIcon } from "@/components/icons";

const pricingFaqs = [
  {
    id: 1,
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, you will be prorated.",
  },
  {
    id: 2,
    question: "What happens if I run out of verifications on the free plan?",
    answer: "You can purchase additional verifications as a one-time add-on, or upgrade to the Plus plan for unlimited verifications. We will notify you when you are approaching your limit.",
  },
  {
    id: 3,
    question: "Is there a contract or commitment?",
    answer: "No contracts or long-term commitments. All paid plans are billed monthly and you can cancel anytime. Your access continues until the end of your paid period.",
  },
  {
    id: 4,
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for all new paid subscriptions. If you are not satisfied, contact support within 14 days for a full refund.",
  },
  {
    id: 5,
    question: "How does the Family plan work?",
    answer: "The Family plan allows you to add up to 5 family members, each with their own insurance information and provider lists. All verifications are managed from a single dashboard.",
  },
];

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navigation />
      <main className="flex-1 pt-24 lg:pt-32">
        {/* Pricing Header */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Pricing"
              title="Simple, Transparent Pricing"
              description="Choose the plan that fits your needs. All plans include our core verification technology."
            />

            {/* Pricing Cards */}
            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
              {pricingTiers.map((tier) => (
                <PricingCard
                  key={tier.id}
                  name={tier.name}
                  price={tier.price}
                  period={tier.period}
                  description={tier.description}
                  features={tier.features}
                  cta={tier.cta}
                  highlighted={tier.highlighted}
                />
              ))}
            </div>

            {/* Money Back Guarantee */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                All paid plans include a 14-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing FAQ */}
        <section className="py-20 lg:py-28 bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="FAQ"
              title="Pricing Questions"
              description="Everything you need to know about our plans and billing."
            />

            <div className="mt-12 space-y-4">
              {pricingFaqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-card rounded-xl border border-border overflow-hidden"
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

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground">Ready to get started?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with our free plan and upgrade when you need more.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
