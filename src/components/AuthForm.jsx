import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/AuthForm.css";

export default function AuthForm() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="close-btn">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            ×
          </button>
        </div>

        <h1 className="logo">gradnext</h1>
        <h2>{isLogin ? "Log In" : "Sign Up"}</h2>

        {isLogin ? (
          <p className="sub-text">
            New to this site? <span onClick={toggleMode}>Sign Up</span>
          </p>
        ) : null}

        <form className="auth-form">
          {!isLogin && (
            <>
              <label>First Name *</label>
              <input type="text" placeholder="First Name" />
              <label>Last Name *</label>
              <input type="text" placeholder="Last Name" />
            </>
          )}

          <label>Email *</label>
          <input type="email" placeholder="Email" />

          <label>Password *</label>
          <input type="password" placeholder="Password" />

          {isLogin && (
            <a href="#" className="forgot-link">
              Forgot password?
            </a>
          )}

          <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>
        </form>

        {isLogin ? (
          <>
            <p className="divider-text">or Log in with</p>
            <div className="social-buttons">
              <button className="google-btn">Log in with Google</button>
              <button className="facebook-btn">Log in with Facebook</button>
            </div>
          </>
        ) : (
          <p className="footer-text">
            Already a member? <span onClick={toggleMode}>Log In</span>
          </p>
        )}
      </div>
    </div>
  );
}
