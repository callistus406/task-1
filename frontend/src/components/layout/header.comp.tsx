import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  CloseModalIcon,
  DashboardIcon,
  IconWarning,
  LogoutIcon,
  ProfileCircleIcon,
} from "../../icons/icons";
import useTokenInfo from "../../hooks/useTokenInfo";
import useAuthToken from "../../hooks/useAuthToken";
import { useAuth } from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import { Button } from "../button.comp";
import Popover from "../popover.comp";
import { Accounts } from "../../icons/navigation.icons";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const logout = useLogout();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, setUser, loading } = useAuth();
  const [clicked, setClicked] = useState(false);
  const { token } = useAuthToken();
  const navigate = useNavigate();
  const fnCall = useTokenInfo();
  const handleClick = (e: any) => {
    e.preventDefault();
    setClicked(true);
  };

  const [links, seLinks] = useState({
    profile: "",
    dashboard: "",
  });
  useEffect(() => {
    const data = fnCall(token as string);

  
    if (data?.role === 4451) {
      seLinks({
        dashboard: "/dashboard/admin",
        profile: "/profile",
      });
    } else  {
      seLinks({
        dashboard: "/dashboard/investor",
        profile: "/profile",
      });
    }
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const close = (e: any) => {
    e.preventDefault();

    setClicked(false);
  };

  const handleLogout = () => {
    logout("authToken");
    toast.success("Logout successful");
  };
  return (
    <section className="fixed w-full bg-white z-50 py-4 flex justify-between items-center px-6 border-b">
      <Button onClick={onToggleSidebar}>☰</Button>
   
      <Popover
        position="left"
        trigger={
          <button
            onClick={toggleDropdown}
            className="flex items-center focus:outline-none  "
          >
            <ProfileCircleIcon className="w-8 h-8 mr-2 text-primary " />
            <svg
              className={`ml-2 h-5 w-5  transition-transform ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        }
        content={
          <>
            <div
              // id={id}
              tabIndex={-1}
              className={`${
                clicked ? "block" : "hidden"
              } fixed top-5 inset-0 flex  justify-center z-50`}
            >
              <div className="relative w-full h-full max-w-2xl md:h-auto">
                <div className="relative bg-white rounded-lg shadow-custom2 ">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={close}
                  >
                    <CloseModalIcon className="w-4 h-4 font-bold text-red-500" />
                    <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6 text-center">
                    <IconWarning className="mx-auto mb-4 text-gray-400 w-14 h-14 " />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to Logout ?
                    </h3>
                    <div className=" flex gap-12 justify-center">
                      <button
                        onClick={handleLogout}
                        // onClick={handleDelete}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        onClick={close}
                        type="button"
                        className="bg-primary hover:bg-primary-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10   dark:text-gray-300 dark:border-gray-500 dark:hover:text-white "
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col     justify-start gap-y-2">
              <Link
                to={links.dashboard}
                className="flex  items-center justify-start py-2 hover:bg-gray-200 px-4  w-[12rem]"
                onClick={() => setDropdownOpen(false)}
              >
                <DashboardIcon className="w-8 h-8 mr-2 text-primary " />

                <span>Dashboard</span>
              </Link>

              <Link
                to={links.profile}
                className="flex items-center  py-2  hover:bg-gray-200 px-4  w-[12rem]"
                onClick={() => setDropdownOpen(false)}
              >
                <Accounts className="w-8 h-8 mr-2 text-primary " />
                <span>Profile</span>
              </Link>
              {/* </Button> */}

              <div
                className="flex py-2 items-center  hover:bg-gray-200 w-[12rem] px-4"
                onClick={handleClick}
              >
                <LogoutIcon className="w-8 h-8 mr-2 text-red-500 " />
                <span>Logout</span>
              </div>
            </div>
          </>
        }
      />
    </section>
  );
};
