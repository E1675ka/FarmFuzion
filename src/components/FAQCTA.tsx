"use client";

export default function FAQCTA() {
  const faqs = [
    {
      question: "What is FarmFuzion?",
      answer:
        "FarmFuzion is a digital platform connecting farmers, cooperatives, and service providers through one integrated ecosystem for managing credit, insurance, sourcing, and technical information.",
    },
    {
      question: "How do I get started with FarmFuzion?",
      answer:
        'You can register on our platform in just a few minutes. Visit our website, click "Register Now", and follow the sign-up process. Choose your role (farmer, service provider, or partner) to get started.',
    },
    {
      question: "Is FarmFuzion available on mobile?",
      answer:
        "Yes! FarmFuzion is mobile-first and offline-accessible. Download our app on iOS, Android, or use our mobile web app for seamless access.",
    },
    {
      question: "What services does FarmFuzion offer?",
      answer:
        "We offer financial access, agronomy & veterinary advice, logistics & market linkage, virtual marketplace, digital payments & identity, and real-time market data.",
    },
    {
      question: "In which countries does FarmFuzion operate?",
      answer:
        'We are active in Uganda, DRC, Zambia, and expanding across East, Southern, and Western Africa. Check our "Where We Work" page for current coverage.',
    },
    {
      question: "How can I become a partner?",
      answer:
        'If you\'re interested in partnering with us, fill out our contact form with "Partnership" as the subject or email partnership@farmfuzion.com.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-semibold text-gray-900 cursor-pointer hover:text-farm-green transition">
                {faq.question}
              </summary>
              <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is ready to help you. Contact us using the form
            above or reach out directly.
          </p>
          <button className="bg-farm-light-green text-white px-8 py-3 rounded-lg hover:bg-green-600 font-medium transition">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
