import './App.css';
import ContactUs from './components/pages/ContactUs/ContactUs';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnnouncementBar from './components/announcement-bar/AnnouncementBar';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import NewReleases from './components/pages/NewReleases/NewReleases';
import Grid4 from './components/grid/Grid4';
import Chains from './components/pages/Chains/Chains';
import FAQs from './components/pages/FAQs/FAQs';
import ProductDescription from './components/pages/Product description/ProductDescription';

function App() {
  return (
    <Router>
      <AnnouncementBar />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/new-releases' element={<NewReleases />} />
        <Route path='/grid4*4' element={<Grid4/>} />
        <Route path='/chains' element={<Chains/>} />
        <Route path='/faq' element={<FAQs/>} />
        <Route path='/product=description' element={<ProductDescription/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
