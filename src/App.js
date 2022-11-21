import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './pages/about';
import Capstone from './pages/Capstone';
import Converter from './pages/converter';
import Infernoguard from './pages/infernoguard';
import Index from './pages/indexer';
import Animations from './pages/animations';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<About/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Infernoguard' element={<Infernoguard/>} />
        <Route path='/Capstone' element={<Capstone/>} />
        <Route path='/Converter' element={<Converter/>} />
        <Route path='/Animations' element={<Animations/>} />
        <Route path='/Index' element={<Index/>} />
    </Routes>
    </Router>
);
}
  
export default App;