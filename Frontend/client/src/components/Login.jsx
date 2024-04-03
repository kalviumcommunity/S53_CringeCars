import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
        />
        {errors.email && (
          <div className="error-message">Enter a valid email address</div>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <div className="error-message">Password is required</div>
        )}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
