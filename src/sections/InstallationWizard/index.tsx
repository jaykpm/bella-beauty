import { useTina } from "@/contexts/TinaContext";

export const InstallationWizard = () => {
  const { content } = useTina();
  const installationWizard = content.installationWizard;

  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full overflow-hidden mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[140px] md:px-10">
      <div className="text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[30px] w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
        <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-[30px] text-center md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <h6 className="text-neutral-400 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
              {installationWizard?.smallTitle}
            </h6>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-full md:text-lg md:leading-[26.1px] md:w-3/5">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
              {installationWizard?.mainTitle}
            </h2>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-[30px] text-center md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 md:text-lg md:leading-[26.1px] md:mb-10">
            <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words mb-[22.5px] md:text-lg md:leading-[26.1px] md:mb-[27px]">
              {installationWizard?.description}
            </p>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-[30px] text-center z-[1] md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words ml-0 md:text-lg md:leading-[26.1px] md:ml-[70px]">
            <img
              src={installationWizard?.image}
              sizes="(max-width: 1096px) 100vw, 1096px"
              className="text-[15px] aspect-[auto_1096_/_507] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[1096px] md:text-lg md:leading-[26.1px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
