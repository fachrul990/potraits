import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './ProfileSetting.css';

function LoginPage() {
	const navigate = useNavigate();
	const [ username, setUsername ] = useState();
	const [ password, setPassword ] = useState();
	const user = 'fachrul';
	const pwd = '1234';
	function getuser(e) {
		setUsername(e.target.value);
	}
	function getpass(e) {
		setPassword(e.target.value);
	}
	function validation() {
		if (username === user && password === pwd) {
			navigate('/home');
		} else {
			alert('Unable to Login');
		}
	}
	const onSubmit = (e) => {
		e.preventDefault();
		validation();
	};
	return (
		<div>
			<h1>Login</h1>
			<div className="settingWrapper">
				<div>
					<p className="textInfo">Username</p>
					<div className="boxWrapper">
						<input className="boxInfo" type="text" onChange={getuser} placeholder="Enter your username" />
					</div>
				</div>
				<div>
					<p className="textInfo">Password</p>
					<div className="boxWrapper">
						<input
							className="boxInfo"
							type="password"
							onChange={getpass}
							placeholder="Enter your Password"
						/>
					</div>
				</div>
				<div className="saveBtnWrapper">
					<button className="saveBtn" onClick={onSubmit}>
						LOGIN
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
