import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles.css';

import Footer from './components/Footer.jsx';

import { ContactProvider } from './context/ContactContext.jsx';
import { SelectTechnologyProvider } from './context/SelectTechnologyContext.jsx';

import Navbar from './components/Navbar.jsx';

import Home from './views/Home.jsx';
import Joa from './views/Joa.jsx';
import Challenges from './views/Challenges.jsx';
import Contact from './views/Contact.jsx';
import NotFound from './views/NotFound.jsx';

import DashboardMern from './views/DashboardMern.jsx';

export default function App() {

  return (

    <SelectTechnologyProvider>
      <ContactProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joa" element={<Joa />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboardmern" element={<DashboardMern />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContactProvider>
    </SelectTechnologyProvider>

  );
};