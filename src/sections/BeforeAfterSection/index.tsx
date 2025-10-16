import { ImageComparison } from "@/sections/BeforeAfterSection/components/ImageComparison";
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
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                  <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-0 overflow-hidden rounded-[20px] md:text-lg md:leading-[26.1px]">
                    <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-[1] md:text-lg md:leading-[26.1px]">
                      <img
                        src={beforeAfterSection.image1}
                        alt=""
                        sizes="(max-width: 258px) 100vw, 258px"
                        className="relative text-[15px] aspect-[auto_258_/_300] box-border caret-transparent leading-[21.75px] max-w-full break-words w-full md:text-lg md:leading-[26.1px]"
                      />
                      <img
                        src={beforeAfterSection.image2}
                        alt=""
                        sizes="(max-width: 258px) 100vw, 258px"
                        className="absolute text-[15px] aspect-[auto_258_/_300] box-border caret-transparent h-full leading-[21.75px] max-w-full break-words w-full top-0 md:text-lg md:leading-[26.1px]"
                      />
                    </div>
                    <div className="absolute text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words w-full z-[2] top-0 md:text-lg md:leading-[26.1px]">
                      <div className="absolute text-[15px] box-border caret-transparent h-fit leading-[21.75px] break-words w-fit m-auto p-3 left-0 top-0 md:text-lg md:leading-[26.1px]">
                        <div className="relative text-neutral-800 text-[11px] font-bold items-center box-border caret-transparent flex fill-neutral-800 tracking-[2px] leading-[18.7px] break-words uppercase w-max overflow-hidden px-2 py-0.5 rounded-md md:text-[13px] md:leading-[22.1px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-neutral-800 before:block before:fill-neutral-800 before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[2px] before:leading-[18.7px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:uppercase before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-karla_local before:md:text-[13px] before:md:leading-[22.1px]">
                          <div className="text-[11px] box-border caret-transparent fill-neutral-800 leading-[18.7px] break-words z-[2] md:text-[13px] md:leading-[22.1px]">
                            Before
                          </div>
                        </div>
                      </div>
                      <div className="absolute text-[15px] box-border caret-transparent h-fit leading-[21.75px] break-words w-fit m-auto p-3 right-0 bottom-0 md:text-lg md:leading-[26.1px]">
                        <div className="relative text-neutral-800 text-[11px] font-bold items-center box-border caret-transparent flex fill-neutral-800 tracking-[2px] leading-[18.7px] break-words uppercase w-max overflow-hidden px-2 py-0.5 rounded-md md:text-[13px] md:leading-[22.1px] before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-neutral-800 before:block before:fill-neutral-800 before:text-[11px] before:not-italic before:normal-nums before:font-bold before:h-full before:tracking-[2px] before:leading-[18.7px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:uppercase before:visible before:w-full before:z-[1] before:border-separate before:left-0 before:top-0 before:font-karla_local before:md:text-[13px] before:md:leading-[22.1px]">
                          <div className="text-[11px] box-border caret-transparent fill-neutral-800 leading-[18.7px] break-words z-[2] md:text-[13px] md:leading-[22.1px]">
                            After
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute text-[15px] box-border caret-transparent h-[9999px] leading-[21.75px] break-words z-[3] left-2/4 top-2/4 md:text-lg md:leading-[26.1px] before:accent-auto before:bg-white before:shadow-[rgba(0,0,0,0.2)_0px_0px_5px_0px] before:box-border before:caret-transparent before:text-stone-500 before:block before:text-[15px] before:not-italic before:normal-nums before:font-light before:h-[9999px] before:tracking-[normal] before:leading-[21.75px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-1 before:z-[1] before:m-auto before:border-separate before:inset-0 before:font-karla_local before:md:text-lg before:md:leading-[26.1px]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                  <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-0 overflow-hidden rounded-[30px] md:text-lg md:leading-[26.1px]">
                    <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-[1] md:text-lg md:leading-[26.1px]">
                      <img
                        src={beforeAfterSection.image3}
                        alt=""
                        sizes="(max-width: 428px) 100vw, 428px"
                        className="relative text-[15px] aspect-[auto_428_/_300] box-border caret-transparent leading-[21.75px] max-w-full break-words w-full md:text-lg md:leading-[26.1px]"
                      />
                      <img
                        src={beforeAfterSection.image4}
                        alt=""
                        sizes="(max-width: 428px) 100vw, 428px"
                        className="absolute text-[15px] aspect-[auto_428_/_300] box-border caret-transparent h-full leading-[21.75px] max-w-full break-words w-full top-0 md:text-lg md:leading-[26.1px]"
                      />
                    </div>
                    <div className="absolute text-[15px] box-border caret-transparent flex-col leading-[21.75px] break-words w-[9999px] z-[3] left-2/4 top-2/4 md:text-lg md:leading-[26.1px] before:accent-auto before:bg-white before:shadow-[rgba(0,0,0,0.2)_0px_0px_5px_0px] before:box-border before:caret-transparent before:text-stone-500 before:block before:text-[15px] before:not-italic before:normal-nums before:font-light before:h-0.5 before:tracking-[normal] before:leading-[21.75px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[9999px] before:z-[1] before:m-auto before:border-separate before:inset-0 before:font-karla_local before:md:text-lg before:md:leading-[26.1px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
