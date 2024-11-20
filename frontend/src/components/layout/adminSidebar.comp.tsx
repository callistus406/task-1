import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { adminMenuItems } from "../../data/layout.data"; 
import { DownIcon } from "../../icons/navigation.icons"; 

interface SidebarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const AdminSidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  onToggleSidebar,
}) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setActiveMenu((prevActive) => (prevActive === label ? null : label));
  };

  const isActive = (to?: string) => {
    if (!to) return false;
    return location.pathname.includes(to);
  };

  const isSubmenuActive = (subItems: { to: string }[]) => {
    return subItems.some((subItem) => isActive(subItem.to));
  };

  return (
    <section
      className={`h-[100%] absolute xl:relative top-0 left-0 bg-white z-40 px-4 transition-all duration-500 ease-in-out pt-24 ${
        isSidebarOpen
          ? "translate-x-0 xl:translate-x-1 xl:w-[230px]"
          : "xl:w-[80px] -translate-x-full xl:translate-x-1"
      }`}
    >
      <div id="me" className="flex flex-col gap-2">
        {adminMenuItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <div
              className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition-colors duration-500 ease-in-out ${
                isSidebarOpen ? "" : "w-[40px]"
              } ${
                isActive(item.to) ||
                (item.subItems && isSubmenuActive(item.subItems))
                  ? "text-white bg-primary"
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => toggleMenu(item.label)}
              aria-expanded={
                item.subItems ? activeMenu === item.label : undefined
              }
              aria-controls={`submenu-${index}`}
            >
              <div className="flex items-center w-full  whitespace-nowrap">
                {!item.subItems && item.icon && (
                  <Link to={item.to}>
                    <item.icon
                      className={`w-6 h-6 text-6xl ${
                        isSidebarOpen ? "mr-4" : ""
                      } `}
                    />
                  </Link>
                )}
                {item.subItems && item.icon && (
                  <span>
                    {isSidebarOpen ? (
                      <span>
                        <item.icon
                          className={`w-6 h-6 text-6xl ${
                            isSidebarOpen ? "mr-4" : ""
                          } `}
                        />
                      </span>
                    ) : (
                      <span onClick={onToggleSidebar}>
                        <item.icon
                          className={`w-6 h-6 text-6xl ${
                            isSidebarOpen ? "mr-4" : ""
                          } `}
                        />
                      </span>
                    )}
                  </span>
                )}
                {item.subItems && (
                  <span
                    className={`flex-1 text-left  ${
                      isSidebarOpen
                        ? "transition-all ease-in-out duration-500"
                        : " xl:translate-x-[-300px]"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
                {!item.subItems && (
                  <Link to={item.to} className="w-full flex text-left">
                    <span
                      className={`flex-1  ${
                        isSidebarOpen
                          ? "transition-all ease-in-out duration-500"
                          : " xl:translate-x-[-300px]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
              </div>
              {item.subItems && (
                <DownIcon
                  className={`${
                    activeMenu === item.label ? "" : "-rotate-90"
                  } h-4 w-4 transition-transform duration-500 ease-in-out`}
                />
              )}
            </div>
            <div
              id={`submenu-${index}`}
              className={`ml-4 flex flex-col gap-1 overflow-hidden transition-max-height duration-500 ease-in-out ${
                activeMenu === item.label && isSidebarOpen
                  ? "max-h-[500px]"
                  : "max-h-0"
              }`}
            >
              {item.subItems &&
                item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.to}
                    className={`p-2 text-left rounded-md transition-colors whitespace-nowrap duration-300 ease-in-out ${
                      isActive(subItem.to)
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {subItem.label}
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
