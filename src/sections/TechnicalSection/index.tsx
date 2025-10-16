import { useTina } from "@/contexts/TinaContext";

export const TechnicalSection = () => {
  const { content } = useTina();
  const { technicalSection } = content;
  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[180px] md:px-10">
      <div className="text-[15px] box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-5 w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-[25px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px]">
          <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/elementor-1.png"
                alt=""
                sizes="(max-width: 70px) 100vw, 70px"
                className="text-[15px] aspect-[auto_70_/_70] shadow-[rgba(94,95,131,0.12)_0px_4px_10px_0px] box-border caret-transparent inline-block h-[70px] leading-[21.75px] max-w-full break-words w-[70px] rounded-[15px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <h5 className="text-neutral-800 text-[15px] font-normal box-border caret-transparent leading-[21.75px] break-words md:text-xl md:leading-[29px]">
                {technicalSection?.title}
              </h5>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center z-[1] md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
                {technicalSection?.description}
              </h2>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words w-full mb-0 md:text-lg md:leading-[26.1px] md:mb-[35px]">
            <div className="text-[15px] box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full justify-center leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-2.5 w-full mx-auto md:text-lg md:flex-row md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)] md:gap-y-0">
              <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-2.5 text-center w-full md:text-lg md:leading-[26.1px] md:gap-y-0 md:w-auto">
                <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mr-2.5 mt-0.5 md:text-lg md:leading-[26.1px]">
                  <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                    {technicalSection?.description2}
                  </p>
                </div>
              </div>
              <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-2.5 text-center w-full md:text-lg md:leading-[26.1px] md:gap-y-0 md:w-auto">
                <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mr-2.5 mt-0.5 md:text-lg md:leading-[26.1px]">
                  <p className="text-neutral-800 text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                    {technicalSection?.description3}
                  </p>
                </div>
              </div>
              <div className="relative text-[15px] self-center box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:self-auto md:leading-[26.1px] md:gap-y-0">
                <div className="text-[15px] bg-rose-100 box-border caret-transparent h-full leading-[21.75px] break-words ml-0 mb-[30px] px-[15px] py-[3px] rounded-[30px] md:text-lg md:leading-[26.1px] md:ml-[5px] md:mb-0">
                  <div className="text-stone-500 text-[11px] font-bold box-border caret-transparent tracking-[2px] leading-[18.7px] break-words uppercase md:text-[13px] md:leading-[22.1px]">
                    {technicalSection?.description4}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src={technicalSection?.image1}
                alt=""
                sizes="(max-width: 936px) 100vw, 936px"
                className="text-[15px] aspect-[auto_936_/_483] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[936px] rounded-[20px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div>
          <div className="absolute text-[15px] box-border caret-transparent gap-x-[25px] hidden leading-[21.75px] max-w-full break-words gap-y-[25px] text-center z-[1] right-[60px] top-[540px] md:text-lg md:block md:leading-[26.1px] md:right-[81px] md:top-[450px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src={technicalSection?.image2}
                alt=""
                sizes="(max-width: 161px) 100vw, 161px"
                className="text-[15px] aspect-[auto_161_/_210] shadow-[rgba(51,51,51,0.2)_0px_4px_20px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[161px] rounded-[15px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div>
          <div className="absolute text-[15px] self-center box-border caret-transparent gap-x-[25px] hidden leading-[21.75px] max-w-full break-words gap-y-[25px] text-center w-[48%] z-[1] left-[200px] -bottom-10 md:text-lg md:bottom-[-60px] md:block md:leading-[26.1px] md:w-auto md:left-[501px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src={technicalSection?.image3}
                alt=""
                sizes="(max-width: 510px) 100vw, 510px"
                className="text-[15px] aspect-[auto_510_/_100] shadow-[rgba(94,95,131,0.12)_0px_4px_20px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[510px] rounded-[20px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
