import { DemoCard } from "@/sections/DemoShowcase/components/DemoCard";

export const DemoShowcase = () => {
  return (
    <div className="relative text-[15px] box-border caret-transparent gap-x-0 flex flex-wrap leading-[21.75px] max-w-full break-words gap-y-[60px] w-full mb-[60px] px-5 md:text-lg md:gap-x-20 md:flex-nowrap md:leading-[26.1px] md:gap-y-20 md:mb-[90px] md:px-[60px]">
      <div className="relative text-[15px] box-border caret-transparent gap-x-0 flex flex-col flex-wrap leading-[21.75px] break-words gap-y-0 w-full md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-6/12">
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]"></div>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <img
              src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/number-1.svg"
              alt=""
              className="text-[15px] aspect-[auto_160_/_245] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-40 md:text-lg md:leading-[26.1px]"
            />
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words -mt-5 mb-[30px] md:text-lg md:leading-[26.1px]">
            <h6 className="text-neutral-400 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
              Ready-made website concepts
            </h6>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-[30px] md:text-lg md:leading-[26.1px]">
            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
              The Ultimate Solution{" "}
              <br className="text-[32px] box-border caret-transparent leading-[36.8px] break-words md:text-[56px] md:leading-[64.4px]" />
              with 5 Home Pages
            </h2>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              Choose, click to install &amp; use right away!
            </p>
          </div>
        </div>
      </div>
      <DemoCard
        items={[
          {
            href: "https://bella-beauty.cmsmasters.studio/bella-beauty/",
            imageUrl:
              "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/home-1.webp",
            imageSizes: "(max-width: 860px) 100vw, 860px",
            qrCodeUrl:
              "https://c.animaapp.com/mgrzhz36mRAJyZ/assets/qrcode_bella-beauty.cmsmasters.studio.png",
            qrCodeSizes: "(max-width: 450px) 100vw, 450px",
            title: "Home One",
          },
        ]}
      />
    </div>
  );
};
