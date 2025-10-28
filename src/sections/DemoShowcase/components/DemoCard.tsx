import { useRef, useEffect, useState } from "react";

export type DemoCardProps = {
  containerVariant?: string;
  items: Array<{
    href: string;
    imageUrl: string;
    imageSizes: string;
    qrCodeUrl: string;
    qrCodeSizes: string;
    title: string;
  }>;
};

const DemoCardItem = ({ item, index }: { item: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="text-[15px] box-border caret-transparent  gap-x-[30px] leading-[21.75px] break-words gap-y-[30px] md:text-lg md:leading-[26.1px] relative flex flex-col flex-wrap w-6/12 md:flex-nowrap md:w-6/12"
      style={{
        animation: isInView ? `slideInRight 0.8s ease-out forwards` : "none",
        animationDelay: `${index * 0.15}s`,
        opacity: isInView ? 1 : 0,
      }}
    >
          <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <figure className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                  <a
                    href={item.href}
                    aria-label="Image scroll"
                    className="text-stone-500 text-[15px] box-border caret-transparent block leading-[21.75px] break-words border border-stone-200 overflow-hidden rounded-[20px] border-solid md:text-lg md:leading-[26.1px] hover:text-neutral-400"
                  >
                    <div className="relative text-[15px] box-border caret-transparent h-[484px] leading-[21.75px] break-words overflow-hidden md:text-lg md:leading-[26.1px]">
                      <div className="text-[15px] box-border caret-transparent leading-[21.75px] min-h-full break-words md:text-lg md:leading-[26.1px]">
                        <img
                          src={item.imageUrl}
                          alt=""
                          sizes={item.imageSizes}
                          className="text-[15px] aspect-[auto_860_/_2560] box-border caret-transparent leading-[21.75px] max-w-full min-h-full object-cover break-words w-full md:text-lg md:leading-[26.1px]"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </figure>
            </div>
          </div>
          <div className="absolute text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[110px] z-[1] right-5 bottom-[75px] md:text-lg md:leading-[26.1px] md:bottom-[85px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src={item.qrCodeUrl}
                alt=""
                sizes={item.qrCodeSizes}
                className="text-[15px] aspect-[auto_450_/_450] shadow-[rgba(0,0,0,0.2)_0px_0px_40px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[450px] rounded-[20px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div>
          <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <h4 className="text-neutral-800 text-xl box-border caret-transparent leading-[25px] break-words text-center font-butler_local md:text-3xl md:leading-[37.5px]">
                <a
                  href={item.href}
                  className="text-xl box-border caret-transparent leading-[25px] break-words md:text-3xl md:leading-[37.5px]"
                >
                  {item.title}
                </a>
              </h4>
            </div>
          </div>
    </div>
  );
};

export const DemoCard = (props: DemoCardProps) => {
  return (
    <>
      {props.items?.map((item, index) => (
        <DemoCardItem key={index} item={item} index={index} />
      ))}
    </>
  );
};
