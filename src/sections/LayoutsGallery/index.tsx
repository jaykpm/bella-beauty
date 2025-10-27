import { useTina } from "@/contexts/TinaContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const LayoutsGallery = () => {
  const { content } = useTina();
  const layoutsGallery = content.layoutsGallery;

  return (
    <div className="relative text-[15px] items-center bg-pink-50 box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap justify-center leading-[21.75px] max-w-full break-words gap-y-[30px] w-full mb-20 pt-[60px] pb-[30px] md:text-lg md:flex-nowrap md:leading-[26.1px] md:mb-[120px] md:pt-[110px] md:pb-[140px]">
      <div className="absolute text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] z-[1] left-0 top-0 md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]"></div>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <h6 className="text-neutral-400 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
            {/* 100% READY TO USE */}
          </h6>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center z-[1] md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words px-5 md:text-lg md:leading-[26.1px] md:px-0">
          <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
            {layoutsGallery?.title}
          </h2>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center z-[1] md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 px-5 md:text-lg md:leading-[26.1px] md:mb-[50px] md:px-0">
          <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            {layoutsGallery?.description}
          </p>
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] w-full md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-[70px] md:text-lg md:leading-[26.1px] md:mb-5">
          <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] list-none max-w-full break-words z-[1] overflow-hidden mx-auto pb-16 md:text-lg md:leading-[26.1px] md:pb-20">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={10000}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet !w-2.5 !h-2.5 !bg-neutral-300 !opacity-100 transition-all duration-300",
                  bulletActiveClass: "swiper-pagination-bullet-active !bg-stone-500 !w-6 !rounded-full",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                  },
                }}
                className="!pb-12"
                style={{
                  "--swiper-pagination-bottom": "0px",
                } as React.CSSProperties}
              >
                {layoutsGallery?.images?.map((image: any, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="text-[15px] items-center box-border caret-transparent flex h-full justify-center leading-[21.75px] break-words px-2.5 md:text-lg md:leading-[26.1px] md:px-[30px]">
                      <figure className="relative text-[15px] box-border caret-transparent leading-[0px] break-words overflow-hidden rounded-[20px] md:text-lg w-full">
                        <div className="relative text-[15px] box-border caret-transparent break-words md:text-lg">
                          <div className="relative text-[15px] box-border caret-transparent break-words text-center md:text-lg">
                            <img
                              src={image?.url}
                              alt=""
                              sizes="(max-width: 622px) 100vw, 622px"
                              className="text-[15px] aspect-[auto_622_/_602] box-border caret-transparent max-w-full object-cover break-words w-full md:text-lg"
                            />
                          </div>
                        </div>
                      </figure>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
