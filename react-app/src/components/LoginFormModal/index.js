import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import { lightModeStyle, darkModeStyle } from "../Navigation/darkMode"
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(["errors : No such user exists"]);
    } else {
      closeModal()
    }
  };

  const demoUser = async () => {
    const email = 'demo@aa.io'
    const password = 'password'
    await dispatch(login(email, password));
    closeModal()
    history.push('/')
  }

  return (
    <>
      <div className="loginModal">
        <form onSubmit={handleSubmit}>
          <h1 style={lightModeStyle} className="modalH1">Log In</h1>
          <ul>
            {errors.map((error, idx) => (
              <li className="errors" key={idx}>{error.split(":")[1]}</li>
            ))}
          </ul>
          <div className="userInputs">
            <div style={lightModeStyle} className="Email">
              Email:
                <input
                  className="Input"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
            </div>
            <div className="Password" style={lightModeStyle}>
              Password:
                <input
                  className="Input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
            </div>
          </div>
          <div className="modalButtons">
            <button className="loginSubmitButton" type="submit">Log In</button>
            <button className="demoUserButton" onClick={() => demoUser()}>Demo User</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginFormModal;
