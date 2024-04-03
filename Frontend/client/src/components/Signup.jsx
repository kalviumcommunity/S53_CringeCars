import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
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
      <h2 className="heading">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username (min. 4 characters)"
          {...register("username", { required: true, minLength: 4 })}
        />
        {errors.username && (
          <div className="error-message">
            Username must be at least 4 characters long
          </div>
        )}
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
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", { required: true })}
        />
        {errors.password && errors.confirmPassword && (
          <div className="error-message">Passwords do not match</div>
        )}
        <select {...register("gender", { required: true })}>
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Prefer not to say</option>
        </select>
        {errors.gender && (
          <div className="error-message">Please select a gender</div>
        )}
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
