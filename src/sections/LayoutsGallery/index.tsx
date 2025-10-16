import { useTina } from "@/contexts/TinaContext";

export const LayoutsGallery = () => {
  const { content } = useTina();
  const layoutsGallery = content.layoutsGallery;

  return (
    <div className="relative text-[15px] items-center bg-pink-50 box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap justify-center leading-[21.75px] max-w-full break-words gap-y-[30px] w-full mb-20 pt-[60px] pb-[30px] md:text-lg md:flex-nowrap md:leading-[26.1px] md:mb-[120px] md:pt-[110px] md:pb-[140px]">
      <div className="absolute text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] z-[1] left-0 top-0 md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]"></div>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <h6 className="text-neutral-400 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
            {layoutsGallery?.title}
          </h6>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center z-[1] md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words px-5 md:text-lg md:leading-[26.1px] md:px-0">
          <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
            {layoutsGallery?.title}
          </h2>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center z-[1] md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 px-5 md:text-lg md:leading-[26.1px] md:mb-[50px] md:px-0">
          <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            {layoutsGallery?.description}
          </p>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-[70px] md:text-lg md:leading-[26.1px] md:mb-5">
          <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] list-none max-w-full break-words z-[1] overflow-hidden mx-auto pb-5 md:text-lg md:leading-[26.1px] md:pb-0">
              <div className="relative text-[15px] caret-transparent flex leading-[21.75px] break-words z-[1] -mx-2.5 md:text-lg md:leading-[26.1px] md:ml-[-30px] md:mr-[-30px]">
                {layoutsGallery?.images?.map((image: any, index: number) => (
                  <div className="text-[15px] items-center box-border caret-transparent flex shrink-0 h-full justify-center leading-[21.75px] break-words w-6/12 px-2.5 md:text-lg md:leading-[26.1px] md:w-[33.3333%] md:px-[30px]">
                    <figure className="relative text-[15px] box-border caret-transparent leading-[0px] break-words overflow-hidden rounded-[20px] md:text-lg">
                      <div className="relative text-[15px] box-border caret-transparent break-words md:text-lg">
                        <div className="relative text-[15px] box-border caret-transparent break-words text-center md:text-lg">
                          <img
                            src={image?.url}
                            alt=""
                            sizes="(max-width: 622px) 100vw, 622px"
                            className="text-[15px] aspect-[auto_622_/_602] box-border caret-transparent max-w-full object-scale-down break-words w-[622px] md:text-lg"
                          />
                        </div>
                      </div>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute text-[15px] content-end items-end box-border caret-transparent hidden justify-center leading-[21.75px] mb-[-15px] break-words pointer-events-none z-[1] inset-0 md:text-lg md:leading-[26.1px] md:mb-[-50px]">
              <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent flex justify-center leading-[21.75px] break-words pointer-events-auto text-center z-10 md:text-lg md:leading-[26.1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
