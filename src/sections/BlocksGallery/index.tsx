import { useTina } from "@/contexts/TinaContext";

export const BlocksGallery = () => {
  const { content } = useTina();
  const blocksGallery = content.blocksGallery || [];

  return (
    <div className="relative text-[15px] items-stretch bg-stone-500 box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] max-w-full break-words gap-y-[30px] w-full mb-20 py-20 md:text-lg md:flex-nowrap md:leading-[26.1px] md:mb-[110px] md:py-[120px]">
      <div className="relative text-[15px] self-center box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[90%] md:text-lg md:leading-[26.1px] md:w-2/5">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <h2 className="text-white text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
            {blocksGallery.title}
          </h2>
        </div>
      </div>
      <div className="relative text-white/80 text-[15px] self-center box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[90%] md:text-lg md:leading-[26.1px] md:w-2/5">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 px-5 md:text-lg md:leading-[26.1px] md:mb-[30px] md:px-0">
          {blocksGallery.subtitle}{" "}
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] list-none max-w-full break-words z-[1] overflow-hidden mx-auto pb-5 md:text-lg md:leading-[26.1px] md:pb-[60px]">
              <div className="relative text-[15px] caret-transparent flex leading-[21.75px] break-words z-[1] -mx-2.5 md:text-lg md:leading-[26.1px] md:-mx-10">
                {blocksGallery.images?.map((image: any, index: any) => (
                  <div
                    key={index}
                    className="text-[15px] items-center box-border caret-transparent flex shrink-0 h-full justify-center leading-[21.75px] break-words w-6/12 px-2.5 md:text-lg md:leading-[26.1px] md:w-[33.3333%] md:px-10"
                  >
                    <figure className="relative text-[15px] box-border caret-transparent leading-[0px] break-words overflow-hidden rounded-[20px] md:text-lg">
                      <div className="relative text-[15px] box-border caret-transparent break-words md:text-lg">
                        <div className="relative text-[15px] box-border caret-transparent break-words text-center md:text-lg">
                          <img
                            src={image.url}
                            alt=""
                            sizes="(max-width: 620px) 100vw, 620px"
                            className="text-[15px] aspect-[auto_620_/_650] box-border caret-transparent max-w-full object-scale-down break-words w-[620px] md:text-lg"
                          />
                        </div>
                      </div>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute text-[15px] content-end items-end box-border caret-transparent hidden justify-center leading-[21.75px] mb-[-15px] break-words pointer-events-none z-[1] mt-0 mx-0 inset-0 md:text-lg md:leading-[26.1px] md:m-2.5">
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
