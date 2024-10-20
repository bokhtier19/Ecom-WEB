import axios from 'axios';
import React, { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(backendUrl + '/api/user/admin', { email, password });

			if (response.data.success) {
				setToken(response.data.token);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return (
		<div className='min-h-screen flex justify-center items-center'>
			<div className='flex flex-col items-center w-[90%] md:max-w-[30%] m-auto gap-4 text-gray-800 bg-white rounded-lg p-10'>
				<h1 className='text-2xl prata-regular'>Admin Panel</h1>
				<form action='' onSubmit={onSubmitHandler} className='flex flex-col gap-4 w-full'>
					<div>
						<p className='text-sm'>Email Address</p>
						<input
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
							className='w-full px-3 py-2 border border-gray-800 rounded'
							type='email'
							placeholder='your@email.com'
							required
						/>
					</div>
					<div>
						<p>Password</p>
						<input
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
							type='password'
							placeholder='Enter password'
							className='w-full px-3 py-2 border border-gray-800 rounded'
							required
						/>
					</div>
					<button type='submit' className='bg-black text-white py-3 w-full tracking-widest rounded'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
