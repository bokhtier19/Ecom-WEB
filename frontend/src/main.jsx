import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Context/ShopContext.jsx';
import { products } from './assets/assets.js';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ShopContextProvider value={products}>
			<App />
		</ShopContextProvider>
	</BrowserRouter>
);
