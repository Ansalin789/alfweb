import { useEffect, useState } from "react";

const LoginPopup = ({ onClose }) => {
  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <h2>Login Form</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <button onClick={onClose}>Cancel</button>
      </div>

      <style jsx>{`
        .login-popup {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .login-popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
        }
        form {
          margin-bottom: 20px;
        }
        label {
          margin-right: 10px;
        }
        button {
          padding: 8px 12px;
          margin: 5px;
        }
      `}</style>
    </div>
  );
};

export default LoginPopup;
