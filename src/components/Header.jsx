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
  padding: ${props => props.scrolled ? '12px 40px' : '16px 40px'};
  max-width: 1400px;
  margin: 0 auto;
  transition: padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    padding: ${props => props.scrolled ? '10px 20px' : '12px 20px'};
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: scale(1.02);
  }
  
  .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: ${props => props.theme.colors.textPrimary};
    letter-spacing: -0.5px;
    
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
  
  .logo-icon {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #8b7355, #a68b5b);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    box-shadow: 0 3px 10px rgba(139, 115, 85, 0.3);
    transition: all 0.3s ease;
    
    @media (max-width: 480px) {
      width: 24px;
      height: 24px;
      font-size: 12px;
    }
  }
  
  &:hover .logo-icon {
    transform: rotate(5deg);
    box-shadow: 0 4px 15px rgba(139, 115, 85, 0.4);
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 32px;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  a {
    color: ${props => props.theme.colors.textMuted};
    font-weight: 500;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 6px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 12px;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, #8b7355, #a68b5b);
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    &:hover {
      color: #8b7355;
      background: rgba(139, 115, 85, 0.05);
      
      &::after {
        width: calc(100% - 24px);
      }
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 3px 10px rgba(139, 115, 85, 0.3);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
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
    box-shadow: 0 6px 20px rgba(139, 115, 85, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

const MobileMenuContainer = styled.div`
  display: none;
  
  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

const MobileToggle = styled.button`
  background: none;
  color: ${props => props.theme.colors.textPrimary};
  font-size: 20px;
  z-index: 1001;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  
  &:hover {
    background: rgba(139, 115, 85, 0.1);
    transform: scale(1.05);
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-100%'};
  width: 85%;
  max-width: 400px;
  height: 100vh;
  background: ${props => props.theme.colors.backgroundCard};
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  box-shadow: -10px 0 30px ${props => props.theme.colors.shadow};
  display: flex;
  flex-direction: column;
  padding: 80px 0 40px;
  border-left: 1px solid ${props => props.theme.colors.border};
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 30px;
`;

const MobileNavLink = styled.li`
  a {
    display: block;
    color: ${props => props.theme.colors.textMuted};
    font-weight: 500;
    font-size: 16px;
    padding: 16px 20px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid transparent;
    
    &:hover {
      color: #8b7355;
      background: rgba(139, 115, 85, 0.05);
      border-color: rgba(139, 115, 85, 0.1);
    }
  }
`;

const MobileActions = styled.div`
  padding: 30px;
  border-top: 1px solid ${props => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileCTAButton = styled(CTAButton)`
  width: 100%;
  padding: 16px 24px;
  font-size: 15px;
  justify-content: center;
`;

const MobileThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (min-width: 969px) {
    display: none;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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

  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Nav scrolled={scrolled}>
          <Logo to="/" onClick={() => setIsOpen(false)}>
            <img src="/logo.svg" alt="Sauna Culture Logo" className="logo-icon" />
            <span className="logo-text">Sauna Culture</span>
          </Logo>
          
          <DesktopNav>
            <NavLinks>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
              <NavLink>
                <a href="#about" onClick={() => scrollToSection('about')}>About</a>
              </NavLink>
              <NavLink>
                <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
              </NavLink>
              <NavLink>
                <Link to="/memberships">Memberships</Link>
              </NavLink>
              <NavLink>
                <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
              </NavLink>
              <NavLink>
                <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
              </NavLink>
            </NavLinks>
            
            <HeaderActions>
              <ThemeToggle />
              <CTAButton onClick={() => scrollToSection('booking')}>
                Book Session
              </CTAButton>
            </HeaderActions>
          </DesktopNav>
          
          <MobileMenuContainer>
            <ThemeToggle />
            <MobileToggle onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '✕' : '☰'}
            </MobileToggle>
          </MobileMenuContainer>
        </Nav>
      </HeaderContainer>

      <Overlay isOpen={isOpen} onClick={handleOverlayClick} />
      
      <MobileMenu isOpen={isOpen}>
        <MobileNavLinks>
          <MobileNavLink>
            <Link to="/" onClick={handleNavClick}>Home</Link>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#services" onClick={() => scrollToSection('services')}>Services</a>
          </MobileNavLink>
          <MobileNavLink>
            <Link to="/memberships" onClick={handleNavClick}>Memberships</Link>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a>
          </MobileNavLink>
          <MobileNavLink>
            <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          </MobileNavLink>
        </MobileNavLinks>
        
        <MobileActions>
          <MobileCTAButton onClick={() => scrollToSection('booking')}>
            Book Session
          </MobileCTAButton>
          <MobileCTAButton as={Link} to="/memberships" onClick={handleNavClick}>
            View Memberships
          </MobileCTAButton>
        </MobileActions>
      </MobileMenu>
    </>
  );
};

export default Header;