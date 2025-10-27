import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const maxScroll = 500; // Full visibility at 500px scroll

      // Calculate progress from 0 to 1
      const progress = Math.min(scrollTop / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate opacity and translate based on scroll progress
  const opacity = scrollProgress;
  const translateY = (1 - scrollProgress) * 64; // Slides from 64px below
  const pointerEvents = scrollProgress < 0.1 ? "none" : "auto";

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-5 bottom-5 md:right-6 md:bottom-6 z-[9997] w-14 h-14 flex items-center justify-center rounded-full bg-stone-500 text-white shadow-lg hover:bg-rose-100 hover:text-neutral-800 transition-colors duration-200"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        pointerEvents,
        transition:
          "opacity 0.1s linear, transform 0.1s linear, background-color 0.2s, color 0.2s",
      }}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} strokeWidth={2.5} />
    </button>
  );
};
