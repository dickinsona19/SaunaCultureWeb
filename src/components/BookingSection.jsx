import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import publicsauna from '../assets/publicsauna.webp';
const BookingContainer = styled.section`
  padding: 120px 0;
  background: ${props => props.theme.colors.background};
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='1' fill='%238b7355' opacity='0.03'/%3E%3Ccircle cx='80' cy='80' r='1' fill='%23a68b5b' opacity='0.03'/%3E%3C/svg%3E") repeat;
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #8b7355, #a68b5b);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  font-weight: 400;
  margin-top: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${props => props.theme.colors.shadow};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid ${props => props.theme.colors.border};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(139, 115, 85, 0.02), rgba(166, 139, 91, 0.02));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px ${props => props.theme.colors.shadowHover};
    
    &::before {
      opacity: 1;
    }
  }
`;

const CardImage = styled.div`
  height: 260px;
  background: ${props => props.image ? `url(${props.image})` : 'linear-gradient(135deg, #8b7355, #a68b5b)'} center/cover;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(166, 139, 91, 0.1));
    transition: opacity 0.3s ease;
  }
  
  ${ServiceCard}:hover &::after {
    opacity: 0.7;
  }
`;

const CardBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  z-index: 2;
`;

const CardContent = styled.div`
  padding: 35px 30px;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CardFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  
  li {
    padding: 10px 0;
    color: ${props => props.theme.colors.textMuted};
    position: relative;
    padding-left: 25px;
    font-weight: 500;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #8b7355;
      font-weight: 700;
      font-size: 1.1rem;
    }
  }
`;

const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 20px;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 12px;
  
  .price {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    font-weight: 600;
    color: #8b7355;
  }
  
  .duration {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const BookButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
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
    box-shadow: 0 8px 25px rgba(139, 115, 85, 0.3);
    
    &::before {
      left: 100%;
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 80px 40px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 40px ${props => props.theme.colors.shadowHover};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E") repeat;
    animation: float 8s ease-in-out infinite;
  }
`;

const CTATitle = styled.h3`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 2;
  color: #ffffff;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  opacity: 0.98;
`;

const CTAButton = styled.button`
  background: white;
  color: #8b7355;
  padding: 18px 36px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 255, 255, 0.3);
    background: #f8f8f8;
  }
`;

const BookingSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const theme = useTheme();

  const services = [
    {
      title: 'Shared Sauna/Ice Bath',
      description: 'Enjoy a 90 minute sauna/ice bath session in our main area. This pass also includes access to our locker room saunas and our lounge complete with heated benches.',
      features: ['Public Sauna', 'Cold Plunge', 'Heated Benches'],
      price: '$40',
      duration: '90 minutes',
      badge: 'Most Popular',
      image: publicsauna
    },
    {
      title: 'Private Sauna/Ice Bath',
      description: 'Get exclusive access when you book our private Ice Bath/Sauna Suite for 90 minutes, with the price designed for 2 people (you can add a friend if you wish). Your session includes access to our entire facilities, including the lounge area and heated benches. Up to 4 people allowed.',
      features: ['Private Suite','Add up to 3 friends', 'Cold Plunge'],
      price: '$125',
      duration: '90 minutes',
      badge: 'Premium',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    // {
    //   title: 'Couples Retreat',
    //   description: 'Share the wellness experience with your partner in our exclusive couples sauna suite.',
    //   features: ['Private Suite', 'Champagne Service', 'Extended Session', 'Relaxation Area'],
    //   price: '$180',
    //   duration: '90 minutes',
    //   badge: 'Exclusive',
    //   image: 'https://images.pexels.com/photos/3188/wood-light-vacation-picnic.jpg?auto=compress&cs=tinysrgb&w=800'
    // }
  ];

  return (
    <BookingContainer id="booking">
      <Container>
        <SectionHeader>
          <SectionTitle>Premium Sauna Experiences</SectionTitle>
          <SectionSubtitle>
            Choose from our carefully curated selection of wellness experiences, 
            each designed to provide the ultimate in relaxation and rejuvenation.
          </SectionSubtitle>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardImage image={service.image}>
                <CardBadge>{service.badge}</CardBadge>
              </CardImage>
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
                <CardFeatures>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </CardFeatures>
                <CardPrice>
                  <span className="price">{service.price}</span>
                  <span className="duration">{service.duration}</span>
                </CardPrice>
                <BookButton>Reserve Now</BookButton>
              </CardContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <CTASection>
          <CTATitle>Ready to Begin Your Wellness Journey?</CTATitle>
          <CTADescription>
            Join thousands of satisfied clients who have discovered the transformative power of our premium sauna experiences. 
            Book your consultation today and start your path to wellness.
          </CTADescription>
          <CTAButton>
            Schedule Consultation
          </CTAButton>
        </CTASection>
      </Container>
    </BookingContainer>
  );
};

export default BookingSection;