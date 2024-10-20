import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
	return (
		<div>
			<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
				<div>
					<img src={assets.logo} alt='' className='mb-5 w-32' />
					<p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin egestas orci sem sit odio morbi nunc. Gravida nostra nunc purus netus per nascetur feugiat. Pellentesque congue placerat dignissim; nisi lectus ultricies. Sociosqu nulla ultrices a diam egestas libero semper.</p>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'>COMPANY</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>Home</li>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				<div>
					<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
					<ul className='flex flex-col gap-1 text-gray-600'>
						<li>+91-1234567890</li>
						<li>contact@often@gmail.com</li>
					</ul>
				</div>
			</div>

			<div>
				<hr />
				<p className=' text-sm py-5 text-center'>Copyright 2024@ often.com - All Rights Reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
