import { PluginCard } from "@/sections/PluginsSection/components/PluginCard";

export const PluginsSection = () => {
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
              everything you will ever need
            </h6>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center z-[1] md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
              Top Notch Plugins Included
              <br className="text-[32px] box-border caret-transparent leading-[36.8px] break-words md:text-[56px] md:leading-[64.4px]" />
              and Supported
            </h2>
          </div>
        </div>
        <div className="relative text-[15px] box-border caret-transparent gap-x-[25px] leading-[21.75px] max-w-full break-words gap-y-[25px] text-center md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-5 md:text-lg md:leading-[26.1px] md:mb-10">
            <p className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              Not just a theme, but a full pack of premium plugins inside!
            </p>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] flex flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px]">
          <PluginCard
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
          />
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/elementor-1-1.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Elementor Page Builder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-start leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mx-0">
            <div className="relative text-[15px] self-center box-border caret-transparent flex flex-col leading-[21.75px] mt-[-38px] break-words w-full rounded-[30px] md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-5 w-full mx-auto py-[3px] md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
                <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
                  <div className="text-[15px] bg-stone-500 box-border caret-transparent h-full leading-[21.75px] break-words px-3 py-[3px] rounded-[30px] md:text-lg md:leading-[26.1px]">
                    <p className="text-white text-[11px] font-bold box-border caret-transparent tracking-[2px] leading-[18.7px] break-words uppercase md:text-[13px] md:leading-[22.1px]">
                      Exclusive
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/cms-addon.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      CMSMasters Elementor Addon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/custom-post-type.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Custom Post Type UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-start leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-[18px] py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/acf.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Advanced Custom Fields PRO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-start leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] self-center box-border caret-transparent flex flex-col leading-[21.75px] mt-[-38px] break-words w-full rounded-[30px] md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col grow flex-wrap h-full justify-center leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-5 w-full mx-auto py-[3px] md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
                <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
                  <div className="text-[15px] bg-rose-100 box-border caret-transparent h-full leading-[21.75px] break-words px-3 py-[3px] rounded-[30px] md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-[11px] font-bold box-border caret-transparent tracking-[2px] leading-[18.7px] break-words uppercase md:text-[13px] md:leading-[22.1px]">
                      Bundled
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words pt-2.5 md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/slider-revolution.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Slider Revolution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/elementor-pro.png"
                      alt=""
                      sizes="(max-width: 72px) 100vw, 72px"
                      className="text-[15px] aspect-[auto_72_/_72] box-border caret-transparent leading-[0px] max-w-full break-words w-[72px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Elementor PRO Page Builder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] flex flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px]">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words px-2.5 md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/rank-math.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Rank Math SEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/wpml-1.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      WPML
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words px-2.5 md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/loco-translate.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Loco Translate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/woocommerce.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      WooCommerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/contact-form-7.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Contact Form 7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/wpforms.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] rounded-[5px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      WPForms Lite
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words px-2.5 md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/rank-math.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Rank Math SEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/wpml-1.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      WPML
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words px-2.5 md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/loco-translate.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Loco Translate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/woocommerce.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      WooCommerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/contact-form-7.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Contact Form 7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/wpforms.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] rounded-[5px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      WPForms Lite
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] flex flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px]">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/forminator.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Forminator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]"></div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/mailchimp.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Mailchimp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/autoptimize.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Autoptimize
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/litespeed.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      LiteSpeed Cache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/w3-total-cache.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      W3 Total Cache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/forminator.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Forminator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0"></div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/mailchimp.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Mailchimp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/autoptimize.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Autoptimize
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/litespeed.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      LiteSpeed Cache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/w3-total-cache.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      W3 Total Cache
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] flex flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px]">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/yoast-seo.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Yoast SEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/oembed.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      oEmbed Plus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/complianz.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Complianz GDPR/CCPA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/interactive-maps.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Interactive Geo Maps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/top-notch-plugins-70.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Stock Market Ticker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-full border border-stone-200 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/image-159.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      SportsPress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/yoast-seo.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Yoast SEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/oembed.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      oEmbed Plus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/complianz.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Complianz GDPR/CCPA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-[25px] hidden flex-wrap leading-[21.75px] break-words gap-y-[25px] w-full px-2.5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:px-0">
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/interactive-maps.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Interactive Geo Maps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/top-notch-plugins-70.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      Stock Market Ticker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative text-[15px] bg-pink-50 box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] break-words gap-y-5 w-6/12 border border-stone-200 mt-5 mx-2.5 px-5 py-[25px] rounded-[30px] border-solid md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-full md:mt-0 md:mx-0">
            <div className="relative text-[15px] box-border caret-transparent gap-x-5 leading-[21.75px] max-w-full break-words gap-y-5 md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words text-center md:text-lg md:leading-[26.1px]">
                  <figure className="text-[15px] box-border caret-transparent inline-block leading-[21.75px] break-words mb-5 mx-auto md:text-lg md:leading-[26.1px] md:mx-0">
                    <img
                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/image-159.png"
                      alt=""
                      sizes="(max-width: 70px) 100vw, 70px"
                      className="text-[15px] aspect-[auto_70_/_70] box-border caret-transparent leading-[0px] max-w-full break-words w-[70px] md:text-lg"
                    />
                  </figure>
                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                    <p className="text-neutral-800 text-xs font-medium box-border caret-transparent leading-[20.4px] break-words md:text-sm md:leading-[23.8px]">
                      SportsPress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
