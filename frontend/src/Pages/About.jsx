import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const About = () => {
	return (
		<div>
			<div className='text-2xl text-center pt-8 border-t'>
				<Title text1={'ABOUT'} text2={'US'} />
			</div>

			<div className='my-10 flex flex-col md:flex-row gap-16'>
				<img src={assets.about_img} alt='' className='w-full md:max-w-[450px]' />
				<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque suspendisse eget venenatis tellus mollis massa. Mi purus sit dui eleifend lacinia integer tempus. Integer fermentum elementum congue metus augue praesent. Aptent erat porta lacus lobortis sodales est porta dui suspendisse? Non dis viverra venenatis gravida orci. Nulla aenean in pellentesque pharetra, lacus ridiculus praesent. Pellentesque dictumst commodo parturient ultricies fermentum sodales. Aenean nec praesent viverra conubia eros taciti taciti congue ac.</p>
					<b className='text-gray-800'>Our Mission</b>
					<p>Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque suspendisse eget venenatis tellus mollis massa. Mi purus sit dui eleifend lacinia integer tempus. Integer fermentum elementum congue metus augue praesent. Aptent erat porta lacus lobortis sodales est porta dui suspendisse? Non dis viverra venenatis gravida orci. Nulla aenean in pellentesque pharetra, lacus ridiculus praesent. Pellentesque dictumst commodo parturient ultricies fermentum sodales. Aenean nec praesent viverra conubia eros taciti taciti congue ac.</p>
				</div>
			</div>

			<div className='text-xl py-4'>
				<Title text1={'WHY'} text2={'CHOOSE US ?'} />
			</div>

			<div className='flex flex-col md:flex-row text-sm mb-20'>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Quality Assurance:</b>
					<p className='text-gray-600'>Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque suspendisse eget venenatis tellus mollis massa. Mi purus sit dui eleifend lacinia integer tempus. Integer fermentum elementum congue metus augue praesent. Aptent erat porta lacus lobortis sodales est porta dui suspendisse? Non dis viverra venenatis gravida orci. Nulla aenean in pellentesque pharetra, lacus ridiculus praesent. Pellentesque dictumst commodo parturient ultricies fermentum sodales. Aenean nec praesent viverra conubia eros taciti taciti congue ac.</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Convenience:</b>
					<p className='text-gray-600'>Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque suspendisse eget venenatis tellus mollis massa. Mi purus sit dui eleifend lacinia integer tempus. Integer fermentum elementum congue metus augue praesent. Aptent erat porta lacus lobortis sodales est porta dui suspendisse? Non dis viverra venenatis gravida orci. Nulla aenean in pellentesque pharetra, lacus ridiculus praesent. Pellentesque dictumst commodo parturient ultricies fermentum sodales. Aenean nec praesent viverra conubia eros taciti taciti congue ac.</p>
				</div>
				<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
					<b>Exceptional Customer Service:</b>
					<p className='text-gray-600'>Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque suspendisse eget venenatis tellus mollis massa. Mi purus sit dui eleifend lacinia integer tempus. Integer fermentum elementum congue metus augue praesent. Aptent erat porta lacus lobortis sodales est porta dui suspendisse? Non dis viverra venenatis gravida orci. Nulla aenean in pellentesque pharetra, lacus ridiculus praesent. Pellentesque dictumst commodo parturient ultricies fermentum sodales. Aenean nec praesent viverra conubia eros taciti taciti congue ac.</p>
				</div>
			</div>

			<NewsLetterBox />
		</div>
	);
};

export default About;
