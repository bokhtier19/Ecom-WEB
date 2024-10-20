import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';

const Verify = () => {
	const { navigate, token, setCartItems, backendURL } = useContext(ShopContext);
	const [searchParams, setSearchParams] = useSearchParams();

	const success = searchParams.get('success');
	const orderId = searchParams.get('orderId');

	const verifyPayment = async (params) => {
		try {
			if (!token) {
				return null;
			}

			const response = await axios.post(backendURL + '/api/order/verifyStripe', { success, orderId }, { headers: { token } });

			if (response.data.success) {
				setCartItems({});
				navigate('/orders');
			} else {
				navigate('/cart');
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	useEffect(() => {
		verifyPayment();
	}, [token]);

	return <div></div>;
};

export default Verify;
