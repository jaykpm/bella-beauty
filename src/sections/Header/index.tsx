import { useState } from "react";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { PurchaseButton } from "@/sections/Header/components/PurchaseButton";
import { MobileNavigation } from "@/sections/Header/components/MobileNavigation";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="relative text-[15px] items-center box-border caret-transparent gap-x-5 flex flex-wrap justify-center leading-[21.75px] mb-[-102px] max-w-full min-h-[102px] break-words gap-y-5 w-full p-5 md:text-lg md:flex-nowrap md:justify-normal md:leading-[26.1px] md:px-10 md:py-0">
        <HeaderLogo />
        <DesktopNavigation />
        <PurchaseButton toggleMobileMenu={toggleMobileMenu} />
      </div>
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};
