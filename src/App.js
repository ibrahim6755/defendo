import './App.css';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from './components/announcement-bar/AnnouncementBar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <AnnouncementBar />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
