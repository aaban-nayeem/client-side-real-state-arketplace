import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:8000/api/v1/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  console.log(formData);

  return (
    <section className="mx-auto max-w-lg p-3">
      <h1 className="my-7 text-center text-3xl font-semibold">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id="username"
          placeholder="username"
          className="rounded-lg border p-3"
          onChange={handleChange}
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="email"
          className="rounded-lg border p-3"
          onChange={handleChange}
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="password"
          className="rounded-lg border p-3"
          onChange={handleChange}
        />

        <button className="rounded-lg bg-blue-500 p-3 text-white opacity-80 hover:opacity-95">
          Sign Up
        </button>
      </form>
      <section className="mt-5 flex gap-2">
        <p className="">Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </section>
    </section>
  );
};

export default SignUp;
