import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
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
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

const AppContent = () => {
  const theme = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
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
    </StyledThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;