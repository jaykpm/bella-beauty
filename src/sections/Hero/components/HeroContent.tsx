import { HeroHeading } from "@/sections/Hero/components/HeroHeading";

export const HeroContent = () => {
  return (
    <div className="text-[15px] items-start box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-5 w-full mx-auto pt-[200px] pb-[60px] md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-full md:py-10">
      <HeroHeading />
    </div>
  );
};
