import { Palette, Type, Sparkles } from "lucide-react";
import { useTina } from "@/contexts/TinaContext";

export const CustomizationFeaturesSection = () => {
  const { content } = useTina();
  const customizationFeaturesSection = content.customizationFeaturesSection;
  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
      <div className="text-[15px] box-border caret-transparent gap-x-[30px] flex grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[30px] w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
        {/* Card 1 - Change fonts */}
        <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words bg-[#faf3f3] rounded-[20px] p-8 w-full md:text-lg md:leading-[26.1px] md:w-1/3">
          <div className="relative mb-6 h-[200px]">
            <img src={customizationFeaturesSection?.image} alt="" />
          </div>

          <div className="mt-auto">
            <h3 className="text-neutral-800 text-xl font-bold mb-2">
              {customizationFeaturesSection?.title}
            </h3>
            <p className="text-[#a78b8b] text-xs uppercase tracking-wider mb-3">
              {customizationFeaturesSection?.subtitle}
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {customizationFeaturesSection?.description}
            </p>
          </div>
        </div>

        {/* Card 2 - Change colors */}
        <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words bg-[#8b6b6b] rounded-[20px] p-8 w-full md:text-lg md:leading-[26.1px] md:w-1/3">
          <div className="relative mb-6 h-[200px]">
            <img src={customizationFeaturesSection?.image2} alt="" />
          </div>

          <div className="mt-auto">
            <h3 className="text-white text-xl font-bold mb-2">
              {customizationFeaturesSection?.title2}
            </h3>
            <p className="text-white/70 text-xs uppercase tracking-wider mb-3">
              {customizationFeaturesSection?.subtitle2}
            </p>
            <p className="text-white/90 text-sm leading-relaxed">
              {customizationFeaturesSection?.description2}
            </p>
          </div>
        </div>

        {/* Card 3 - Customize everything */}
        <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words bg-[#faf3f3] rounded-[20px] p-8 w-full md:text-lg md:leading-[26.1px] md:w-1/3">
          <div className="relative mb-6 h-[200px]">
            <img src={customizationFeaturesSection?.image3} alt="" />
          </div>
          <div className="mt-auto">
            <h3 className="text-neutral-800 text-xl font-bold mb-2">
              {customizationFeaturesSection?.title3}
            </h3>
            <p className="text-[#a78b8b] text-xs uppercase tracking-wider mb-3">
              {customizationFeaturesSection?.subtitle3}
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {customizationFeaturesSection?.description3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
