interface MobileMenuToggleProps {
  onClick: () => void;
}

export const MobileMenuToggle = ({ onClick }: MobileMenuToggleProps) => {
  return (
    <div className="text-[15px] items-start box-border caret-transparent flex flex-col leading-[21.75px] break-words md:text-lg md:hidden md:leading-[26.1px]">
      <button
        onClick={onClick}
        className="text-neutral-800 text-xs font-bold items-center bg-rose-100 box-border caret-transparent flex fill-neutral-800 justify-center tracking-[2px] leading-[19.2px] break-words uppercase z-[2] p-3 rounded-lg md:text-sm md:leading-[22.4px] hover:text-white hover:bg-stone-500 cursor-pointer transition-colors"
      >
        <span className="text-xs box-border caret-transparent block fill-neutral-800 leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
          <img
            src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-1.svg"
            alt="Menu Icon"
            className="text-xs box-border caret-transparent h-3 leading-[19.2px] w-3 md:text-sm md:h-3.5 md:leading-[22.4px] md:w-3.5"
          />
        </span>
        <span className="text-xs box-border caret-transparent hidden fill-neutral-800 leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
          <img
            src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-2.svg"
            alt="Close Icon"
            className="text-xs box-border caret-transparent h-3 leading-[19.2px] w-3 md:text-sm md:h-3.5 md:leading-[22.4px] md:w-3.5"
          />
        </span>
      </button>
    </div>
  );
};
