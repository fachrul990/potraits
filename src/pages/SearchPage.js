import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import './SearchPage.css';
import { Loader } from '../components/Loader';
import Pics from '../components/Pics';
import { Fragment } from 'react';

function SearchPage({ query, getPics, detail, fetch, setData }) {
	const [ input, setinput ] = useState('');

	function toDetail(pic, e) {
		detail(pic);
	}

	const onSearchSubmit = (e) => {
		e.preventDefault();
		query(input);
	};
	function getquery(e) {
		setinput(e.target.value);
		setData([]);
	}
	return (
		<Fragment>
			<h1>Search</h1>
			<div className="searchWrapper">
				<div className="searchBarWrapper">
					<div className="iconButton">
						<AiOutlineSearch size={20} />
					</div>
					<form>
						<input onChange={getquery} type="text" placeholder="Search photos" />
						<button onClick={onSearchSubmit} type="submit" />
					</form>
				</div>
			</div>
			<InfiniteScroll dataLength={getPics.length} next={fetch} hasMore={true} loader={<Loader />}>
				<div className="wrappersearch">
					<div className="containersearch">
						{getPics.map((pic, index) => {
							return (
								<Link key={index} onClick={(e) => toDetail(pic, e)} to={`/details`}>
									<Pics url={pic.urls.regular} />
								</Link>
							);
						})}
					</div>
				</div>
			</InfiniteScroll>
		</Fragment>
	);
}

export default SearchPage;
