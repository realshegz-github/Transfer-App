import './App.css';
import Navbar from './Component/Nav/Navbar';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";

import Home from './Pages';
import Signup from './Pages/signup';
import Transaction from './Pages/transaction';
import Transfer from './Pages/homepage';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
  
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/transaction" element={<Transaction />}/>
          <Route exact path="/homepage" element={<Transfer/>}/>
          <Route exact path="/signup" element={<Signup />} />
      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
