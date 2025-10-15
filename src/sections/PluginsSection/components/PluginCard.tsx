export type PluginCardProps = {
  imageUrl: string;
  imageAlt: string;
  imageSizes: string;
  imageClassName: string;
  pluginName: string;
  cardVariant: string;
  showBadge?: boolean;
  badgeText?: string;
  badgeVariant?: string;
  contentClassName?: string;
};

export const PluginCard = (props: PluginCardProps) => {
  return (
    <div
      className={`relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] ${props.cardVariant}`}
    >
      {props.showBadge && (
        <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px] self-center flex flex-col mt-[-38px] w-full rounded-[30px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px] items-center gap-x-5 flex flex-col grow flex-wrap justify-center max-w-[min(100%,767px)] gap-y-5 w-full mx-auto py-[3px] md:flex-nowrap md:max-w-[min(100%,1280px)]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div
                className={`text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px] ${props.badgeVariant}`}
              >
                <p className="box-border caret-transparent break-words text-white text-[11px] font-bold tracking-[2px] leading-[18.7px] uppercase md:text-[13px] md:leading-[22.1px]">
                  {props.badgeText}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
        <div
          className={`text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px] ${props.contentClassName || ""}`}
        >
          <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
            <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
              <img
                src={props.imageUrl}
                alt={props.imageAlt}
                sizes={props.imageSizes}
                className={props.imageClassName}
              />
            </figure>
            <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
              <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                {props.pluginName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
