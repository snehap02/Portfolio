import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Iconpack from './components/Iconpack';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='overflow-x-hidden'>
    <Navbar/>
    <Iconpack/>
    <Footer/>
    <Blog/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
