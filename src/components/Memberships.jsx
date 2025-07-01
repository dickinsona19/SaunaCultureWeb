import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const MembershipsContainer = styled.section`
  padding: 120px 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  min-height: 100vh;
  margin-top: 80px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h1`
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

const MembershipGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const MembershipCard = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${props => props.theme.colors.shadow};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: ${props => props.featured ? '3px solid #8b7355' : `1px solid ${props.theme.colors.border}`};
  
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

const CardHeader = styled.div`
  padding: 40px 30px 20px;
  text-align: center;
  background: ${props => props.featured ? 'linear-gradient(135deg, #8b7355, #a68b5b)' : props.theme.colors.backgroundSecondary};
  color: ${props => props.featured ? 'white' : props.theme.colors.textPrimary};
  position: relative;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #d4af37, #f4e4bc);
  color: #1a1a1a;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
`;

const MembershipTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const MembershipPrice = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  .currency {
    font-size: 1.5rem;
    vertical-align: top;
  }
  
  .period {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.featured ? 'rgba(255,255,255,0.8)' : props.theme.colors.textSecondary};
  }
`;

const MembershipDescription = styled.p`
  font-size: 1rem;
  opacity: ${props => props.featured ? '0.9' : '1'};
  color: ${props => props.featured ? 'white' : props.theme.colors.textSecondary};
  line-height: 1.5;
`;

const CardContent = styled.div`
  padding: 30px;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  
  li {
    padding: 12px 0;
    color: ${props => props.theme.colors.textMuted};
    position: relative;
    padding-left: 30px;
    font-weight: 500;
    border-bottom: 1px solid ${props => props.theme.colors.borderLight};
    
    &:last-child {
      border-bottom: none;
    }
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #8b7355;
      font-weight: 700;
      font-size: 1.2rem;
      width: 20px;
      height: 20px;
      background: rgba(139, 115, 85, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }
  }
`;

const SelectButton = styled.button`
  width: 100%;
  background: ${props => props.featured ? 'white' : 'linear-gradient(135deg, #8b7355, #a68b5b)'};
  color: ${props => props.featured ? '#8b7355' : 'white'};
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
    background: ${props => props.featured ? 
      'linear-gradient(90deg, transparent, rgba(139, 115, 85, 0.1), transparent)' :
      'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)'
    };
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${props => props.featured ? 
      'rgba(139, 115, 85, 0.2)' : 
      'rgba(139, 115, 85, 0.3)'
    };
    
    &::before {
      left: 100%;
    }
  }
`;

const BenefitsSection = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  padding: 80px 40px;
  border-radius: 20px;
  margin-bottom: 80px;
  border: 1px solid ${props => props.theme.colors.border};
  box-shadow: 0 8px 30px ${props => props.theme.colors.shadow};
`;

const BenefitsTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 500;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const BenefitItem = styled.div`
  text-align: center;
  padding: 30px 20px;
`;

const BenefitIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 25px rgba(139, 115, 85, 0.3);
`;

const BenefitTitle = styled.h4`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const BenefitDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const FAQSection = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  padding: 60px 40px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.border};
`;

const FAQTitle = styled.h3`
  font-size: 2rem;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 20px;
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 8px;
  box-shadow: 0 2px 10px ${props => props.theme.colors.shadow};
  border: 1px solid ${props => props.theme.colors.border};
`;

const FAQQuestion = styled.h5`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const FAQAnswer = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
  margin: 0;
`;

const Memberships = () => {
  const theme = useTheme();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  
  const memberships = [
    {
      title: 'Essential',
      price: 89,
      period: '/month',
      description: 'Perfect for occasional wellness seekers',
      features: [
        '4 sauna sessions per month'
      ],
      featured: false
    },
    {
      title: 'Premium',
      price: 165,
      period: '/month',
      description: 'Our most popular choice for regular wellness',
      features: [
        '8 visits per month'
      ],
      featured: true
    },
    {
      title: 'Elite',
      price: 185,
      period: '/month',
      description: 'Ultimate luxury wellness experience',
      features: [
        '15 visits per month',
        '1 Private Sauna/Ice Bath Session per month'
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: '💎',
      title: 'Premium Facilities',
      description: 'Access to our state-of-the-art Finnish saunas and infrared wellness suites with ocean views.'
    },
    {
      icon: '🎯',
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience with our easy-to-use online booking system.'
    },
    {
      icon: '👥',
      title: 'Community Access',
      description: 'Join our wellness community with exclusive events, workshops, and member gatherings.'
    },
    // {
    //   icon: '🏆',
    //   title: 'Expert Guidance',
    //   description: 'Receive personalized wellness consultations from our certified sauna specialists.'
    // }
  ];

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my membership?',
      answer: 'Yes, you can change your membership tier at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      question: 'What happens to unused sessions?',
      answer: 'Essential membership sessions roll over for up to 2 months. Premium and Elite memberships include unlimited access.'
    },
    {
      question: 'Is there a commitment period?',
      answer: 'All memberships are month-to-month with no long-term commitment required. Cancel anytime with 30 days notice.'
    },
    {
      question: 'Do you offer family memberships?',
      answer: 'Yes, we offer family packages with special pricing for 2+ members. Contact us for custom family rates.'
    }
  ];

  return (
    <MembershipsContainer id="memberships">
      <Container>
        <SectionHeader>
          <SectionTitle>Membership Plans</SectionTitle>
          <SectionSubtitle>
            Choose the perfect membership to match your wellness journey. 
            All plans include access to our premium facilities and expert guidance.
          </SectionSubtitle>
        </SectionHeader>
        
        <MembershipGrid>
          {memberships.map((membership, index) => (
            <MembershipCard key={index} featured={membership.featured}>
              {membership.featured && <FeaturedBadge>Most Popular</FeaturedBadge>}
              <CardHeader featured={membership.featured}>
                <MembershipTitle>{membership.title}</MembershipTitle>
                <MembershipPrice featured={membership.featured}>
                  <span className="currency">$</span>{membership.price}
                  <span className="period">{membership.period}</span>
                </MembershipPrice>
                <MembershipDescription featured={membership.featured}>
                  {membership.description}
                </MembershipDescription>
              </CardHeader>
              <CardContent>
                <FeaturesList>
                  {membership.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </FeaturesList>
                <SelectButton featured={membership.featured}>
                  Select {membership.title}
                </SelectButton>
              </CardContent>
            </MembershipCard>
          ))}
        </MembershipGrid>
        
        <BenefitsSection>
          <BenefitsTitle>Membership Benefits</BenefitsTitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitItem>
            ))}
          </BenefitsGrid>
        </BenefitsSection>
        
        {/* <FAQSection>
          <FAQTitle>Membership FAQ</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion>{faq.question}</FAQQuestion>
              <FAQAnswer>{faq.answer}</FAQAnswer>
            </FAQItem>
          ))}
        </FAQSection> */}
      </Container>
    </MembershipsContainer>
  );
};

export default Memberships;