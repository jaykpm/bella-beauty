import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TinaProvider } from "@/contexts/TinaContext";
import { AdminPage } from "@/pages/AdminPage";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { TrustBadges } from "@/sections/TrustBadges";
import { DemoShowcase } from "@/sections/DemoShowcase";
import { CrossCompatibilitySection } from "@/sections/CrossCompatibilitySection";
import { RefundPolicy } from "@/sections/RefundPolicy";
import { ColorPalettes } from "@/sections/ColorPalettes";
import { PerformanceSection } from "@/sections/PerformanceSection";
import { KeyFeatures } from "@/sections/KeyFeatures";
import { BlocksGallery } from "@/sections/BlocksGallery";
import { BeforeAfterSection } from "@/sections/BeforeAfterSection";
import { CustomizationSection } from "@/sections/CustomizationSection";
import { PostTypesSection } from "@/sections/PostTypesSection";
import { DetailsSection } from "@/sections/DetailsSection";
import { TechnicalSection } from "@/sections/TechnicalSection";
import { ElementorExtension } from "@/sections/ElementorExtension";
import { LayoutsGallery } from "@/sections/LayoutsGallery";
import { InstallationWizard } from "@/sections/InstallationWizard";
import { TemplateBuilder } from "@/sections/TemplateBuilder";
import { HeaderVariations } from "@/sections/HeaderVariations";
import { PluginsSection } from "@/sections/PluginsSection";
import { CTASection } from "@/sections/CTASection";

const HomePage = () => {
  return (
    <>
      <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
      <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <Header />
          </div>
        </div>
      </div>
      <main className="text-[15px] bg-no-repeat box-border caret-transparent leading-[21.75px] max-w-full break-words w-full bg-center mx-auto md:text-lg md:leading-[26.1px]">
        <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
            <div className="relative text-[15px] box-border caret-transparent flex flex-wrap leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
              <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                <div className="text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                  <Hero />
                  <TrustBadges />
                  <DemoShowcase />
                  <div className="relative text-[15px] box-border caret-transparent gap-x-[60px] flex flex-wrap leading-[21.75px] max-w-full break-words gap-y-[60px] w-full mb-[60px] px-5 md:text-lg md:gap-x-20 md:flex-nowrap md:leading-[26.1px] md:gap-y-20 md:mb-[90px] md:px-[60px]">
                    <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[30px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-6/12">
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <figure className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                            <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                              <a
                                href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-2/"
                                aria-label="Image scroll"
                                className="text-stone-500 text-[15px] box-border caret-transparent block leading-[21.75px] break-words border border-stone-200 overflow-hidden rounded-[20px] border-solid md:text-lg md:leading-[26.1px] hover:text-neutral-400"
                              >
                                <div className="relative text-[15px] box-border caret-transparent h-[484px] leading-[21.75px] break-words overflow-hidden md:text-lg md:leading-[26.1px]">
                                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] min-h-full break-words md:text-lg md:leading-[26.1px]">
                                    <img
                                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/home-2.webp"
                                      alt=""
                                      sizes="(max-width: 860px) 100vw, 860px"
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
                            src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/qrcode_bella-beauty.cmsmasters.studio-1.png"
                            alt=""
                            sizes="(max-width: 450px) 100vw, 450px"
                            className="text-[15px] aspect-[auto_450_/_450] shadow-[rgba(0,0,0,0.2)_0px_0px_40px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[450px] rounded-[20px] md:text-lg md:leading-[26.1px]"
                          />
                        </div>
                      </div>
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <h4 className="text-neutral-800 text-xl box-border caret-transparent leading-[25px] break-words text-center font-butler_local md:text-3xl md:leading-[37.5px]">
                            <a
                              href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-2/"
                              className="text-xl box-border caret-transparent leading-[25px] break-words md:text-3xl md:leading-[37.5px]"
                            >
                              Home Two
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[30px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-6/12">
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <figure className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                            <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                              <a
                                href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-3/"
                                aria-label="Image scroll"
                                className="text-stone-500 text-[15px] box-border caret-transparent block leading-[21.75px] break-words border border-stone-200 overflow-hidden rounded-[20px] border-solid md:text-lg md:leading-[26.1px] hover:text-neutral-400"
                              >
                                <div className="relative text-[15px] box-border caret-transparent h-[484px] leading-[21.75px] break-words overflow-hidden md:text-lg md:leading-[26.1px]">
                                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] min-h-full break-words md:text-lg md:leading-[26.1px]">
                                    <img
                                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/home-3.webp"
                                      alt=""
                                      sizes="(max-width: 860px) 100vw, 860px"
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
                            src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/qrcode_bella-beauty.cmsmasters.studio-2.png"
                            alt=""
                            sizes="(max-width: 450px) 100vw, 450px"
                            className="text-[15px] aspect-[auto_450_/_450] shadow-[rgba(0,0,0,0.2)_0px_0px_40px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[450px] rounded-[20px] md:text-lg md:leading-[26.1px]"
                          />
                        </div>
                      </div>
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <h4 className="text-neutral-800 text-xl box-border caret-transparent leading-[25px] break-words text-center font-butler_local md:text-3xl md:leading-[37.5px]">
                            <a
                              href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-3/"
                              className="text-xl box-border caret-transparent leading-[25px] break-words md:text-3xl md:leading-[37.5px]"
                            >
                              Home Three
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative text-[15px] box-border caret-transparent gap-x-[60px] flex flex-wrap leading-[21.75px] max-w-full break-words gap-y-[60px] w-full mb-20 px-5 md:text-lg md:gap-x-20 md:flex-nowrap md:leading-[26.1px] md:gap-y-20 md:mb-[120px] md:px-[60px]">
                    <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[30px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-6/12">
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <figure className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                            <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                              <a
                                href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-4/"
                                aria-label="Image scroll"
                                className="text-stone-500 text-[15px] box-border caret-transparent block leading-[21.75px] break-words border border-stone-200 overflow-hidden rounded-[20px] border-solid md:text-lg md:leading-[26.1px] hover:text-neutral-400"
                              >
                                <div className="relative text-[15px] box-border caret-transparent h-[484px] leading-[21.75px] break-words overflow-hidden md:text-lg md:leading-[26.1px]">
                                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] min-h-full break-words md:text-lg md:leading-[26.1px]">
                                    <img
                                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/home-4.webp"
                                      alt=""
                                      sizes="(max-width: 860px) 100vw, 860px"
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
                            src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/qrcode_bella-beauty.cmsmasters.studio-3.png"
                            alt=""
                            sizes="(max-width: 450px) 100vw, 450px"
                            className="text-[15px] aspect-[auto_450_/_450] shadow-[rgba(0,0,0,0.2)_0px_0px_40px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[450px] rounded-[20px] md:text-lg md:leading-[26.1px]"
                          />
                        </div>
                      </div>
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <h4 className="text-neutral-800 text-xl box-border caret-transparent leading-[25px] break-words text-center font-butler_local md:text-3xl md:leading-[37.5px]">
                            <a
                              href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-4/"
                              className="text-xl box-border caret-transparent leading-[25px] break-words md:text-3xl md:leading-[37.5px]"
                            >
                              Home Four
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] flex flex-col flex-wrap leading-[21.75px] break-words gap-y-[30px] w-full md:text-lg md:flex-nowrap md:leading-[26.1px] md:w-6/12">
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <figure className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                            <div className="relative text-[15px] box-border caret-transparent leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                              <a
                                href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-5/"
                                aria-label="Image scroll"
                                className="text-stone-500 text-[15px] box-border caret-transparent block leading-[21.75px] break-words border border-stone-200 overflow-hidden rounded-[20px] border-solid md:text-lg md:leading-[26.1px] hover:text-neutral-400"
                              >
                                <div className="relative text-[15px] box-border caret-transparent h-[484px] leading-[21.75px] break-words overflow-hidden md:text-lg md:leading-[26.1px]">
                                  <div className="text-[15px] box-border caret-transparent leading-[21.75px] min-h-full break-words md:text-lg md:leading-[26.1px]">
                                    <img
                                      src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/home-5.webp"
                                      alt=""
                                      sizes="(max-width: 860px) 100vw, 860px"
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
                            src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/qrcode_bella-beauty.cmsmasters.studio-4.png"
                            alt=""
                            sizes="(max-width: 450px) 100vw, 450px"
                            className="text-[15px] aspect-[auto_450_/_450] shadow-[rgba(0,0,0,0.2)_0px_0px_40px_0px] box-border caret-transparent inline-block leading-[21.75px] max-w-full break-words w-[450px] rounded-[20px] md:text-lg md:leading-[26.1px]"
                          />
                        </div>
                      </div>
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[30px] leading-[21.75px] max-w-full break-words gap-y-[30px] md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <h4 className="text-neutral-800 text-xl box-border caret-transparent leading-[25px] break-words text-center font-butler_local md:text-3xl md:leading-[37.5px]">
                            <a
                              href="https://bella-beauty.cmsmasters.studio/bella-beauty/home-5/"
                              className="text-xl box-border caret-transparent leading-[25px] break-words md:text-3xl md:leading-[37.5px]"
                            >
                              Home Five
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CrossCompatibilitySection />
                  <RefundPolicy />
                  <ColorPalettes />
                  <PerformanceSection />
                  <KeyFeatures />
                  <BlocksGallery />
                  <BeforeAfterSection />
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
                    <div className="text-[15px] box-border caret-transparent gap-x-[50px] flex flex-col grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[50px] w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]">
                      <div className="relative text-[15px] box-border caret-transparent gap-x-[50px] leading-[21.75px] max-w-full break-words gap-y-[50px] text-center md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
                          <h2 className="text-neutral-800 text-[32px] box-border caret-transparent leading-[36.8px] break-words font-butler_local md:text-[56px] md:leading-[64.4px]">
                            What else is inside?
                          </h2>
                        </div>
                      </div>
                      <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] break-words w-full md:text-lg md:leading-[26.1px]">
                        <div className="text-[15px] items-stretch box-border caret-transparent gap-x-[30px] flex grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[30px] w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]"></div>
                      </div>
                    </div>
                  </div>
                  <CustomizationSection />
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
                    <div className="text-[15px] items-stretch box-border caret-transparent gap-x-[30px] flex grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-[30px] w-full mx-auto md:text-lg md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)]"></div>
                  </div>
                  <PostTypesSection />
                  <DetailsSection />
                  <TechnicalSection />
                  <ElementorExtension />
                  <LayoutsGallery />
                  <InstallationWizard />
                  <TemplateBuilder />
                  <HeaderVariations />
                  <PluginsSection />
                  <div className="relative text-[15px] box-border caret-transparent flex flex-col leading-[21.75px] max-w-full break-words text-start w-full mb-20 px-5 md:text-lg md:leading-[26.1px] md:mb-[120px] md:px-10">
                    <div className="text-[15px] items-stretch box-border caret-transparent gap-x-0 flex flex-col grow flex-wrap h-full leading-[21.75px] max-w-[min(100%,767px)] break-words gap-y-0 w-full mx-auto md:text-lg md:gap-x-[50px] md:flex-nowrap md:leading-[26.1px] md:max-w-[min(100%,1280px)] md:gap-y-[50px]">
                      <div className="relative text-[15px] box-border caret-transparent gap-x-0 leading-[21.75px] max-w-full break-words gap-y-0 text-center md:text-lg md:gap-x-[50px] md:leading-[26.1px] md:gap-y-[50px]">
                        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words mb-[50px] md:text-lg md:leading-[26.1px] md:mb-0">
                          <h3 className="text-neutral-800 text-[26px] box-border caret-transparent leading-[31.2px] break-words font-butler_local md:text-[42px] md:leading-[50.4px]">
                            Save money with already included plugins
                          </h3>
                        </div>
                      </div>
                      <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-0 hidden flex-wrap justify-center leading-[21.75px] min-h-0 break-words gap-y-0 w-full md:text-lg md:flex md:flex-nowrap md:leading-[26.1px] md:min-h-[auto]">
                        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-0 break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-[auto] md:w-[14%] md:mb-0"></div>
                        <div className="relative text-[15px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-0 break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-[auto] md:w-[7%] md:mb-0"></div>
                        <div className="relative text-[15px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-0 break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-[auto] md:w-[13%] md:mb-0"></div>
                        <div className="relative text-[15px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-0 break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-[auto] md:w-[8%] md:mb-0"></div>
                        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-0 break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-[auto] md:w-[13%] md:mb-0"></div>
                        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-0 break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-[auto] md:w-[8%] md:mb-0"></div>
                      </div>
                      <div className="relative text-[15px] items-center box-border caret-transparent gap-x-0 flex flex-wrap justify-center leading-[21.75px] min-h-[auto] break-words gap-y-0 w-full md:text-lg md:items-stretch md:hidden md:flex-nowrap md:justify-normal md:leading-[26.1px] md:min-h-0">
                        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-[auto] break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-0 md:w-[14%] md:mb-0"></div>
                        <div className="relative text-[15px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-[auto] break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-0 md:w-[7%] md:mb-0"></div>
                        <div className="relative text-[15px] box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-[auto] break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-0 md:w-[13%] md:mb-0"></div>
                        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-[auto] break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-0 md:w-[8%] md:mb-0"></div>
                        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-[auto] break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-0 md:w-[13%] md:mb-0"></div>
                      </div>
                      <div className="relative text-[15px] items-stretch box-border caret-transparent gap-x-0 flex flex-col flex-wrap leading-[21.75px] min-h-[auto] break-words gap-y-0 w-full md:text-lg md:hidden md:flex-row md:flex-nowrap md:leading-[26.1px] md:min-h-0">
                        <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-col flex-wrap justify-center leading-[21.75px] min-h-[auto] break-words gap-y-5 w-full mb-5 md:text-lg md:flex-nowrap md:leading-[26.1px] md:min-h-0 md:w-[8%] md:mb-0"></div>
                      </div>
                    </div>
                  </div>
                  <CTASection />
                </div>
                <div className="text-[15px] box-border caret-transparent clear-both hidden leading-[21.75px] max-w-full break-words w-[1280px] mt-[60px] mx-auto md:text-lg md:leading-[26.1px] md:w-screen"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <span className="text-[15px] box-border caret-transparent leading-[21.75px] break-words w-[767px] md:text-lg md:leading-[26.1px] md:w-[1025px]"></span>
      <img
        src="https://c.animaapp.com/mgrzhz36mRAJyZ/assets/icon-16.svg"
        alt="Icon"
        className="text-[15px] box-border caret-transparent hidden leading-[21.75px] md:text-lg md:leading-[26.1px]"
      />
      </div>
    </>
  );
};

export const App = () => {
  return (
    <TinaProvider>
      <Router>
        <div className="text-stone-500 text-[15px] not-italic normal-nums font-light accent-auto bg-white bg-no-repeat box-border caret-transparent block tracking-[normal] leading-[21.75px] list-outside list-disc break-words overflow-x-hidden pointer-events-auto text-left indent-[0px] normal-case visible bg-center border-separate font-karla_local md:text-lg md:leading-[26.1px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
      </Router>
    </TinaProvider>
  );
};
