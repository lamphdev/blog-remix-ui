import { Link } from "@remix-run/react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import Logo from "~/components/Logo";

export default function Login() {
  const { control, setFocus, handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    delayError: 200,
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    setFocus("username");
  }, []);

  return (
    <div className="w-full h-screen bg-background flex items-center justify-center text-content">
      <div className="w-full max-w-[500px]">
        <p className="text-center">
          <Logo />
        </p>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(() => {})}
          className="bg-card rounded shadow px-4 py-6 mt-2"
        >
          <Controller
            control={control}
            rules={{
              required: { value: true, message: "Username is required" },
            }}
            name="username"
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold">
                  Username
                </label>
                <input
                  {...field}
                  type="text"
                  className={`h-10 px-2 border-0 outline-0 bg-background rounded shadow focus-visible:outline-2 focus-visible:outline-offset-1 ${
                    fieldState.invalid
                      ? "text-danger focus-visible:outline-danger"
                      : "focus-visible:outline-primary"
                  }`}
                />
                <span className="text-danger">{fieldState.error?.message}</span>
              </div>
            )}
          />

          <Controller
            control={control}
            name="password"
            rules={{
              required: { value: true, message: "Password is required" },
            }}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="" className="font-semibold">
                  Password
                </label>
                <input
                  {...field}
                  type="password"
                  className={`h-10 px-2 border-0  outline-0 bg-background rounded shadow focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    fieldState.invalid
                      ? "text-danger focus-visible:outline-danger"
                      : "focus-visible:outline-primary"
                  }`}
                />
                <span className="text-danger">{fieldState.error?.message}</span>
              </div>
            )}
          />

          <button className="w-full h-10 bg-primary text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded mt-4 hover:bg-primary/90">
            Login
          </button>
        </form>

        <p className="text-center mx-2 mt-2">
          <span>Have not account? </span>
          <Link className="text-primary" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
