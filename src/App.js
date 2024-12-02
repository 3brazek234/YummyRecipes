import './App.css';
import { HashRouter ,Route, Routes, } from 'react-router-dom';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Contact from './components/Contact';
import Area from './components/Area';
import Ingrediants from './components/Ingrediants';
import Search from './components/Search';
import Categrous from './components/Categrous';
import Jarea from './components/Jarea';
import Details from './components/Details';
import Indetails from './components/Indetails';
import MainDetails from './components/MainDetails';
function App() {
  return ( <>
   <HashRouter>
    <SideBar/>
   <Routes>
   <Route path='/' element={<Main/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/area' element={<Area/>}/>
<Route path='/categrous' element={ <Categrous/>} />
<Route path='/ingrediants' element={ <Ingrediants/>} />
<Route path='/search' element={ <Search/>} />
<Route path='/jarea/:id' element={<Jarea/> }/>
<Route path='/jarea' element={<Jarea/> }/>
<Route path='/details/:demo' element={<Details/>}/>
<Route path='/maindetails/:meal' element={<MainDetails/>}/>

<Route path='/indetails/:intro' element={<Indetails/>}/>
  </Routes>
  </HashRouter>
  </>
 );
}

export default App;
