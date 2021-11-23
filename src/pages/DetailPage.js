import React, { Fragment } from 'react';
import './DetailPage.css';

function DetailPage({ detailPics }) {
	return (
		<Fragment>
			<div className="wrapper">
				<div className="imageContainer">
					<img src={detailPics.urls.regular} alt="pic" />
				</div>
				<div className="descText">{detailPics.description || 'This is a great picture'}</div>
				<div className="bio">by {detailPics.user.name}</div>
				<div className="bioDetail">
					<i>{detailPics.user.bio || 'I love arts'}</i>
				</div>
			</div>
		</Fragment>
	);
}

export default DetailPage;
