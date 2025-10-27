import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

const cards = [
  {
    title: "WIDGETS",
    items: [
      "50+ basic elementor widgets",
      "70+ custom elementor widgets",
      "21 WooCommerce Shop widgets",
    ],
  },
  {
    title: "PLUGINS",
    items: [
      "Premium Elementor Addon included for free!",
      "Custom Post Type UI Integration",
      "Slider Revolution premium plugin included for free",
    ],
  },
  {
    title: "SMART SYSTEMS",
    items: [
      "Smart System: Installation Wizard",
      "Smart System: Header & Footer Builder",
      "Smart System: Global Colors & Fonts",
      "Smart System: Templates!",
    ],
  },
];

export default function InsideSection() {
  const [visible, setVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-16 bg-white text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-light mb-12 text-gray-800">
        What else is inside?
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-20">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={`relative bg-rose-50 rounded-2xl shadow-sm flex-1 p-8 text-left transform transition-all duration-700 ease-out
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            {/* title chip */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-100 text-rose-900 text-xs tracking-[0.2em] font-semibold px-4 py-1 rounded-full">
              {card.title}
            </div>

            {/* list */}
            <ul className="space-y-4 mt-4">
              {card.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 bg-rose-700 text-white p-1 rounded-full">
                    <Check size={22} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
