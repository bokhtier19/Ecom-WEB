import React from 'react';
import { assets } from '../assets/assets';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
	const [image1, setImage1] = useState(false);
	const [image2, setImage2] = useState(false);
	const [image3, setImage3] = useState(false);
	const [image4, setImage4] = useState(false);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('Men');
	const [subCategory, setSubCategory] = useState('Topwear');
	const [bestseller, setBestseller] = useState(false);
	const [sizes, setSizes] = useState([]);

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();

			formData.append('name', name);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('category', category);
			formData.append('subCategory', subCategory);
			formData.append('bestseller', bestseller);
			formData.append('sizes', JSON.stringify(sizes));

			image1 && formData.append('image1', image1);
			image2 && formData.append('image2', image2);
			image3 && formData.append('image3', image3);
			image4 && formData.append('image4', image4);

			const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } });

			if (response.data.success) {
				toast.success(response.data.message);
				setName('');
				setDescription('');
				setCategory('Men');
				setSubCategory('Topwear');
				setSizes([]);
				setPrice('');
				setBestseller(false);

				setImage1(false);
				setImage2(false);
				setImage3(false);
				setImage4(false);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			toast.error(error.message);
			console.log(error);
		}
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler} className='flex flex-col gap-2'>
				{/* ---------------------- The Images ------------------ */}
				<div>
					<p>Upload Image</p>
					<div className='flex gap-2 mt-2'>
						<label htmlFor='image1'>
							<img src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='' className='w-20 hover:cursor-pointer' />
							<input
								type='file'
								id='image1'
								hidden
								onChange={(e) => {
									setImage1(e.target.files[0]);
								}}
							/>
						</label>
						<label htmlFor='image2'>
							<img src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' className='w-20 hover:cursor-pointer' />
							<input
								type='file'
								id='image2'
								hidden
								onChange={(e) => {
									setImage2(e.target.files[0]);
								}}
							/>
						</label>
						<label htmlFor='image3'>
							<img src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' className='w-20 hover:cursor-pointer' />
							<input
								type='file'
								id='image3'
								hidden
								onChange={(e) => {
									setImage3(e.target.files[0]);
								}}
							/>
						</label>
						<label htmlFor='image4'>
							<img src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt='' className='w-20 hover:cursor-pointer' />
							<input
								type='file'
								id='image4'
								hidden
								onChange={(e) => {
									setImage4(e.target.files[0]);
								}}
							/>
						</label>
					</div>
				</div>
				{/* -------------------------Product name and description ------------------------------ */}
				<div className='flex flex-col gap-2'>
					<p>Product name</p>
					<input
						type='text'
						onChange={(e) => {
							setName(e.target.value);
						}}
						value={name}
						className='py-2 border px-2 rounded-md border-gray-400 w-full sm:w-[50%]'
						placeholder='Type Here'
					/>
				</div>
				<div className='flex flex-col gap-2'>
					<p>Product Description</p>
					<textarea
						type='text'
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						value={description}
						className='py-2 border px-2 rounded-md border-gray-400 w-full sm:w-[50%]'
						placeholder='Write description here'
					/>
				</div>

				{/* ------------------------------- categories and prices ------------------------- */}
				<div className='flex gap-6 flex-col sm:flex-row w-[50%]'>
					<div className='flex flex-col flex-1 gap-2'>
						<p>Product Category</p>
						<select
							name='Category'
							onChange={(e) => {
								setCategory(e.target.value);
							}}
							className='py-2 border px-2 rounded-md border-gray-400'>
							<option value='Men'>Men</option>
							<option value='Women'>Women</option>
							<option value='Kids'>Kids</option>
						</select>
					</div>
					<div className='flex flex-col flex-1 gap-2'>
						<p>Sub Category</p>
						<select
							name='Category'
							onChange={(e) => {
								setSubCategory(e.target.value);
							}}
							className='py-2 border px-2 rounded-md border-gray-400'>
							<option value='Topwear'>Topwear</option>
							<option value='Bottomwear'>Bottomwear</option>
							<option value='Winterwear'>Winterwear</option>
						</select>
					</div>
					<div className='flex flex-col flex-1 gap-2'>
						<p>Product Price</p>
						<input
							type='number'
							onChange={(e) => {
								setPrice(e.target.value);
							}}
							value={price}
							className='py-2 border px-2 rounded-md border-gray-400 w-24'
							placeholder='33'
						/>
					</div>
				</div>
				{/* --------------------------product sizes------------------------------- */}
				<div className='flex flex-col gap-2'>
					<p>Product Sizes</p>
					<div className='flex gap-4 text-gray-800'>
						<div onClick={() => setSizes((prev) => (prev.includes('S') ? prev.filter((item) => item !== 'S') : [...prev, 'S']))}>
							<p className={`${sizes.includes('S') ? 'bg-pink-100 border border-pink-400' : 'bg-slate-200'}  cursor-pointer px-4 py-2`}>S</p>
						</div>
						<div onClick={() => setSizes((prev) => (prev.includes('M') ? prev.filter((item) => item !== 'M') : [...prev, 'M']))}>
							<p className={`${sizes.includes('M') ? 'bg-pink-100 border border-pink-400' : 'bg-slate-200'}  cursor-pointer px-4 py-2`}>M</p>
						</div>
						<div onClick={() => setSizes((prev) => (prev.includes('L') ? prev.filter((item) => item !== 'L') : [...prev, 'L']))}>
							<p className={`${sizes.includes('L') ? 'bg-pink-100 border border-pink-400' : 'bg-slate-200'}  cursor-pointer px-4 py-2`}>L</p>
						</div>
						<div onClick={() => setSizes((prev) => (prev.includes('XL') ? prev.filter((item) => item !== 'XL') : [...prev, 'XL']))}>
							<p className={`${sizes.includes('XL') ? 'bg-pink-100 border border-pink-400' : 'bg-slate-200'}  cursor-pointer px-4 py-2`}>XL</p>
						</div>
						<div onClick={() => setSizes((prev) => (prev.includes('XXL') ? prev.filter((item) => item !== 'XXL') : [...prev, 'XXL']))}>
							<p className={`${sizes.includes('XXL') ? 'bg-pink-100 border border-pink-400' : 'bg-slate-200'}  cursor-pointer px-4 py-2`}>XXL</p>
						</div>
					</div>
				</div>
				{/* -------------------------bestseller ? --------------------- */}
				<div className='flex gap-4'>
					<input onChange={() => setBestseller((prev) => !prev)} type='checkbox' id='bestseller' checked={bestseller} />
					<label htmlFor='bestseller'>Add to Bestseller</label>
				</div>
				<button className='bg-black text-white sm:w-[50%] py-2 mt-2'>Add</button>
			</form>
		</div>
	);
};

export default Add;
