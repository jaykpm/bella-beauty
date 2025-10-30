import { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  roundedClass?: string;
  aspectRatioClass?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  roundedClass = "rounded-[30px]",
  aspectRatioClass = "aspect-[auto_428_/_300]",
  orientation = 'horizontal'
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let percentage;
    
    if (orientation === 'vertical') {
      const y = clientY - rect.top;
      percentage = (y / rect.height) * 100;
    } else {
      const x = clientX - rect.left;
      percentage = (x / rect.width) * 100;
    }
    
    // Clamp between 0 and 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX, e.clientY);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const isVertical = orientation === 'vertical';
  const cursorClass = isVertical ? 'cursor-ns-resize' : 'cursor-ew-resize';
  
  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden ${roundedClass} select-none`}
    >
      {/* Before Image (bottom layer) */}
      <img
        src={beforeImage}
        alt="Before"
        className={`relative ${aspectRatioClass} w-full object-cover`}
        draggable={false}
      />
      
      {/* After Image (top layer with clip) */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ 
          clipPath: isVertical 
            ? `inset(0 0 ${100 - sliderPosition}% 0)` 
            : `inset(0 ${100 - sliderPosition}% 0 0)` 
        }}
      >
        <img
          src={afterImage}
          alt="After"
          className={`${aspectRatioClass} w-full h-full object-cover`}
          draggable={false}
        />
      </div>

      {/* Slider Line - Draggable */}
      <div 
        className={`absolute bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10 ${cursorClass} ${
          isVertical 
            ? 'left-0 w-full h-1 -translate-y-1/2' 
            : 'top-0 h-full w-1 -translate-x-1/2'
        }`}
        style={isVertical ? { top: `${sliderPosition}%` } : { left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      />
    </div>
  );
};

export const ImageComparison = ({ beforeAfterSection }: any) => {
  return (
    <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 flex flex-wrap leading-[21.75px] break-words gap-y-2.5 w-full m-[0%] pl-0 md:text-lg md:gap-x-5 md:flex-nowrap md:leading-[26.1px] md:gap-y-5 md:m-0 md:pl-[100px]">
      <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <BeforeAfterSlider
            beforeImage={beforeAfterSection?.image1}
            afterImage={beforeAfterSection?.image2}
            roundedClass="rounded-[30px]"
            aspectRatioClass="aspect-[auto_428_/_300]"
          />
        </div>
      </div>
      <div className="relative text-[15px] box-border caret-transparent gap-x-2.5 leading-[21.75px] max-w-full break-words gap-y-2.5 w-full md:text-lg md:gap-x-5 md:leading-[26.1px] md:gap-y-5 md:w-auto">
        <div className="text-[15px] box-border caret-transparent h-full leading-[21.75px] break-words md:text-lg md:leading-[26.1px]">
          <BeforeAfterSlider
            beforeImage={beforeAfterSection?.image3}
            afterImage={beforeAfterSection?.image4}
            roundedClass="rounded-[20px]"
            aspectRatioClass="aspect-[auto_258_/_300]"
            orientation="vertical"
          />
        </div>
      </div>
    </div>
  );
};
