import { useTina } from "@/contexts/TinaContext";
import { DemoCard } from "@/sections/DemoShowcase/components/DemoCard";

export const DemoShowcase = () => {
  const { content } = useTina();
  const demoShowcase = content.demoShowcase || [];
  console.log({ demoShowcase });

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap" }}
      className="relative text-[15px] box-border caret-transparent gap-x-0 flex flex-wrap leading-[21.75px] max-w-full break-words gap-y-[60px] w-full mb-[60px] px-5 md:text-lg  md:flex-nowrap md:leading-[26.1px] md:gap-y-20 md:mb-[90px] md:px-[60px]"
    >
      <div className=" relative text-[15px] box-border caret-transparent gap-x-0 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-0 w-6/12 md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-6/12">
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]"></div>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <img
              src={demoShowcase.image}
              alt="image"
              className="text-[15px] aspect-[auto_160_/_245] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-40 md:text-lg md:leading-[26.1px]"
            />
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words -mt-5 mb-[30px] md:text-lg md:leading-[26.1px]">
            <h6 className="text-neutral-400 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
              {demoShowcase.text1}
            </h6>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-[30px] md:text-lg md:leading-[26.1px]">
            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
              {demoShowcase.text2}{" "}
              <br className="text-[32px] box-border caret-transparent leading-[36.8px] break-words md:text-[56px] md:leading-[64.4px]" />
              {demoShowcase.text3}
            </h2>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              {demoShowcase.text4} &amp; {demoShowcase.text5}
            </p>
          </div>
        </div>
      </div>
      <DemoCard items={demoShowcase.demos} />
    </div>
  );
};
