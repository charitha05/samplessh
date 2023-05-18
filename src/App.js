import React from 'react';
import './App.css';
import Navbar from './pages/Layout';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/Home';
import Faculty from './pages/Faculty';
import Exam from './pages/Exam';
import Allotment from './pages/Allotment';
import Lab from './pages/Lab';
import Logout from './pages/Logout';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/Faculty' element={<Faculty/>} />
		<Route path='/Exam' element={<Exam/>} />
		<Route path='/Allotment' element={<Allotment/>} />
		<Route path='/Lab' element={<Lab/>} />
		<Route path='/Logout' element={<Logout/>} />
	</Routes>
	</Router>
);
}

export default App;
