import './App.css';
import { BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className=''>
    <BrowserRouter>
    <header className='w-full py-3'>
      <nav className='px-14 flex flex-col md:flex-row'>
        <h1>Kececi</h1>
        <div class="menu" >
        <NavLink to="/" className="px-3">Anasayfa</NavLink>
        <NavLink to="about" className="px-3">Hakkımızda</NavLink>
        <NavLink to="contact" className="px-3">Contact</NavLink>
        </div>
      </nav>
    </header>
    <main>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
