import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import ProfileSetting from './pages/ProfileSetting';

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
	const [ pics, setPics ] = useState([]);
	const [ detail, setDetail ] = useState();
	const [ data, setData ] = useState([]);
	const [ query, setQuery ] = useState('');
	const [ page, setPage ] = useState(1);
	const [ name, setname ] = useState('');
	const [ nim, setnim ] = useState('');

	useEffect(() => {
		fetchRandPics();
	}, []);
	useEffect(
		() => {
			searchPics();
		},
		[ query ]
	);

	async function fetchRandPics(count = 10) {
		const apiRoot = 'https://api.unsplash.com';
		const accessKey = 'xZxNAcUi5wm7eWoCdWhNcu1t0xeWTItfMz3GoEWKjfw';

		await axios
			.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
			.then((res) => {
				setPics([ ...pics, ...res.data ]);
			})
			.catch((e) => {
				console.log(e);
			});
	}
	async function searchPics() {
		const apiRoot = 'https://api.unsplash.com';
		const accessKey = 'xZxNAcUi5wm7eWoCdWhNcu1t0xeWTItfMz3GoEWKjfw';

		await axios
			.get(`${apiRoot}/search/photos/?client_id=${accessKey}&query=${query}&page=${page}`)
			.then((res) => {
				// setData(res.data.results);
				setData([ ...data, ...res.data.results ]);
			})
			.catch((e) => {
				console.log(e);
			});
		setPage(page + 1);
	}
	function getDetail(pics) {
		setDetail(pics);
	}
	function getQuery(data) {
		setQuery(data);
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />
				<Route
					path="/home"
					exact
					element={<HomePage getRandPics={pics} detail={getDetail} fetch={fetchRandPics} />}
				/>
				<Route path="/details" element={<DetailPage detailPics={detail} />} />
				<Route
					path="/search"
					exact
					element={
						<SearchPage
							query={getQuery}
							getPics={data}
							detail={getDetail}
							fetch={searchPics}
							setData={setData}
						/>
					}
				/>
				<Route path="/profile" element={<ProfilePage nama={name} nim={nim} />} />
				<Route path="/profilesetting" element={<ProfileSetting setname={setname} setnim={setnim} />} />
			</Routes>
			<footer>
				<NavLink to="/home" className="iconWrapper">
					<AiOutlineHome size={25} />
				</NavLink>
				<NavLink to="/search" className="iconWrapper">
					<AiOutlineSearch size={25} />
				</NavLink>
				<NavLink to="/profile" className="iconWrapper">
					<AiOutlineUser size={25} />
				</NavLink>
			</footer>
			)
		</BrowserRouter>
	);
}

export default App;
