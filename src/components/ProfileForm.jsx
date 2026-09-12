import React, { useState } from "react";

const FormInputGroup = ({
  label,
  placeholder,
  type,
  error,
  name,
  onChange,
  value,
}) => {
  return (
    <div>
      <label htmlFor="" className="text-sm">
        {label}
      </label>
      <input
        type={type ?? "text"}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-slate-300 p-2 mt-1 text-sm rounded"
        placeholder={placeholder}
      />
      <p className="text-sm text-red-500">{error}</p>
    </div>
  );
};

const ProfileForm = () => {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setForm((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (form.phoneNumber.length != 11 && form.phoneNumber.length != 14) {
      newErrors.phoneNumber = "Phone number must be exactly 11 or 14 digits";
    }

    if (form.password.trim().length < 8) {
      newErrors.password = "Password must be up to 8 characters";
    }

    if (form.passwordConfirmation.trim() != form.password.trim()) {
      newErrors.passwordConfirmation = "Password confirmation doesn't match";
    }

    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors);
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Submitted:", form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-10">
        <p className="text-2xl font-bold text-cyan-500">
          🎉 Welcome, {form.name}!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
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
        name="name"
        placeholder="Ayomide Oludare"
        value={form.name}
        onChange={handleChange}
        type="name"
        error={errors.name}
      />
      <FormInputGroup
        label="Email"
        name="email"
        placeholder="yourname@example.com"
        value={form.email}
        onChange={handleChange}
        type="email"
        error={errors.email}
      />
      <FormInputGroup
        label="Phone Number"
        name="phoneNumber"
        placeholder="07040296395"
        value={form.phoneNumber}
        onChange={handleChange}
        type="tel"
        error={errors.phoneNumber}
      />
      <FormInputGroup
        label="Password"
        name="password"
        value={form.password}
        placeholder="Enter your password"
        onChange={handleChange}
        type="password"
        error={errors.password}
      />
      <FormInputGroup
        label="Password Confirmation"
        name="passwordConfirmation"
        value={form.passwordConfirmation}
        placeholder="Confirm your password"
        onChange={handleChange}
        type="password"
        error={errors.passwordConfirmation}
      />
      <div>
        <button className="w-full bg-amber-600 text-white p-2 rounded hover:bg-amber-500">
          Register
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;


