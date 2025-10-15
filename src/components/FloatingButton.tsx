export type FloatingButtonProps = {
  variant: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
};

export const FloatingButton = (props: FloatingButtonProps) => {
  return (
    <div
      className={`fixed text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 z-[9998] bottom-5 md:text-lg md:leading-[26.1px] ${props.variant}`}
    >
      <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
          <a
            href={props.href}
            className="text-white text-[25px] bg-stone-500 box-border caret-transparent inline-block fill-white leading-[25px] break-words p-[15px] rounded-[50%] hover:text-neutral-800 hover:bg-rose-100 hover:border-neutral-800"
          >
            <img
              src={props.iconSrc}
              alt={props.iconAlt}
              className="relative box-border caret-transparent h-[25px] w-[25px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
