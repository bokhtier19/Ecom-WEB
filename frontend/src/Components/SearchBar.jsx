import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
	const { search, setSearch, showSearchBar, setShowSearchBar } = useContext(ShopContext);
	const location = useLocation();
	const [isBarVisible, setIsBarVisible] = useState(false);

	useEffect(() => {
		if (location.pathname.includes('collection')) {
			setIsBarVisible(true);
		} else {
			setIsBarVisible(false);
		}
	}, [location]);

	return isBarVisible && showSearchBar ? (
		<div>
			<div className='border-t border-b bg-gray-50 text-center'>
				<div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
					<input type='text' value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />
					<img onClick={() => setShowSearchBar(true)} src={assets.search_icon} alt='' className='w-4' />
				</div>
				<img onClick={() => setShowSearchBar(false)} src={assets.cross_icon} className='inline w-3 cursor-pointer' alt='' />
			</div>
		</div>
	) : null;
};

export default SearchBar;
