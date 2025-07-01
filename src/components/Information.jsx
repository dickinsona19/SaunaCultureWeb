import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const InfoContainer = styled.section`
  padding: 120px 0;
  background: #f8f8f8;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
  margin-bottom: 120px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const TextContent = styled.div`
  max-width: 500px;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 500;
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, #8b7355, #a68b5b);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #6a6a6a;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  margin-top: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 3rem;
  
  li {
    padding: 15px 0;
    color: #4a4a4a;
    position: relative;
    padding-left: 35px;
    font-size: 1.1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #8b7355;
      font-weight: 700;
      font-size: 1.3rem;
      width: 25px;
      height: 25px;
      background: rgba(139, 115, 85, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    &:hover {
      color: #8b7355;
      transform: translateX(5px);
      
      &::before {
        background: rgba(139, 115, 85, 0.2);
        transform: scale(1.1);
      }
    }
  }
`;

const LearnMoreButton = styled.button`
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(139, 115, 85, 0.3);
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
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 550px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(166, 139, 91, 0.1));
    z-index: 2;
  }
  
  @media (max-width: 968px) {
    height: 400px;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='80' cy='80' r='2' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='80' cy='20' r='2' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='20' cy='80' r='2' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E") repeat;
    animation: float 8s ease-in-out infinite;
  }
`;

const BenefitsSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const BenefitsTitle = styled.h3`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 3rem;
  font-weight: 500;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

const BenefitCard = styled.div`
  background: white;
  padding: 50px 35px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
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
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

const BenefitIcon = styled.div`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 25px rgba(139, 115, 85, 0.3);
  transition: all 0.3s ease;
  
  ${BenefitCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(139, 115, 85, 0.4);
  }
`;

const BenefitTitle = styled.h4`
  font-size: 1.4rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const BenefitDescription = styled.p`
  color: #6a6a6a;
  line-height: 1.6;
  font-size: 1rem;
`;

const Information = () => {
  const benefits = [
    {
      icon: '💪',
      title: 'Physical Wellness',
      description: 'Improve circulation, reduce muscle tension, and boost your immune system through regular sauna use.'
    },
    {
      icon: '🧠',
      title: 'Mental Clarity',
      description: 'Experience stress relief and mental rejuvenation in our peaceful, meditative environment.'
    },
    {
      icon: '✨',
      title: 'Skin Health',
      description: 'Detoxify and purify your skin while promoting a healthy, radiant complexion.'
    },
    {
      icon: '😴',
      title: 'Better Sleep',
      description: 'Regular sauna sessions can improve sleep quality and help regulate your natural sleep cycle.'
    }
  ];

  return (
    <InfoContainer id="about">
      <Container>
        <ContentGrid>
          <TextContent>
            <SectionTitle>
              The Art of Authentic Wellness
            </SectionTitle>
            <SectionDescription>
              We're passionate about bringing you the purest form of Finnish sauna culture. 
              Our commitment to authenticity and excellence makes us your premier destination for wellness and relaxation.
            </SectionDescription>
            <FeaturesList>
              <li>Traditional Finnish construction methods</li>
              <li>Premium Nordic cedar wood interiors</li>
              <li>Ocean-view relaxation areas</li>
              <li>Expert wellness consultations</li>
              <li>Personalized experience programs</li>
            </FeaturesList>
            <LearnMoreButton>
              Discover Our Story
            </LearnMoreButton>
          </TextContent>
          
          <ImageContainer>
            <PlaceholderImage>
              🏖️
            </PlaceholderImage>
          </ImageContainer>
        </ContentGrid>
        
        <BenefitsSection>
          <BenefitsTitle>The Benefits of Sauna Culture</BenefitsTitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsSection>
      </Container>
    </InfoContainer>
  );
};

export default Information;