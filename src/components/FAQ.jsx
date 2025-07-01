import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const FAQContainer = styled.section`
  padding: 120px 0;
  background: ${props => props.theme.colors.backgroundCard};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 1.5rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  font-weight: 400;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
`;

const FAQItem = styled.div`
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 12px;
  box-shadow: 0 4px 20px ${props => props.theme.colors.shadow};
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.theme.colors.border};
  
  &:hover {
    box-shadow: 0 8px 30px ${props => props.theme.colors.shadowHover};
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 30px;
  background: transparent;
  color: ${props => props.theme.colors.textPrimary};
  border: none;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.backgroundCard};
  }
`;

const FAQIcon = styled.span`
  font-size: 1.5rem;
  color: #8b7355;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

const FAQAnswer = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: ${props => props.theme.colors.backgroundCard};
`;

const FAQAnswerContent = styled.div`
  padding: 0 30px 30px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 1.1rem;
`;

const CTASection = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  color: white;
  padding: 60px 40px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px ${props => props.theme.colors.shadow};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E") repeat;
  }
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  opacity: 0.9;
`;

const CTAButton = styled.button`
  background: white;
  color: #8b7355;
  padding: 16px 32px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  }
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const theme = useTheme();

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What should I bring to my sauna session?",
      answer: "We provide premium towels, robes, and all necessary amenities. Simply bring yourself and comfortable clothing for before and after your session. We recommend staying hydrated, so feel free to bring a water bottle."
    },
    {
      question: "How long are the sauna sessions?",
      answer: "Our standard sessions range from 45 to 90 minutes, depending on the service you choose. This includes time for relaxation and gradual temperature adjustment. First-time visitors receive a complimentary orientation and consultation."
    },
    {
      question: "Is it safe for beginners?",
      answer: "Absolutely. Our certified wellness professionals will guide you through your first experience, ensuring your comfort and safety. We start with lower temperatures and shorter durations, gradually building up as you become more accustomed to the heat."
    },
    {
      question: "What makes your location special?",
      answer: "Our unique oceanfront location offers stunning views and the natural cooling effect of sea breezes. The combination of traditional Finnish sauna culture with our coastal setting creates an unparalleled wellness experience."
    },
    {
      question: "Do you offer group sessions?",
      answer: "Yes, we offer private group sessions for up to 8 people. These are perfect for friends, families, or corporate wellness events. Group bookings include special pricing and can be customized with additional amenities."
    },
    {
      question: "What are your cancellation policies?",
      answer: "We understand that plans change. You can cancel or reschedule up to 4 hours before your session without any fees. For memberships, we offer flexible pause options for vacations or extended absences."
    },
    {
      question: "Are there any health restrictions?",
      answer: "While saunas are generally safe for most people, we recommend consulting with your healthcare provider if you have heart conditions, are pregnant, or have other health concerns. Our staff can discuss any specific needs during your visit."
    },
    {
      question: "What's included in the membership?",
      answer: "Memberships include unlimited access to all facilities, complimentary towels and robes, priority booking, guest passes, and exclusive access to special events. Annual members also receive personal wellness consultations and VIP amenities."
    }
  ];

  return (
    <FAQContainer id="faq">
      <Container>
        <SectionHeader>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <SectionSubtitle>
            Everything you need to know about your wellness journey with us
          </SectionSubtitle>
        </SectionHeader>
        
        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion 
                onClick={() => toggleItem(index)}
              >
                {item.question}
                <FAQIcon isOpen={openItems[index]}>
                  +
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer isOpen={openItems[index]}>
                <FAQAnswerContent>
                  {item.answer}
                </FAQAnswerContent>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
        
        <CTASection>
          <CTATitle>Still Have Questions?</CTATitle>
          <CTADescription>
            Our wellness experts are here to help you plan the perfect sauna experience. 
            Contact us for personalized guidance and recommendations.
          </CTADescription>
          <CTAButton>
            Contact Our Team
          </CTAButton>
        </CTASection>
      </Container>
    </FAQContainer>
  );
};

export default FAQ;