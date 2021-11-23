import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './ProfileSetting.css';

function ProfileSetting({ setname, setnim }) {
	const navigate = useNavigate();
	const [ nameInput, setNameInput ] = useState();
	const [ nimInput, setNimInput ] = useState();
	function getname(e) {
		setNameInput(e.target.value);
	}
	function getnim(e) {
		setNimInput(e.target.value);
	}
	const onSubmit = (e) => {
		e.preventDefault();
		setname(nameInput);
		setnim(nimInput);
		navigate('/profile');
	};
	return (
		<div>
			<h1>Edit Profile</h1>
			<div className="settingWrapper">
				<div>
					<p className="textInfo">Name</p>
					<div className="boxWrapper">
						<input className="boxInfo" type="text" onChange={getname} placeholder="Enter your name" />
					</div>
				</div>
				<div>
					<p className="textInfo">ID</p>
					<div className="boxWrapper">
						<input className="boxInfo" type="text" onChange={getnim} placeholder="Enter your ID" />
					</div>
				</div>
				<div className="saveBtnWrapper">
					<button className="saveBtn" onClick={onSubmit}>
						SAVE
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProfileSetting;
