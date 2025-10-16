import { PluginCard } from "@/sections/PluginsSection/components/PluginCard";
import { useTina } from "@/contexts/TinaContext";

export const PluginsSection = () => {
  const { content } = useTina();
  const pluginsSection = content.pluginsSection;

  return (
    <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
      <div className="text-[15px] items-stretch box-border caret-transparent gap-x-[25px] flex flex-col grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[25px] w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
        <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]"></div>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <h6 className="text-neutral-400 text-[11px] font-normal box-border caret-transparent tracking-[2px] leading-[17.05px] break-words uppercase md:text-[15px] md:leading-[23.25px]">
              {pluginsSection?.sectionSubtitle}
            </h6>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center z-[1] md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
              {pluginsSection?.sectionTitle}
              {/* <br className="text-[32px] box-border caret-transparent leading-[36.8px] break-words md:text-[56px] md:leading-[64.4px]" />
              and Supported */}
            </h2>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 md:text-lg md:leading-[26.1px] md:mb-10">
            <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              {pluginsSection?.description}
            </p>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] flex flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px]">
          {pluginsSection?.plugins?.map((plugin: any, index: number) => (
            <PluginCard
              key={index}
              imageUrl={plugin.imageUrl}
              imageAlt={plugin.imageAlt}
              imageSizes={plugin.imageSizes}
              imageClassName={plugin.imageClassName}
              pluginName={plugin.name}
              cardVariant={plugin.cardVariant}
              showBadge={plugin.showBadge}
              badgeText={plugin.badgeText}
              badgeVariant={plugin.badgeVariant}
            />
          ))}
          {/* <PluginCard
            imageUrl="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/elementor-1-1.png"
            imageAlt=""
            imageSizes="(max-width: 70px) 100vw, 70px"
            imageClassName="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
            pluginName="Elementor Page Builder"
            cardVariant="justify-center"
          />
          <PluginCard
            imageUrl="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/cms-addon.png"
            imageAlt=""
            imageSizes="(max-width: 70px) 100vw, 70px"
            imageClassName="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
            pluginName="CMSMasters Elementor Addon"
            cardVariant="justify-start px-5"
            showBadge={true}
            badgeText="Exclusive"
            badgeVariant="bg-stone-500 px-3 py-[3px] rounded-[30px]"
          />
          <PluginCard
            imageUrl="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/custom-post-type.png"
            imageAlt=""
            imageSizes="(max-width: 70px) 100vw, 70px"
            imageClassName="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
            pluginName="Custom Post Type UI"
            cardVariant=""
          />
          <PluginCard
            imageUrl="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/acf.png"
            imageAlt=""
            imageSizes="(max-width: 70px) 100vw, 70px"
            imageClassName="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
            pluginName="Advanced Custom Fields PRO"
            cardVariant=""
          />
          <PluginCard
            imageUrl="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/slider-revolution.png"
            imageAlt=""
            imageSizes="(max-width: 70px) 100vw, 70px"
            imageClassName="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
            pluginName="Slider Revolution"
            cardVariant="justify-start px-5"
            showBadge={true}
            badgeText="Bundled"
            badgeVariant="bg-rose-100 px-3 py-[3px] rounded-[30px]"
            contentClassName="pt-2.5"
          />
          <PluginCard
            imageUrl="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/elementor-pro.png"
            imageAlt=""
            imageSizes="(max-width: 72px) 100vw, 72px"
            imageClassName="text-[15px] aspect-[auto_72_/_72] box-border caret-transparent leading-[0px] max-w-full break-words w-[72px] md:text-lg"
            pluginName="Elementor PRO Page Builder"
            cardVariant="justify-center"
          /> */}
        </div>
      </div>
    </div>
  );
};
