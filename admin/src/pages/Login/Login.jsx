import "./Login.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = ({ url }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate

  // Check if admin is logged in on component mount
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdminLoggedIn"); // Check local storage
    if (adminStatus === "true") {
      navigate("/add"); // Redirect immediately if logged in
    }
  }, [navigate]);

  const onLoginChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((loginData) => ({ ...loginData, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate login (replace with actual API call)
    if (
      loginData.email === "terry@gmail.com" &&
      loginData.password === "pass123"
    ) {
      localStorage.setItem("isAdminLoggedIn", "true"); // Store login status
      toast.success("Logged in successfully!");

      // Redirect to /add after successful login
      navigate("/add"); // Redirect to add page
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="add">
      <div className="login-popup">
        <div className="login-popup-container">
          <div className="login-popup-title">
            <h2>Login</h2>
          </div>
          <form onSubmit={handleLoginSubmit}>
            <div className="login-popup-inputs">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={onLoginChangeHandler}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={onLoginChangeHandler}
                  required
                />
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
