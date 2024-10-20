import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const Contact = () => {
	return (
		<div>
			<div className='text-center text-2xl pt-10 border-t'>
				<Title text1={'CONTACT'} text2={'US'} />
			</div>

			<div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
				<img src={assets.contact_img} alt='' className='w-full md:max-w-[480px]' />
				<div className='flex flex-col justify-center items-start gap-6'>
					<p className='font-semibold text-xl text-gray-600'>Our Store</p>
					<p className='text-gray-500'>
						135489 Second Street Station <br /> villa 452 , Washington ,USA
					</p>
					<p className='text-gray-500'>
						Tel: (+1) 125-1154152 <br /> Email:usadev@gmail.com
					</p>
					<p className='font-semibold text-xl text-gray-600'>Careers at Often</p>
					<p className='text-gray-500'>Learn more about our teams and job openings</p>
					<button className='border border-black py-4 w-full hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
				</div>
			</div>
			<NewsLetterBox />
		</div>
	);
};

export default Contact;