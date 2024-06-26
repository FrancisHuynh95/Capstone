import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import { lightModeStyle, darkModeStyle } from "../Navigation/darkMode";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [first_name, setFirst_Name] = useState("");
	const [last_name, setLast_Name] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password, first_name, last_name));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
		<div className="signupModal">
			<h1 className="modalH1" style={lightModeStyle}>Sign Up</h1>
			<form onSubmit={handleSubmit} id="signupForm">
				<ul>
					{errors.map((error, idx) => (
						<li className="errors" key={idx}>{error}</li>
					))}
				</ul>
				<label style={lightModeStyle}>
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label style={lightModeStyle}>
					Username
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label style={lightModeStyle}>
					Password
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label style={lightModeStyle}>
					Confirm Password
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<label style={lightModeStyle}>
					First Name
					<input
						type="text"
						value={first_name}
						onChange={(e) => setFirst_Name(e.target.value)}
						required
					/>
				</label>
				<label style={lightModeStyle}>
					Last Name
					<input
						type="text"
						value={last_name}
						onChange={(e) => setLast_Name(e.target.value)}
						required
					/>
				</label>
				<button className="signupButton" type="submit">Sign Up</button>
			</form>
			</div>
		</>
	);
}

export default SignupFormModal;
