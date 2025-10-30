import { useTina } from "@/contexts/TinaContext";
import { useInView } from "@/hooks/useInView";

const ElementorSection = ({
  section,
  index,
}: {
  section: any;
  index: number;
}) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const isEven = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24 py-8 md:py-12 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className="w-full md:w-1/2 flex justify-center px-4 md:px-0"
        style={{
          animation: isInView
            ? `${
                isEven ? "slideInRightFull" : "slideInLeftFull"
              } 0.8s ease-out `
            : "none",
          opacity: isInView ? 1 : 0,
        }}
      >
        <img
          src={section?.image}
          alt={section?.titleLarge}
          className="rounded-2xl shadow-lg w-full h-auto object-cover max-w-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6 px-4 md:px-6">
        <h5 className="text-neutral-800 text-lg md:text-xl font-normal mb-2">
          {section?.titleSmall}
        </h5>
        <h3 className="text-neutral-800 text-2xl md:text-4xl lg:text-5xl font-butler_local mb-6">
          {section?.titleLarge}
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-black/70 mt-8">
          {section?.list?.map((item: any, i: number) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed py-1">
              <span className="bg-stone-500 text-pink-50 flex justify-center items-center rounded-full min-w-9 min-h-9 w-9 h-9 text-sm font-medium shrink-0">
                {i + 1}
              </span>
              <span className="pt-1">{item.text}</span>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export const ElementorExtension = () => {
  const { content } = useTina();
  const sections = content.elementorExtension?.elementors || [];

  return (
    <div className="w-full space-y-24 md:space-y-32 overflow-x-clip px-4 md:px-8 lg:px-12 py-12 md:py-16">
      {sections?.map((section: any, index: number) => (
        <ElementorSection key={index} section={section} index={index} />
      ))}
    </div>
  );
};
