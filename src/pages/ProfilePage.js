import React from 'react';
import profileimg from '../assets/profile.jpg';
import { IoSettingsOutline } from 'react-icons/io5';
import './ProfilePage.css';
import { Link } from 'react-router-dom';

function ProfilePage({ nama, nim }) {
	return (
		<div>
			<div className="settingIconWrapper">
				<Link className="settingIcon" to={`/profilesetting`}>
					<IoSettingsOutline size={25} />
				</Link>
			</div>
			<div className="wrapperProfile">
				<div className="profileContainer">
					<img src={profileimg} alt="profile" />
				</div>
				<div className="profileInfo">
					<p>{nama || 'Fachrul'}</p>
					<p>{nim || '21120119130094'}</p>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
