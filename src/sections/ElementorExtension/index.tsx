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
      className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className="w-full md:w-1/2 flex justify-center"
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
          className="rounded-2xl shadow-md w-full h-auto object-cover overflow-clip overflow-x-clip"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <h5 className="text-neutral-800 text-lg md:text-xl font-normal">
          {section?.titleSmall}
        </h5>
        <h3 className="text-neutral-800 text-2xl md:text-4xl font-butler_local">
          {section?.titleLarge}
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-black/70">
          {section?.list?.map((item: any, i: number) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed">
              <span className="bg-stone-500 text-pink-50 flex justify-center items-center rounded-full min-w-9 min-h-9 text-sm font-medium">
                {i + 1}
              </span>
              <span>{item.text}</span>
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
    <div className="w-full space-y-20 overflow-x-clip">
      {sections?.map((section: any, index: number) => (
        <ElementorSection key={index} section={section} index={index} />
      ))}
    </div>
  );
};
