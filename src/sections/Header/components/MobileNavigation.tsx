export const MobileNavigation = () => {
  return (
    <nav
      aria-label="Menu"
      className="relative text-[15px] box-border caret-transparent hidden leading-[21.75px] break-words z-[999] md:text-lg md:leading-[26.1px]"
    >
      <ul className="relative text-[15px] box-border caret-transparent flex flex-col flex-wrap leading-[21.75px] list-none break-words overflow-hidden pl-0 md:text-lg md:leading-[26.1px]">
        <li className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <a
            href="#demos"
            aria-label="Menu item"
            className="relative text-neutral-800 text-xs font-medium box-border caret-transparent block tracking-[2px] leading-[19.2px] break-words uppercase px-[15px] py-1.5 font-karla_local md:text-sm md:leading-[22.4px] hover:text-rose-100"
          >
            <span className="text-xs items-center box-border caret-transparent flex justify-start leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
              <span className="text-xs box-border caret-transparent block leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
                Demos
              </span>
            </span>
          </a>
        </li>
        <li className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <a
            href="#features"
            aria-label="Menu item"
            className="relative text-neutral-800 text-xs font-medium box-border caret-transparent block tracking-[2px] leading-[19.2px] break-words uppercase px-[15px] py-1.5 font-karla_local md:text-sm md:leading-[22.4px] hover:text-rose-100"
          >
            <span className="text-xs items-center box-border caret-transparent flex justify-start leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
              <span className="text-xs box-border caret-transparent block leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
                Features
              </span>
            </span>
          </a>
        </li>
        <li className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <a
            href="#posttypes"
            aria-label="Menu item"
            className="relative text-neutral-800 text-xs font-medium box-border caret-transparent block tracking-[2px] leading-[19.2px] break-words uppercase px-[15px] py-1.5 font-karla_local md:text-sm md:leading-[22.4px] hover:text-rose-100"
          >
            <span className="text-xs items-center box-border caret-transparent flex justify-start leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
              <span className="text-xs box-border caret-transparent block leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
                Post Types
              </span>
            </span>
          </a>
        </li>
        <li className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <a
            href="#layouts"
            aria-label="Menu item"
            className="relative text-neutral-800 text-xs font-medium box-border caret-transparent block tracking-[2px] leading-[19.2px] break-words uppercase px-[15px] py-1.5 font-karla_local md:text-sm md:leading-[22.4px] hover:text-rose-100"
          >
            <span className="text-xs items-center box-border caret-transparent flex justify-start leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
              <span className="text-xs box-border caret-transparent block leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
                Layouts
              </span>
            </span>
          </a>
        </li>
        <li className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <a
            href="#plugins"
            aria-label="Menu item"
            className="relative text-neutral-800 text-xs font-medium box-border caret-transparent block tracking-[2px] leading-[19.2px] break-words uppercase px-[15px] py-1.5 font-karla_local md:text-sm md:leading-[22.4px] hover:text-rose-100"
          >
            <span className="text-xs items-center box-border caret-transparent flex justify-start leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
              <span className="text-xs box-border caret-transparent block leading-[19.2px] break-words md:text-sm md:leading-[22.4px]">
                Plugins
              </span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
