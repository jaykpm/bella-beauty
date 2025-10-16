import { useTina } from "@/contexts/TinaContext";

export const PerformanceSection = () => {
  const { content } = useTina();
  const performanceSection = content.performanceSection || [];

  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
      <div className="text-[15px] items-stretch box-border caret-transparent gap-x-10 flex grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-10 w-full mx-auto md:text-lg md:gap-x-40 md:flex-nowrap md:leading-[26.1px] md:max-w-screen-xl md:gap-y-40">
        <div className="relative text-[15px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-[48%] md:mb-0">
          <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 text-left md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 md:text-lg md:leading-[26.1px]">
              <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
                {performanceSection.title}
              </h2>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 text-left z-[1] md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words p-[0%] md:text-lg md:leading-[26.1px] md:p-0">
              <h6 className="text-neutral-800 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
                {performanceSection.description}
              </h6>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 md:text-lg md:leading-[26.1px]">
              <ul className="text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] list-none break-words pl-0 md:text-lg md:gap-x-9 md:leading-[26.1px]">
                {performanceSection.features?.map(
                  (feature: any, index: any) => (
                    <li
                      key={index}
                      className="relative text-[15px] items-center box-border caret-transparent flex justify-between leading-[21.75px] break-words pb-[5px] md:text-lg md:leading-[26.1px]"
                    >
                      <span className="text-[15px] items-center box-border caret-transparent flex leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                        <span className="text-xs self-stretch box-border caret-transparent flex shrink-0 leading-[21.75px] break-words md:leading-[26.1px]">
                          <span className="text-white items-center self-center bg-stone-500 box-border caret-transparent flex justify-center leading-3 min-h-[25px] min-w-[25px] break-words rounded-[25px]">
                            <img
                              src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-10.svg"
                              alt="Icon"
                              className="box-border caret-transparent w-3"
                            />
                          </span>
                        </span>
                        <span className="text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words w-fit pl-2.5 md:text-lg md:leading-[26.1px]">
                          <span className="text-[15px] box-border caret-transparent block leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                            {feature.title}
                          </span>
                        </span>
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              {performanceSection.description}{" "}
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-0 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-0 w-full md:text-lg md:items-start md:flex-nowrap md:leading-[26.1px] md:w-[52%]"></div>
      </div>
    </div>
  );
};
