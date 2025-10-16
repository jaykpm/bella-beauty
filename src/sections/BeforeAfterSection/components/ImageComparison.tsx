export const ImageComparison = ({ beforeAfterSection }: any) => {
  return (
    <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 flex flex-wrap leading-[21.75px] break-words gap-y-2.5 w-full m-[0%] pl-0 md:text-lg md:gap-x-5 md:flex-nowrap md:leading-[26.1px] md:gap-y-5 md:m-0 md:pl-[100px]">
      <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-0 overflow-hidden rounded-[30px] md:text-lg md:leading-[26.1px]">
              <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-[1] md:text-lg md:leading-[26.1px]">
                <img
                  src={beforeAfterSection?.image1}
                  alt=""
                  sizes="(max-width: 428px) 100vw, 428px"
                  className="relative text-[15px] aspect-[auto_428_/_300] box-border caret-transparent leading-[21.75px] max-w-full break-words w-full md:text-lg md:leading-[26.1px]"
                />
                <img
                  src={beforeAfterSection?.image2}
                  alt=""
                  sizes="(max-width: 428px) 100vw, 428px"
                  className="absolute text-[15px] aspect-[auto_428_/_300] box-border caret-transparent h-full leading-[21.75px] max-w-full break-words w-full top-0 md:text-lg md:leading-[26.1px]"
                />
              </div>
              <div className="absolute text-[15px] box-border caret-transparent h-[9999px] leading-[21.75px] break-words z-[3] left-2/4 top-2/4 md:text-lg md:leading-[26.1px] before:accent-auto before:bg-white before:shadow-[rgba(0,0,0,0.2)_0px_0px_5px_0px] before:box-border before:caret-transparent before:text-stone-500 before:block before:text-[15px] before:not-italic before:normal-nums before:font-light before:h-[9999px] before:tracking-[normal] before:leading-[21.75px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-0.5 before:z-[1] before:m-auto before:border-separate before:inset-0 before:font-karla_local before:md:text-lg before:md:leading-[26.1px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 w-full md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5 md:w-auto">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-0 overflow-hidden rounded-[20px] md:text-lg md:leading-[26.1px]">
              <div className="relative text-[15px] box-border caret-transparent flex leading-[21.75px] break-words w-full z-[1] md:text-lg md:leading-[26.1px]">
                <img
                  src={beforeAfterSection?.image3}
                  alt=""
                  sizes="(max-width: 258px) 100vw, 258px"
                  className="relative text-[15px] aspect-[auto_258_/_300] box-border caret-transparent leading-[21.75px] max-w-full break-words w-full md:text-lg md:leading-[26.1px]"
                />
                <img
                  src={beforeAfterSection?.image4}
                  alt=""
                  sizes="(max-width: 258px) 100vw, 258px"
                  className="absolute text-[15px] aspect-[auto_258_/_300] box-border caret-transparent h-full leading-[21.75px] max-w-full break-words w-full top-0 md:text-lg md:leading-[26.1px]"
                />
              </div>
              <div className="absolute text-[15px] box-border caret-transparent flex-col leading-[21.75px] break-words w-[9999px] z-[3] left-2/4 top-2/4 md:text-lg md:leading-[26.1px] before:accent-auto before:bg-white before:shadow-[rgba(0,0,0,0.2)_0px_0px_5px_0px] before:box-border before:caret-transparent before:text-stone-500 before:block before:text-[15px] before:not-italic before:normal-nums before:font-light before:h-1 before:tracking-[normal] before:leading-[21.75px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-[9999px] before:z-[1] before:m-auto before:border-separate before:inset-0 before:font-karla_local before:md:text-lg before:md:leading-[26.1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
