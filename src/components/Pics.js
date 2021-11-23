import React from 'react';
import './Pics.css';
// import { useNavigate } from 'react-routenpr-dom';

function Pics({ url, key }) {
	// let navigate = useNavigate();
	// const toDetailPage = () => {
	// 	navigate('/details', { state: { name: name, bio: bio, desc: desc } });
	// };
	return (
		<div className="wrapperpic">
			<div className="containerpic">
				<img src={url} key={key} alt="pic" />
			</div>
		</div>
	);
}

export default Pics;
