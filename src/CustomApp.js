import './App.css';
import Create from './create';
import Read from './read';
import Update from './update';
import Home from './home';
import Layout from './layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function CustomApp () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="create" element={<Create />} />
					<Route path="read" element={<Read />} />
					<Route path="update" element={<Update />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default CustomApp;
