import { useTina } from "@/contexts/TinaContext";

export const CustomizationSection = () => {
  const { content } = useTina();

  const customizationSection = content.customizationSection;

  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-[60px] px-5 md:text-lg md:leading-[26.1px] md:mb-[90px] md:px-10">
      <div className="text-[15px] items-start box-border caret-transparent gap-x-10 flex flex-col grow flex-wrap h-full justify-start leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-10 w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
        <div className="relative text-[15px] box-border caret-transparent gap-x-10 leading-[21.75px] max-w-full break-words gap-y-10 text-left w-full md:text-lg md:leading-[26.1px] md:w-6/12">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
              {customizationSection?.title}
            </h2>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-10 leading-[21.75px] max-w-full break-words gap-y-10 w-full md:text-lg md:leading-[26.1px] md:w-6/12">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words p-[0%] md:text-lg md:leading-[26.1px] md:p-0">
            {customizationSection?.description}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
