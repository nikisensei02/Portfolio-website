import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe/AboutMe';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Projects from './components/project/Projects';
import Social from './components/social/Social';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Social/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/aboutMe" element={<AboutMe/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
