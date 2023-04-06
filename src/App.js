import './App.css';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
   <Routes>
     <Route path='/' element={ <Home/>}/>
     <Route path='/contact' element={ <ContactUs/>}/>
   </Routes>
 </Router>
  );
}

export default App;
