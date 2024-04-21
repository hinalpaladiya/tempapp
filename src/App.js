import logo from './logo.svg';
import './App.css';
import TempApp from './components/TempApp';
import Todo from './components/Todo';
import Images from './components/Image';
import GalleryReact from './components/TabMenu/GalleryReact';
import Navbar from './components/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
const Home = () => {
	return (<>
		<Navbar />
		<section className='hero-section'>
			<p>Welcome to</p>
			<h1>Thapa Technical Home page</h1>
		</section>
	</>)
}
const About = () => {
	return (<>
		<Navbar />
		<section className='hero-section'>
			<p>Welcome to</p>
			<h1>Thapa Technical About page</h1>
		</section>
	</>)
}
const Service = () => {
	return (<>
		<Navbar />
		<section className='hero-section'>
			<p>Welcome to</p>
			<h1>Thapa Technical Service page</h1>
		</section>
	</>)
}
const Contact = () => {
	return (<>
		<Navbar />
		<section className='hero-section'>
			<p>Welcome to</p>
			<h1>Thapa Technical Contact page</h1>
		</section>
	</>)
}
function App() {
	return (
		<>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/service" element={<Service />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			{/* <Navbar /> */}
			{/* <GalleryReact /> */}
			{/* <Images/> */}
			{/* <Todo /> */}
			{/* <TempApp /> */}
		</>
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
