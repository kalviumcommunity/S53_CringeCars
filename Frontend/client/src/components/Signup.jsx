import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const navigation = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/user/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        navigation("/login");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
