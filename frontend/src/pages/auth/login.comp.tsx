import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import useCookie from "../../hooks/useCookie";
import { EyeClose, EyeOpen, LoadingIcon } from "../../icons/icons";
import { ILogin } from "../../@types/type";
import { login } from "../../core/auth.core";

type State = "init" | "mutating" | "error" | "success";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>();

  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState<State>("init");

  const { setAuthToken } = useCookie();
  const { setUser } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const postMutation = useMutation({
    mutationFn: async (data: ILogin) => login(data),
    onSuccess: (res: any) => {
      const data = res.payload;

      Cookies.set("authToken", data.token, { expires: 1 });

      const decodedToken: any = jwtDecode(data.token);
      setUser(decodedToken); // Save user to context
      setAuthToken("authToken", data.token);

      if (decodedToken.user.role === 4451) {
        navigate("/dashboard/admin");
      } else if (decodedToken.user.role === 1002) {
        navigate("/dashboard/investor");
      } else {
        toast.error("Unauthorized User Role");
      }

      toast.success("Login successful");
    },
    onMutate: () => {
      setCurrentState("mutating");
    },
    onError: (error: any) => {
      if (error?.response) {
        const message = error.response.data?.error || "Login failed. Please try again.";
        toast.error(message);
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
      setCurrentState("error");
    },
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    postMutation.mutate(data);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 shadow-custom2 md:w-[400px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("email", {
                      pattern: {
                        value: /^[^@]+@[^@]+\.[^@]+$/,
                        message: "Invalid Email address",
                      },
                      required: "Email is required",
                    })}
                    placeholder="example@gmail.com"
                    defaultValue=""
                  />
                  {errors.email && (
                    <div className="text-red-500 text-sm">{errors.email.message}</div>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="relative mt-2">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    placeholder="Qwerty123#"
                    defaultValue=""
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute top-2 right-3 font-bold"
                  >
                    {showPassword ? <EyeOpen /> : <EyeClose />}
                  </button>
                  {errors.password && (
                    <div className="text-red-500 text-sm">{errors.password.message}</div>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  disabled={currentState === "mutating"}
                >
                  {currentState === "mutating" ? (
                    <LoadingIcon className="w-6 h-6 text-white" />
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
