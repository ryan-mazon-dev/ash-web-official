export const features = [
  {
    id: 1,
    title: "Instant Insurance Upload",
    description: "Simply upload a photo of your insurance card or enter your details. We securely parse and store your coverage information.",
    icon: "upload",
  },
  {
    id: 2,
    title: "Automated Provider Search",
    description: "Our system automatically finds provider contact information including emails, phone numbers, and office addresses.",
    icon: "search",
  },
  {
    id: 3,
    title: "Smart Communication",
    description: "We reach out to providers on your behalf with your insurance details to verify network status.",
    icon: "message",
  },
  {
    id: 4,
    title: "Response Tracking",
    description: "All provider responses are tracked and parsed automatically, giving you clear answers without the phone tag.",
    icon: "tracking",
  },
  {
    id: 5,
    title: "Coverage Dashboard",
    description: "View all your provider verifications in one place. Compare options and make informed healthcare decisions.",
    icon: "dashboard",
  },
  {
    id: 6,
    title: "Secure & HIPAA Compliant",
    description: "Your health information is protected with enterprise-grade encryption and full HIPAA compliance.",
    icon: "shield",
  },
];

export const benefits = [
  {
    id: 1,
    title: "Save Hours of Time",
    description: "No more calling insurance companies or waiting on hold. Get answers in minutes, not days.",
    stat: "10+ hrs",
    statLabel: "saved per verification",
  },
  {
    id: 2,
    title: "Avoid Surprise Bills",
    description: "Know exactly what your insurance covers before your appointment. No unexpected out-of-network charges.",
    stat: "100%",
    statLabel: "billing clarity",
  },
  {
    id: 3,
    title: "Access More Providers",
    description: "Discover in-network specialists and facilities you never knew were available to you.",
    stat: "3x",
    statLabel: "more provider options",
  },
  {
    id: 4,
    title: "Peace of Mind",
    description: "Confidently book appointments knowing your coverage is verified and documented.",
    stat: "98%",
    statLabel: "user satisfaction",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Patient",
    location: "Austin, TX",
    quote: "I needed to find an in-network dermatologist urgently. Medsure contacted 12 offices for me and found 3 great options within 24 hours. This would have taken me weeks!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Small Business Owner",
    location: "Denver, CO",
    quote: "After switching insurance plans, I dreaded finding new providers. Medsure made it effortless. Every doctor I use now was verified through their platform.",
    rating: 5,
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Upload Your Insurance",
    description: "Take a photo of your insurance card or manually enter your plan details. Our system securely processes your information.",
  },
  {
    step: 2,
    title: "Add Providers to Check",
    description: "Enter the providers or specialists you want to verify. We automatically find their contact information.",
  },
  {
    step: 3,
    title: "Get Verified Results",
    description: "We reach out to each provider and deliver clear, verified answers to your coverage questions.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How does Medsure verify my insurance coverage?",
    answer: "We contact healthcare providers directly on your behalf using your insurance information. Our automated system sends inquiries via email or phone and parses their responses to give you clear, verified answers about your coverage status.",
  },
  {
    id: 2,
    question: "Is my health information secure?",
    answer: "Absolutely. Medsure is fully HIPAA compliant. We use enterprise-grade encryption for all data storage and transmission. Your information is never shared with third parties beyond the providers you request us to contact.",
  },
  {
    id: 3,
    question: "How long does verification take?",
    answer: "Most verifications are completed within 24-48 hours. Complex cases involving multiple providers or specialty services may take up to 72 hours. You will receive real-time updates as we receive responses.",
  },
  {
    id: 4,
    question: "What insurance plans do you support?",
    answer: "We support all major insurance carriers including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, and many regional plans. If you have a specific plan, our system can work with any provider that accepts insurance.",
  },
  {
    id: 5,
    question: "Can I verify multiple providers at once?",
    answer: "Yes! You can submit as many providers as you need to verify. Our dashboard lets you track all inquiries in one place and compare responses side by side.",
  },
];

export const pricingTiers = [
  {
    id: 1,
    name: "Starter",
    price: 0,
    period: "forever",
    description: "Perfect for occasional verification needs",
    features: [
      "3 provider verifications per month",
      "Email support",
      "Basic coverage dashboard",
      "24-48 hour response time",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    id: 2,
    name: "Plus",
    price: 19,
    period: "month",
    description: "For individuals managing ongoing healthcare needs",
    features: [
      "Unlimited provider verifications",
      "Priority support",
      "Advanced dashboard with history",
      "12-24 hour response time",
      "Bulk provider upload",
      "Coverage comparison tools",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    id: 3,
    name: "Family",
    price: 39,
    period: "month",
    description: "Manage coverage for your entire household",
    features: [
      "Everything in Plus",
      "Up to 5 family members",
      "Shared family dashboard",
      "Dedicated account manager",
      "Same-day urgent verifications",
      "Annual coverage reviews",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

export const caseStudies = [
  {
    id: 1,
    title: "Finding Specialized Care After Insurance Change",
    client: "Sarah M., Working Professional",
    challenge: "After her employer switched insurance providers, Sarah needed to find new in-network specialists for her chronic condition management, including a neurologist, physical therapist, and pain management specialist.",
    solution: "Medsure verified 15 potential providers across three specialties within 48 hours, identifying 8 in-network options with availability within her preferred location radius.",
    results: [
      "8 verified in-network specialists found",
      "Saved estimated 20+ hours of phone calls",
      "First appointment booked within 1 week",
    ],
    quote: "I was dreading the process of finding all new doctors. Medsure turned weeks of work into two days of waiting.",
  },
  {
    id: 2,
    title: "Avoiding a $12,000 Surprise Surgery Bill",
    client: "James T., Small Business Owner",
    challenge: "James needed knee surgery and wanted to ensure the surgeon, anesthesiologist, and surgical facility were all in-network to avoid surprise bills.",
    solution: "Medsure verified the entire surgical team and facility, discovering that the originally recommended anesthesiology group was out-of-network. We identified an in-network alternative.",
    results: [
      "Prevented $12,000+ out-of-network charge",
      "All 4 providers verified in-network",
      "Surgery completed with zero surprise bills",
    ],
    quote: "Without Medsure, I would have been hit with a massive bill for the anesthesiologist. They literally saved me thousands.",
  },
  {
    id: 3,
    title: "Coordinating Care for a Growing Family",
    client: "The Rodriguez Family",
    challenge: "With a new baby on the way and two young children, the Rodriguez family needed to verify coverage for an OB-GYN, pediatrician, and nearby urgent care facilities.",
    solution: "Using Medsure Family plan, they verified 12 providers including backup options for each specialty, creating a comprehensive care network for their growing family.",
    results: [
      "12 providers verified for family coverage",
      "3 backup options identified per specialty",
      "Ongoing verification for new providers",
    ],
    quote: "Having verified backup options for our pediatrician gave us peace of mind when our usual doctor was unavailable.",
  },
];

export const partnerLogos = [
  { name: "Blue Cross", id: 1 },
  { name: "Aetna", id: 2 },
  { name: "Cigna", id: 3 },
  { name: "UnitedHealthcare", id: 4 },
  { name: "Humana", id: 5 },
  { name: "Kaiser", id: 6 },
];

export const navLinks = [
  { href: "#benefits", label: "Benefits" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
];
