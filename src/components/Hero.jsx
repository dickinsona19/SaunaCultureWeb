import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    ${props => props.theme.isDarkMode 
      ? 'rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)' 
      : 'rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)'
    }), 
    url('/BF3A9725-Edit-1.webp') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 20%, rgba(139, 115, 85, 0.15), transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(166, 139, 91, 0.1), transparent 50%);
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 2;
  position: relative;
  max-width: 900px;
  padding: 0 40px;
  animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -2px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
  .highlight {
    background: linear-gradient(135deg, #d4af37, #f4e4bc, #fff);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: -1px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3rem;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 18px 36px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 25px rgba(139, 115, 85, 0.4);
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
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(139, 115, 85, 0.5);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 16px 32px;
    font-size: 15px;
    width: 100%;
    max-width: 280px;
  }
`;

const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 18px 36px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: white;
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: #1a1a1a;
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 255, 255, 0.2);
    
    &::before {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 16px 32px;
    font-size: 15px;
    width: 100%;
    max-width: 280px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.7;
  animation: bounce 2s infinite;
  z-index: 2;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const Hero = () => {
  const theme = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroTitle>
          ESCAPE THE <span className="highlight">CHAOS</span>
        </HeroTitle>
        <HeroSubtitle>
        Sauna Culture, where the heat is real, the cold hits harder, and the vibes are always chill. Sauna, cold plunge, and community—this is your escape from the chaos.
        </HeroSubtitle>
        
        <CTAContainer>
          <PrimaryButton onClick={() => scrollToSection('booking')}>
            Book Your Session
          </PrimaryButton>
          <SecondaryButton to="/memberships">
            View Memberships
          </SecondaryButton>
        </CTAContainer>
      </HeroContent>
      
      <ScrollIndicator onClick={() => scrollToSection('about')}>
        <div style={{ fontSize: '24px' }}>↓</div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;