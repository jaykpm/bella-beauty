import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative text-[15px] bg-[url('https://bella-beauty.cmsmasters.studio/wp-content/uploads/2024/03/landing-1.webp')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col leading-[21.75px] mt-[-50px] max-w-full min-h-[770px] break-words text-start w-full bg-center px-5 md:text-lg md:leading-[26.1px] md:min-h-[1042px] md:mt-0 md:px-10 before:accent-auto before:bg-black before:box-border before:caret-transparent before:text-stone-500 before:block before:text-[15px] before:not-italic before:normal-nums before:font-light before:h-[max(100%_+_0px,100%)] before:tracking-[normal] before:leading-[21.75px] before:list-outside before:list-disc before:opacity-10 before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[max(100%_+_0px,100%)] before:border-separate before:left-0 before:top-0 before:font-karla_local before:md:text-lg before:md:leading-[26.1px]">
      <HeroContent />
    </section>
  );
};
