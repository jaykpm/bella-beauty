import { useTina } from "@/contexts/TinaContext";
import { DemoCard } from "@/sections/DemoShowcase/components/DemoCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export const DemoShowcase = () => {
  const { content } = useTina();
  const demoShowcase = content.demoShowcase || [];
  console.log({ demoShowcase });

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap" }}
      className="relative text-[15px] box-border caret-transparent gap-x-0 flex flex-wrap leading-[21.75px] max-w-full break-words gap-y-[60px] w-full mb-[60px] px-5 md:text-lg  md:flex-nowrap md:leading-[26.1px] md:gap-y-20 md:mb-[90px] md:px-[60px]"
    >
      <div className=" relative text-[15px] box-border caret-transparent gap-x-0 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-0 w-6/12 md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-6/12">
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]"></div>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <img
              src={demoShowcase.image}
              alt="image"
              className="text-[15px] aspect-[auto_160_/_245] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-40 md:text-lg md:leading-[26.1px]"
            />
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words -mt-5 mb-[30px] md:text-lg md:leading-[26.1px]">
            <h6 className="text-neutral-400 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
              {demoShowcase.text1}
            </h6>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-[30px] md:text-lg md:leading-[26.1px]">
            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
              {demoShowcase.text2}{" "}
              <br className="text-[32px] box-border caret-transparent leading-[36.8px] break-words md:text-[56px] md:leading-[64.4px]" />
              {demoShowcase.text3}
            </h2>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              {demoShowcase.text4} &amp; {demoShowcase.text5}
            </p>
          </div>
        </div>
      </div>
      <div className="text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] break-words gap-y-[30px] w-6/12 relative md:text-lg md:leading-[26.1px] md:w-6/12">
        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={8000}
          className="h-[484px]"
        >
          {demoShowcase.demos?.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                  <figure className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                    <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                      <a
                        href={item.href}
                        aria-label="Image scroll"
                        className={`text-stone-500 text-[15px] box-border caret-transparent block leading-[21.75px] break-words border border-stone-200 overflow-hidden rounded-[20px] border-solid md:text-lg md:leading-[26.1px] hover:text-neutral-400 ${
                          index === 0 ? "group" : ""
                        }`}
                      >
                        <div className="relative text-[15px] box-border caret-transparent h-[484px] leading-[21.75px] break-words overflow-hidden md:text-lg md:leading-[26.1px]">
                          <div className="text-[15px] box-border caret-transparent leading-[21.75px] min-h-full break-words md:text-lg md:leading-[26.1px]">
                            <img
                              src={item.imageUrl}
                              alt=""
                              sizes={item.imageSizes}
                              className={`text-[15px] aspect-[auto_860_/_2560] box-border caret-transparent leading-[21.75px] max-w-full min-h-full object-cover break-words w-full md:text-lg md:leading-[26.1px] ${
                                index === 0
                                  ? "transition-transform duration-[8000ms] ease-linear group-hover:translate-y-[-60%]"
                                  : ""
                              }`}
                            />
                          </div>
                        </div>
                      </a>
                    </div>
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* QR Code - Static, always visible */}
        {demoShowcase.demos && demoShowcase.demos[0] && (
          <div className="absolute text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[110px] z-[1] right-5 bottom-[75px] md:text-lg md:leading-[26.1px] md:bottom-[85px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <img
                src={demoShowcase.demos[0].qrCodeUrl}
                alt=""
                sizes={demoShowcase.demos[0].qrCodeSizes}
                className="text-[15px] aspect-[auto_450_/_450] shadow-[rgba(0,0,0,0.2)_0px_0px_40px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[450px] rounded-[20px] md:text-lg md:leading-[26.1px]"
              />
            </div>
          </div>
        )}
        
        {/* Title - Static, always visible */}
        {demoShowcase.demos && demoShowcase.demos[0] && (
          <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] mt-5 md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <h4 className="text-neutral-800 text-xl box-border caret-transparent leading-[25px] break-words text-center font-butler_local md:text-3xl md:leading-[37.5px]">
                <a
                  href={demoShowcase.demos[0].href}
                  className="text-xl box-border caret-transparent leading-[25px] break-words md:text-3xl md:leading-[37.5px]"
                >
                  {demoShowcase.demos[0].title}
                </a>
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
