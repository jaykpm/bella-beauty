import { useTina } from "@/contexts/TinaContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const BlocksGallery = () => {
  const { content } = useTina();
  const blocksGallery = content.blocksGallery || [];

  return (
    <div className="relative text-[15px] items-stretch bg-stone-500 box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] max-w-full break-words gap-y-[30px] w-full mb-20 py-20 md:text-lg md:flex-nowrap md:leading-[26.1px] md:mb-[110px] md:py-[120px]">
      <div className="relative text-[15px] self-center box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[90%] md:text-lg md:leading-[26.1px] md:w-2/5">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <h2 className="text-white text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
            {blocksGallery.title}
          </h2>
        </div>
      </div>
      <div className="relative text-white/80 text-[15px] self-center box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] text-center w-[90%] md:text-lg md:leading-[26.1px] md:w-2/5">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 px-5 md:text-lg md:leading-[26.1px] md:mb-[30px] md:px-0">
          {blocksGallery.subtitle}{" "}
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] w-full md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
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
                  bulletClass: "swiper-pagination-bullet !w-2.5 !h-2.5 !bg-white/50 !opacity-100 transition-all duration-300 hover:!bg-white/70",
                  bulletActiveClass: "swiper-pagination-bullet-active !bg-white !w-6 !rounded-full",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 80,
                  },
                }}
                className="!pb-12"
                style={{
                  "--swiper-pagination-bottom": "0px",
                } as React.CSSProperties}
              >
                {blocksGallery.images?.map((image: any, index: any) => (
                  <SwiperSlide key={index}>
                    <div className="text-[15px] items-center box-border caret-transparent flex h-full justify-center leading-[21.75px] break-words px-2.5 md:text-lg md:leading-[26.1px] md:px-10">
                      <figure className="relative text-[15px] box-border caret-transparent leading-[0px] break-words overflow-hidden rounded-[20px] md:text-lg w-full">
                        <div className="relative text-[15px] box-border caret-transparent break-words md:text-lg">
                          <div className="relative text-[15px] box-border caret-transparent break-words text-center md:text-lg">
                            <img
                              src={image.url}
                              alt=""
                              sizes="(max-width: 620px) 100vw, 620px"
                              className="text-[15px] aspect-[auto_620_/_650] box-border caret-transparent max-w-full object-cover break-words w-full md:text-lg"
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
