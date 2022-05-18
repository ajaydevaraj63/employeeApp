import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Empregister from './components/Empregister';
import Search from './components/Search';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' exact element={<Empregister/>}></Route>
<Route path='/s' exact element={<Search/>}></Route>
<Route path='/v' exact element={<View/>}></Route>
    </Routes>
    
    
    </BrowserRouter>
  </>
  );
}

export default App;
