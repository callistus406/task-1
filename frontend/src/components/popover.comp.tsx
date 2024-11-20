import React, { ReactNode, useEffect, useRef, useState } from "react";

interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right"; // Position of the popover
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  content,
  position = "bottom",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const positionClass = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
    left: "right-full mr-[-4rem]",
    right: "left-full ml-0",
  };

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <div onClick={togglePopover} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute z-50   bg-white border rounded-md shadow-lg ${positionClass[position]}   top-[3.5rem]`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
