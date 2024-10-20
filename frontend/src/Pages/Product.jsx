import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {
	const { productId } = useParams();

	const { products, currency, addToCart, navigate } = useContext(ShopContext);
	const [productData, setProductData] = useState(false);
	const [productImage, setProductImage] = useState('');
	const [size, setSize] = useState('');

	const fetchProductData = async () => {
		products.map((item) => {
			if (item._id === productId) {
				setProductData(item);
				setProductImage(item.image[0]);
				return null;
			}
		});
	};

	useEffect(() => {
		fetchProductData();
	}, [productId, products]);

	return productData ? (
		<div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
			{/*-------------- Product Data-------------- */}

			<div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
				{/*------------ Product Images-------------- */}

				<div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
					<div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
						{productData.image.map((item, index) => (
							<img onClick={() => setProductImage(item)} key={index} src={item} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
						))}
					</div>

					<div className='w-full sm:w-[80%]'>
						<img className='w-full h-auto' src={productImage} alt='' />
					</div>
				</div>

				{/* -----------Product Info --------------- */}

				<div className='flex-1'>
					<h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
					<div className='flex items-center gap-1 mt-2'>
						<img src={assets.star_icon} alt='' className='w-3 5' />
						<img src={assets.star_icon} alt='' className='w-3 5' />
						<img src={assets.star_icon} alt='' className='w-3 5' />
						<img src={assets.star_icon} alt='' className='w-3 5' />
						<img src={assets.star_dull_icon} alt='' className='w-3 5' />
						<p className='pl-2'>(142)</p>
					</div>
					<p className='mt-5 text-3xl font-medium'>
						{currency}
						{productData.price}
					</p>
					<p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
					<div className='flex flex-col gap-4 my-8 '>
						<p>Select Size</p>
						<div className='flex gap-2'>
							{productData.sizes.map((item, index) => (
								<button
									className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
									key={index}
									onClick={() => {
										setSize(item);
									}}>
									{item}
								</button>
							))}
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<button
							className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 tracking-widest'
							onClick={() => {
								addToCart(productData._id, size);
							}}>
							ADD TO CART
						</button>

						<button onClick={() => navigate('/cart')} className='bg-black text-white px-9 py-3 text-sm active:bg-gray-700 tracking-widest'>
							GO TO CART
						</button>
					</div>

					<hr className='mt-8 sm:4/5' />
					<div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
						<p>100% Original Product.</p>
						<p>Cash On Delivery is available on this product.</p>
						<p>Easy return and exchange policy within 7 days.</p>
					</div>
				</div>
			</div>

			{/*----------------------- Descriptions and Review Section --------------------------*/}
			<div className='mt-20'>
				<div className='flex'>
					<b className='border px-5 py-3 text-sm'>Description</b>
					<p className='border px-5 py-3 text-sm'>Reviews(122)</p>
				</div>
				<div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>

			{/*--------------Display Related Products----------------- */}

			<RelatedProducts category={productData.category} subCategory={productData.subCategory} />
		</div>
	) : (
		<div className='opacity-0'></div>
	);
};

export default Product;
