import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import PlaceOrder from './Pages/PlaceOrder';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './Pages/Verify';

const App = () => {
	return (
		<div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
			<Navbar />
			<ToastContainer />
			<SearchBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/collection' element={<Collection />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/login' element={<Login />} />
				<Route path='/orders' element={<Orders />} />
				<Route path='/product/:productId' element={<Product />} />
				<Route path='/place-order' element={<PlaceOrder />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/verify' element={<Verify />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
