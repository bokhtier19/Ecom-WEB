import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
	return (
		<div className='flex justify-between items-centre py-2 px-[4%]'>
			<img src={assets.logo} alt='' className='w-[max(10%,80px)]' />
			<button
				className='bg-gray-600 text-white text-sm px-7 py-2 xl:py-2 rounded-full '
				onClick={() => {
					setToken('');
				}}>
				Logout
			</button>
		</div>
	);
};

export default Navbar;
