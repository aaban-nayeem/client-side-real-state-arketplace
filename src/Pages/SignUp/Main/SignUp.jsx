import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/v1/signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
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

        <button
          disabled={loading}
          className="rounded-lg bg-blue-500 p-3 text-white opacity-80 hover:opacity-95"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <section className="mt-5 flex gap-2">
        <p className="">Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </section>
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
};

export default SignUp;
