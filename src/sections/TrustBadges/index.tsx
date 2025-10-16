import { useTina } from "@/contexts/TinaContext";

export const TrustBadges = () => {
  const { content } = useTina();
  const badges = content?.trustBadges?.badges || [];

  return (
    <div className="relative text-[15px] items-center box-border flex flex-wrap gap-5 w-full mb-20 md:text-lg md:flex-nowrap md:mb-[120px]">
      <div className="relative bg-pink-50 box-border flex flex-col md:flex-row w-full pt-[30px] md:pt-0">
        {badges?.map((badge: any, index: number) => (
          <div
            key={index}
            className={`relative text-[15px] box-border border-stone-200 p-5 md:p-10 ${
              index !== badges?.length - 1 ? "md:border-r border-solid" : ""
            } md:w-1/5`}
          >
            <div className="flex flex-row md:flex-col h-full">
              {/* Image */}
              <div className="flex flex-col items-start w-auto mr-5 md:w-full md:mr-0 md:mb-5">
                {/* <h5 className="hidden md:block relative text-neutral-800 text-xl leading-[29px] mb-[5px]">
                  {badge.title}
                </h5> */}
                <figure className="w-full md:w-auto">
                  <img
                    src={badge?.imageUrl}
                    alt={badge?.title}
                    sizes="(max-width: 50px) 100vw, 50px"
                    className="max-w-full rounded-[5px]"
                  />
                </figure>
              </div>

              {/* Text */}
              <div className="flex flex-col grow justify-center w-auto md:w-full">
                <h5 className="relative text-neutral-800 text-[15px] md:text-xl font-normal mb-[5px]">
                  {badge?.title}
                </h5>
                <div className="relative text-[15px] md:text-base leading-[26.25px]">
                  {badge?.subtitle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
