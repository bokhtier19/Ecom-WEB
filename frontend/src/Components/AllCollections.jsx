import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const AllCollections = () => {
	const { products } = useContext(ShopContext);

	const [latestProducts, setlatestProducts] = useState([]);

	useEffect(() => {
		setlatestProducts(products);
	}, [products]);

	return (
		<div className='my-10'>
			<div className='text-center py-8 text-3xl'>
				<Title text1={'OUR'} text2={'COLLECTIONS'} />
				<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
			</div>

			{/* Rendering Products */}

			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
				{latestProducts.map((item, index) => (
					<ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
				))}
			</div>
		</div>
	);
};

export default AllCollections;
