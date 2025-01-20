import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import ExploreNorthIndia from './components/ExploreNorthIndia';
import ExploreSouthIndia from './components/ExploreSouthIndia';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Privacy from './components/Privacy';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <BrowserRouter>
  <Navigation/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/explorenorthindia' element={<ExploreNorthIndia/>}/>
        <Route path='/exploresouthindia' element={<ExploreSouthIndia/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>







       
     </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
