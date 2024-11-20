import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthToken from "../hooks/useAuthToken";
import { BellIcon, CloseModalIcon, DeleteIcon, IconWarning, LoadingIcon } from "../icons/icons";
import { EditIcon, ViewIcon } from "../icons/table.icons";
import useLogout from "../hooks/useLogout";
import { getProfile } from "../core/auth.core";

type State = "init" | "mutating" | "error" | "success";
interface MutationParams {
  token: string;
  id: string;
}

const DeleteResource = ({
  id,
  apiCall,
  entity,
  queryKey,
}: {
  id: string;
  apiCall: (id: string, token: string) => Promise<any>;
  entity: string;
  queryKey: string;
}) => {
  const { token } = useAuthToken();
  const queryClient = useQueryClient();
  const [currentState, setCurrentState] = useState<State>("init");
  const [clicked, setClicked] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setClicked(true);
  };

  const deleteMutation = useMutation({
    mutationFn: async (params: MutationParams) =>
      apiCall(params.id, params.token),
    onSuccess: (res) => {
      setClicked(false);
      toast.success(res.payload);
      setCurrentState("success");
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },

    onMutate: () => {
      setCurrentState("mutating");
    },
    onError: (error: any) => {
      setClicked(false);
      setCurrentState("error");
      console.log(error, "from use mutate");
      if (error && error.response) {
        const message = error.response.data?.error;
        if (!message) {
          toast.error(error.response.data?.message);
        } else {
          toast.error(message);
        }
      }
      setCurrentState("error");
    },
  });
  const close = (e: any) => {
    e.preventDefault();

    setClicked(false);
  };

  const handleDelete = async () => {
    deleteMutation.mutate({ id: id, token: token as string });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="h-8 w-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
      >
        <DeleteIcon />
      </button>

      <div
        id={id}
        tabIndex={-1}
        className={`${
          clicked ? "block" : "hidden"
        } fixed top-5 inset-0 flex justify-center z-50`}
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
                Are you sure you want to cancel this ?
              </h3>
              <div className=" flex gap-12 justify-center">
                <button
                  onClick={handleDelete}
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  {currentState === "mutating" ? (
                    <LoadingIcon />
                  ) : (
                    " Yes, I'm sure"
                  )}
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
    </>
  );
};
const EditResource = ({ url ,isAdmin}: { url: string,isAdmin?:boolean }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(url);
  };

  return (
    <button
      onClick={handleEditClick}
      className="h-8 w-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
    >
      {
        isAdmin? <EditIcon />: <BellIcon className="w-6 h-6 text-green-500"/>
      }
    </button>
  );
};

const ViewResource = ({ id, modal }: { id: string; modal?: string }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { token } = useAuthToken();
  const logout = useLogout();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!token) {
    logout("authToken");
  }



  const { isError, isLoading, isSuccess, data, refetch, isFetched } = useQuery({
    queryKey: [modal ? modal : "resource", id],
    queryFn: () => getProfile( token as string),
    enabled: false,
  });

  const handleClick = () => {
    setIsModalOpen(true);
    refetch();
  };

  if (isLoading) {
    return <LoadingIcon />;
  }

  if (isError) {
    return <h4>Error !!</h4>;
  }

  if (isFetched) {
    console.log(data);
  }

  if (modal === "pupil" || modal === "teacher-pupil-call") {
    return (
      <div>
        {/* <ProfileModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          personalDetails={data?.pupil}
        /> */}
        <button
          onClick={handleClick}
          className="h-8 w-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
        >
          <ViewIcon />
        </button>
      </div>
    );
  } else {
    return (
      <>
        {/* <TeachersProfileModa
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          personalDetails={data?.teacher}
        /> */}
        <button
          onClick={handleClick}
          className="h-8 w-8 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center"
        >
          <ViewIcon />
        </button>
      </>
    );
  }
};

export { DeleteResource, EditResource, ViewResource };
