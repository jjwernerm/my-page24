import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles.css';

import Footer from './components/Footer.jsx';

import { ContactProvider } from './context/ContactContext.jsx';

import Navbar from './components/Navbar.jsx';

import Home from './views/Home.jsx';
import Joa from './views/Joa.jsx';
import Challenges from './views/Challenges.jsx';
import Contact from './views/Contact.jsx';
import JavascriptChallenges from './views/JavascriptChallenges.jsx';
import ReactChallenges from './views/ReactChallenges.jsx';
import NotFound from './views/NotFound.jsx';

export default function App() {

  return (
    <>

      <ContactProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joa" element={<Joa />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/javascriptchallenges" element={<JavascriptChallenges />} />
            <Route path="/reactchallenges" element={<ReactChallenges />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContactProvider>

    </>
  );
};