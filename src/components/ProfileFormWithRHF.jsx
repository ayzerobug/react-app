import { useState } from "react";
import { useForm } from "react-hook-form";

const FormInputGroup = ({ label, error, hasError, ...rest }) => {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <input
        className={`w-full border p-2 mt-1 outline-none text-sm rounded ${
          hasError ? "border-red-500" : " border-slate-300"
        }`}
        {...rest}
      />
      <p className="text-sm text-red-500">{error}</p>
    </div>
  );
};

const ProfileFormWithRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState();

  const onSubmit = (data) => {
    console.log("submitted", data);
    setSubmitted(true);
    setName(data.name);
  };

  if (submitted) {
    return (
      <div className="text-center p-10">
        <p className="text-2xl font-bold text-cyan-500">🎉 Welcome, {name}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 rounded-sm shadow w-full max-w-[20rem] space-y-3"
    >
      <div>
        <h1 className="text-xl font-semibold">Create a new account</h1>
        <p className="text-sm text-pretty text-slate-500">
          Kindly fill in the below details to create your personal profile.
        </p>
      </div>
      <FormInputGroup
        label="Full Name"
        {...register("name", { required: true, maxLength: 20 })}
        placeholder="Ayomide Oludare"
        hasError={errors.name != null}
      />
      <FormInputGroup
        label="Email"
        placeholder="yourname@example.com"
        type="email"
        {...register("email", { required: true })}
        hasError={errors.email != null}
      />
      <FormInputGroup
        label="Phone Number"
        placeholder="07040296395"
        {...register("phoneNumber", {
          minLength: 11,
          maxLength: 11,
          required: true,
        })}
        type="tel"
        hasError={errors.phoneNumber != null}
      />
      <FormInputGroup
        label="Password"
        placeholder="Enter your password"
        type="password"
        {...register("passord", { required: true, minLength: 8 })}
        hasError={errors.password != null}
      />
      <FormInputGroup
        label="Password Confirmation"
        placeholder="Confirm your password"
        type="password"
        hasError={errors.passwordConfirmation != null}
        {...register("passwordConfirmation", { required: true, minLength: 8 })}
      />
      <div>
        <button className="w-full bg-amber-600 text-white p-2 rounded hover:bg-amber-500">
          Register
        </button>
      </div>
    </form>
  );
};

export default ProfileFormWithRHF;
