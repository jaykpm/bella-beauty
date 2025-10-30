import { X } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] md:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sliding Menu Panel */}
      <nav
        aria-label="Mobile Menu"
        className={`fixed top-0 left-0 h-full w-[75%] bg-[#A76B75] z-[9999] md:hidden transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-stone-500/30 hover:bg-stone-500/50 transition-colors z-10"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col pt-24 px-8 space-y-2">
          <li>
            <a
              href="#demos"
              onClick={handleLinkClick}
              className="text-white text-2xl font-medium block py-4 font-butler_local hover:text-rose-100 transition-colors"
            >
              Demos
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={handleLinkClick}
              className="text-white text-2xl font-medium block py-4 font-butler_local hover:text-rose-100 transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#posttypes"
              onClick={handleLinkClick}
              className="text-white text-2xl font-medium block py-4 font-butler_local hover:text-rose-100 transition-colors"
            >
              Post Types
            </a>
          </li>
          <li>
            <a
              href="#layouts"
              onClick={handleLinkClick}
              className="text-white text-2xl font-medium block py-4 font-butler_local hover:text-rose-100 transition-colors"
            >
              Layouts
            </a>
          </li>
          <li>
            <a
              href="#plugins"
              onClick={handleLinkClick}
              className="text-white text-2xl font-medium block py-4 font-butler_local hover:text-rose-100 transition-colors"
            >
              Plugins
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
