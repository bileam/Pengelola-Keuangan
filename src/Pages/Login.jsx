import { useState } from "react";
import "../style/login.css";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const from = location.state?.from?.pathname || "/dashboard";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin123") {
      sessionStorage.setItem("token", "dummy-token");
      navigate(from, { replace: true });
    } else {
      alert("Login gagal");
    }
  };
  return (
    <div className="box">
      <form onSubmit={handleSubmit} action="" className="">
        <h1 className="text-h1 text-center">
          <span>L</span>
          <span>o</span>
          <span>g</span>
          <span>i</span>
          <span>n</span>
        </h1>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
          className=""
        />
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
          className=""
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
