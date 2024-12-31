import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppProvider";

const Login = ({ setIsLoggedIn }) => {
  const { name, setName, password, setPassword, email, setEmail } = useContext(AppContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setError("");

    setIsLoggedIn(true); 
    navigate("/"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen border bg-gray-50 bg-cover  bg-[url('./images/news.jpg')] " >
      <div className="bg-blue-500 p-10 rounded-xl bg-opacity-40 backdrop-blur-md border border-blue-300 shadow-lg" >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-50">Login</h1>
        <div>
          <input
            type="text"
            value={name }
            placeholder="Name"
            className="bg-blue-300 outline-none rounded p-2 w-60"
            onChange={(e) => setName(e.target.value)}
            aria-label="Name"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password }
            placeholder="Password"
            className="bg-blue-300 outline-none rounded p-2 w-60"
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="bg-blue-200 outline-none rounded p-2 w-60"
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="bg-blue-400 border border-blue-300 text-white rounded p-2 hover:bg-blue-600"
        >
          Submit Now
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
