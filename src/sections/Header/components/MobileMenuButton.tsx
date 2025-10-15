export const MobileMenuButton = () => {
  return (
    <div className="relative text-[15px] box-border caret-transparent gap-x-5 block leading-[21.75px] max-w-full min-h-[auto] break-words gap-y-5 md:text-lg md:hidden md:leading-[26.1px] md:min-h-0">
      <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] items-center box-border caret-transparent flex flex-col leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div
              role="button"
              aria-label="Open Offcanvas"
              className="text-white text-xs font-bold items-center bg-stone-500 box-border caret-transparent flex fill-white justify-center tracking-[2px] leading-[19.2px] min-h-[auto] min-w-[auto] break-words uppercase z-[2] p-[15px] rounded-lg md:text-sm md:leading-[22.4px] md:min-h-0 md:min-w-0 md:p-[11px] hover:text-neutral-800 hover:bg-rose-100 hover:border-neutral-800"
            >
              <span className="text-xs box-border caret-transparent block fill-white leading-[19.2px] min-h-[auto] min-w-[auto] break-words md:text-sm md:leading-[22.4px] md:min-h-0 md:min-w-0">
                <img
                  src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-3.svg"
                  alt="Icon"
                  className="text-xs box-border caret-transparent h-5 leading-[19.2px] w-5 md:text-sm md:h-6 md:leading-[22.4px] md:w-6"
                />
              </span>
              <span className="text-xs box-border caret-transparent hidden fill-white leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
                <img
                  src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-4.svg"
                  alt="Icon"
                  className="text-xs box-border caret-transparent h-5 leading-[19.2px] w-5 md:text-sm md:h-6 md:leading-[22.4px] md:w-6"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
