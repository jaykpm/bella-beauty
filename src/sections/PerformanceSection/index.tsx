import { useEffect, useState } from "react";
import { useTina } from "@/contexts/TinaContext";
import { useInView } from "@/hooks/useInView";

export const PerformanceSection = () => {
  const { content } = useTina();
  const performanceSection = content.performanceSection || {};
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const targetScore = 92; // You can make this dynamic
  const [progress, setProgress] = useState(0);

  // Animate progress bar only when in view
  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;

    const duration = 2000; // total animation time (2s)
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3); // fast→slow easing

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progressValue = Math.min(
        easeOutCubic(elapsed / duration) * targetScore,
        targetScore
      );

      setProgress(progressValue);

      if (elapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [targetScore, isInView]);

  return (
    <div ref={ref} className="relative text-[15px] box-border flex flex-col leading-[21.75px] max-w-full text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
      <div className="flex flex-wrap md:flex-nowrap gap-y-10 md:gap-x-40 mx-auto max-w-screen-xl items-center">
        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col gap-5 w-full md:w-[48%]">
          <h2 className="text-neutral-800 text-[32px] font-butler_local leading-[36.8px] md:text-[56px] md:leading-[64.4px]">
            {performanceSection.title}
          </h2>

          <h6 className="text-neutral-800 text-[11px] tracking-[2px] uppercase md:text-[15px]">
            {performanceSection.description}
          </h6>

          <ul className="list-none space-y-2">
            {performanceSection.features?.map((feature: any, index: number) => (
              <li key={index} className="flex items-center">
                <span className="flex items-center justify-center bg-stone-500 text-white min-h-[25px] min-w-[25px] rounded-full">
                  <img
                    src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-10.svg"
                    alt="Icon"
                    className="w-3"
                  />
                </span>
                <span className="pl-3">{feature.title}</span>
              </li>
            ))}
          </ul>

          <p>{performanceSection.extraText}</p>
        </div>

        {/* RIGHT SIDE IMAGE + BOTTOM SCORE SECTION */}
        <div
          style={{
            animation: isInView ? "slideInUp 1s ease" : "none",
            opacity: isInView ? 1 : 0,
          }}
          className="relative w-full md:w-[52%] flex flex-col items-center transition-opacity duration-1000"
        >
          {/* Image */}
          <div className="relative w-full">
            <img
              src={
                performanceSection.image ||
                "https://via.placeholder.com/600x400?text=Performance+Image"
              }
              alt={performanceSection.title || "Performance"}
              className="w-full h-auto rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Bottom Overlay Section */}
          <div className="relative -ml-[15rem] -mt-10  bg-[#8B4B56] text-white rounded-2xl shadow-lg flex items-center justify-between w-[85%] md:w-[80%] px-6 py-4">
            {/* Left: Lightning icon + Score */}
            <div className="flex items-center gap-3">
              <img
                src="https://bella-beauty.cmsmasters.studio/wp-content/uploads/2024/02/flash.png"
                alt="Flash icon"
                className="w-8 h-8"
              />
              <span className="text-3xl font-semibold">
                {Math.round(progress)}%
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-[53px] w-[1px] bg-white/30"></div>

            {/* Right: Text + Progress bar */}
            <div className="flex flex-col flex-1 ml-6">
              <h5 className="text-base font-medium mb-2">PageSpeed Score</h5>
              <div className="relative w-full h-2 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-2 bg-white rounded-full transition-all duration-100 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
