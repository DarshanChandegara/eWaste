
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Donation from './components/Donation';
import Hero from './components/Hero';
import Incomestatus from './components/Incomestatus';
import Mission from './components/Mission';
import Underprocess from './components/Underprocess';
import Notapproved from './Notapproved';
import Services from './Services';
import Login from './components/Login';
import Register from './components/Register';

// import Services from './Services';

function App() {
  return (
    <>

    

      <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/mission' element={<Mission></Mission>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/underprocess' element={<Underprocess></Underprocess>}></Route>
        <Route path='/notapproved' element={<Notapproved></Notapproved>}></Route>
        <Route path='/incomestatus' element={<Incomestatus></Incomestatus>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/services' element={<Services></Services>}></Route>

      </Routes>







    </>
  );
}

export default App;
