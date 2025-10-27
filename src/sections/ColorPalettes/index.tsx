import { useTina } from "@/contexts/TinaContext";

export const ColorPalettes = () => {
  const { content } = useTina();
  const colorPalettes = content.colorPalettes || [];

  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full min-h-[795px] break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
      <div className="text-[15px] items-start box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-5 w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
        <div
          style={{ backgroundImage: `url(${colorPalettes?.image1})` }}
          className="relative text-[15px] items-center bg-no-repeat bg-cover box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[30px] w-full border border-stone-200 bg-bottom pt-[60px] pb-[520px] rounded-[40px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:bg-[position:left_50%] md:pt-20 md:pb-[420px]"
        >
          <div className="relative text-[15px] items-stretch shadow-[rgba(0,0,0,0.05)_0px_4px_40px_0px] box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[30px] w-full px-5 py-[30px] rounded-[40px] md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-[60px] md:py-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <div className="text-white text-[50px] bg-stone-500 box-border caret-transparent inline-block fill-white leading-[50px] break-words p-[25px] rounded-[20px]">
                    <i className="relative font-normal box-border caret-transparent block fill-white h-[50px] break-words w-[50px] font-cmsmasters_demo_icons before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:fill-white before:text-[50px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[50px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:translate-x-[-25px] before:visible before:border-separate before:left-2/4 before:font-cmsmasters_demo_icons"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[15px] self-center box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-auto md:text-lg md:leading-[26.1px] md:w-3/5">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <h2 className="text-white text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
                  {colorPalettes?.subtitle}
                </h2>
              </div>
            </div>
            <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <p className="text-white/80  text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                  {colorPalettes?.text}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="absolute text-[15px] box-border caret-transparent gap-x-[30px] hidden left-[-4%] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center z-[1] top-[48%] md:text-lg md:block md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src={colorPalettes?.image1}
                alt=""
                sizes="(max-width: 173px) 100vw, 173px"
                className="text-[15px] aspect-[auto_173_/_159] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[173px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div> */}
          {/* <div className="absolute text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words right-[-28.2px] gap-y-[30px] text-center z-[1] bottom-[75px] md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src={colorPalettes?.image2}
                title=""
                alt=""
                className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
