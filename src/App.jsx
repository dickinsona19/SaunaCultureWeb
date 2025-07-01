import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Information from './components/Information';
import BookingSection from './components/BookingSection';
import Gallery from './components/Gallery';
import FindUs from './components/FindUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Memberships from './components/Memberships';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

const HomePage = () => (
  <>
    <Hero />
    <Information />
    <BookingSection />
    <Gallery />
    <FindUs />
    <FAQ />
  </>
);

function App() {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/memberships" element={<Memberships />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;