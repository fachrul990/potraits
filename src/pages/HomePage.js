import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Pics from '../components/Pics';
import { Loader } from '../components/Loader';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function HomePage({ getRandPics, detail, fetch }) {
	function toDetail(pic) {
		detail(pic);
	}

	return (
		<div>
			<h1>Discover</h1>

			<InfiniteScroll dataLength={getRandPics.length} next={fetch} hasMore={true} loader={<Loader />}>
				<div className="wrapperboard">
					<div className="containerboard">
						{getRandPics.map((pic) => {
							return (
								<Fragment>
									<Link onClick={() => toDetail(pic)} to={`/details`}>
										<Pics url={pic.urls.regular} key={pic.id} />
									</Link>
								</Fragment>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
		</div>
	);
}

export default HomePage;
