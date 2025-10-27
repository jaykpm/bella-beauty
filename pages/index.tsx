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
import Head from "next/head";
import InsideSection from "@/sections/InsideSection";
import { CustomizationFeaturesSection } from "@/sections/CustomizationFeaturesSection";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bella Beauty - Beauty Clinic WordPress Theme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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

                    <CrossCompatibilitySection />
                    <RefundPolicy />
                    <ColorPalettes />
                    <PerformanceSection />
                    <KeyFeatures />
                    <BlocksGallery />
                    <BeforeAfterSection />
                    <InsideSection />
                    <CustomizationSection />
                    <CustomizationFeaturesSection />
                    <PostTypesSection />
                    <DetailsSection />
                    <TechnicalSection />
                    <ElementorExtension />
                    <LayoutsGallery />
                    <InstallationWizard />
                    <TemplateBuilder />
                    <HeaderVariations />
                    <PluginsSection />

                    <CTASection />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
