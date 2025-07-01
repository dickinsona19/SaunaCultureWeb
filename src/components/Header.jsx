import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled 
    ? props.theme.colors.backgroundOverlay 
    : props.theme.colors.backgroundOverlay};
  backdrop-filter: blur(20px);
  border-bottom: ${props => props.scrolled 
    ? `1px solid ${props.theme.colors.border}` 
    : 'none'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
  box-shadow: ${props => props.scrolled 
    ? `0 4px 20px ${props.theme.colors.shadow}` 
    : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.scrolled ? '15px 40px' : '20px 40px'};
  max-width: 1400px;
  margin: 0 auto;
  transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.02);
  }
  
  .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 600;
    color: ${props => props.theme.colors.textPrimary};
    letter-spacing: -0.5px;
  }
  
  .logo-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #8b7355, #a68b5b);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    box-shadow: 0 4px 12px rgba(139, 115, 85, 0.3);
    transition: all 0.3s ease;
  }
  
  &:hover .logo-icon {
    transform: rotate(5deg);
    box-shadow: 0 6px 20px rgba(139, 115, 85, 0.4);
  }

  @media (max-width: 768px) {
    .logo-text {
      font-size: 24px;
    }
    .logo-icon {
      width: 28px;
      height: 28px;
      font-size: 14px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 80%;
    height: 100vh;
    background: ${props => props.theme.colors.backgroundCard};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    box-shadow: -10px 0 30px ${props => props.theme.colors.shadow};
    gap: 30px;
  }
`;

const NavLink = styled.li`
  a {
    color: ${props => props.theme.colors.textMuted};
    font-weight: 500;
    font-size: 15px;
    padding: 8px 16px;
    border-radius: 6px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 16px;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #8b7355, #a68b5b);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover {
      color: #8b7355;
      background: rgba(139, 115, 85, 0.05);
      
      &::after {
        width: calc(100% - 32px);
      }
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 18px;
      padding: 15px 20px;
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(139, 115, 85, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 115, 85, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: none;
  color: ${props => props.theme.colors.textPrimary};
  font-size: 24px;
  z-index: 1001;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(139, 115, 85, 0.1);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileCTA = styled(CTAButton)`
  @media (max-width: 768px) {
    display: block;
    margin-top: 20px;
    padding: 15px 30px;
    font-size: 16px;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <Nav scrolled={scrolled}>
        <Logo to="/">
          <div className="logo-icon">🔥</div>
          <span className="logo-text">Sauna Culture</span>
        </Logo>
        
        <NavLinks isOpen={isOpen}>
          <NavLink>
            <Link to="/" onClick={handleNavClick}>Home</Link>
          </NavLink>
          <NavLink>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </NavLink>
          <NavLink>
            <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          </NavLink>
          <NavLink>
            <Link to="/memberships" onClick={handleNavClick}>Memberships</Link>
          </NavLink>
          <NavLink>
            <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
          </NavLink>
          <NavLink>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </NavLink>
          <MobileCTA onClick={() => scrollToSection('booking')}>
            Book Session
          </MobileCTA>
        </NavLinks>
        
        <HeaderActions>
          <ThemeToggle />
          <CTAButton onClick={() => scrollToSection('booking')}>
            Book Session
          </CTAButton>
        </HeaderActions>
        
        <MobileToggle onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MobileToggle>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;