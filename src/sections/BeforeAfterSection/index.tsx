import { ImageComparison, BeforeAfterSlider } from "@/sections/BeforeAfterSection/components/ImageComparison";
import { useTina } from "@/contexts/TinaContext";

export const BeforeAfterSection = () => {
  const { content } = useTina();
  const beforeAfterSection = content.beforeAfterSection || [];

  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
      <div className="text-[15px] items-stretch box-border caret-transparent gap-x-5 flex grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-5 w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-screen-xl">
        <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-2.5 w-full pr-0 md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-[38%] md:pr-[114px]">
          <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 text-center w-20 md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] bg-rose-100 box-border caret-transparent h-full leading-[21.75px] break-words p-[15px] rounded-[10px] md:text-lg md:leading-[26.1px]">
              <img
                src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/before-after.svg"
                alt=""
                className="text-[15px] aspect-[auto_1024_/_1024] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[1024px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mt-5 md:text-lg md:leading-[26.1px]">
              <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
                {beforeAfterSection.title}
              </h2>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-[30px] md:text-lg md:leading-[26.1px]">
              <h4 className="text-neutral-800 text-xl box-border caret-transparent leading-[25px] break-words font-butler_local md:text-3xl md:leading-[37.5px]">
                {beforeAfterSection.subtitle}
              </h4>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words mb-[22.5px] md:text-lg md:leading-[26.1px] md:mb-[27px]">
                {beforeAfterSection.description}
              </p>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-2.5 w-full md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-[62%]">
          <ImageComparison beforeAfterSection={beforeAfterSection} />
          <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-2.5 flex flex-wrap leading-[21.75px] break-words gap-y-2.5 w-full m-[0%] pr-0 md:text-lg md:gap-x-5 md:flex-nowrap md:leading-[26.1px] md:gap-y-5 md:m-0 md:pr-[100px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 w-full md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5 md:w-auto">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <BeforeAfterSlider
                  beforeImage={beforeAfterSection.image1}
                  afterImage={beforeAfterSection.image2}
                  roundedClass="rounded-[20px]"
                  aspectRatioClass="aspect-[auto_258_/_300]"
                />
              </div>
            </div>
            <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <BeforeAfterSlider
                  beforeImage={beforeAfterSection.image3}
                  afterImage={beforeAfterSection.image4}
                  roundedClass="rounded-[30px]"
                  aspectRatioClass="aspect-[auto_428_/_300]"
                  orientation="vertical"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
