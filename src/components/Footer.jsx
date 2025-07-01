import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 80px 0 40px;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #8b7355;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  p, li {
    color: #b0b0b0;
    line-height: 1.6;
    margin-bottom: 0.8rem;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    color: #b0b0b0;
    transition: color 0.3s ease;
    text-decoration: none;
    
    &:hover {
      color: #8b7355;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
  
  .logo-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #8b7355, #a68b5b);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
  }
  
  .logo-text {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #2a2a2a;
  border-radius: 50%;
  color: #b0b0b0;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #8b7355, #a68b5b);
    color: white;
    transform: translateY(-2px);
  }
`;

const NewsletterForm = styled.div`
  margin-top: 1.5rem;
`;

const NewsletterInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #3a3a3a;
  border-radius: 6px;
  background: #2a2a2a;
  color: white;
  margin-bottom: 10px;
  
  &::placeholder {
    color: #888;
  }
  
  &:focus {
    outline: none;
    border-color: #8b7355;
  }
`;

const NewsletterButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 12px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 115, 85, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #3a3a3a;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #888;
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
  
  a {
    color: #888;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    text-decoration: none;
    
    &:hover {
      color: #8b7355;
    }
  }
`;

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <Logo>
              <div className="logo-icon">🔥</div>
              <span className="logo-text">Sauna Culture</span>
            </Logo>
            <p>
              Experience the perfect harmony of traditional Finnish sauna culture and modern luxury. 
              Your wellness journey begins here.
            </p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
              <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">💼</SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
              <li><Link to="/memberships">Memberships</Link></li>
              <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Services</h3>
            <ul>
              <li><a href="#">Traditional Sauna</a></li>
              <li><a href="#">Infrared Wellness</a></li>
              <li><a href="#">Couples Retreat</a></li>
              <li><a href="#">Group Sessions</a></li>
              <li><Link to="/memberships">Memberships</Link></li>
              <li><a href="#">Corporate Wellness</a></li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>Stay Connected</h3>
            <p>Subscribe to our newsletter for wellness tips and exclusive offers.</p>
            <NewsletterForm>
              <NewsletterInput 
                type="email" 
                placeholder="Enter your email"
              />
              <NewsletterButton>
                Subscribe
              </NewsletterButton>
            </NewsletterForm>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            &copy; 2024 Sauna Culture. All rights reserved.
          </Copyright>
          <FooterLinks>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </FooterLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;