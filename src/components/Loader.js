import React from 'react';
import './Loader.css';
export const Loader = () => {
	return (
		<div className="Loading">
			<div class="lds-ellipsis">
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};
