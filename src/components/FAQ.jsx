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
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  font-weight: 600;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  font-weight: 400;
  opacity: 0.98;
  line-height: 1.6;
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
    background: #f8f8f8;
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
      question: "What is Sauna Culture?",
      answer: "Sauna Culture is a community and tradition centered around saunas from various cultures worldwide. It aims to synthesize these traditions and practices, making them accessible in Charlotte and beyond. Sauna Culture prioritizes physical recovery and communal togetherness."
    },
    {
      question: "Where are you located?",
      answer: "We are located at 274 S Sharon Amity Rd #1, Charlotte, NC 28211 in Cotswold shopping Center. Our space is located above Y2 Yoga."
    },
    {
      question: "What should I bring?",
      answer: "The only required item is a clean bathing suit however we also recommend you bring a refillable water bottle."
    },
    {
      question: "Are there locker rooms available?",
      answer: "Yes each guest will have access to a men’s and women’s locker room." 
    },
    {
      question: "How can I become a member of Sauna Culture?",
      answer: "Membership options are available on our website. Simply visit https://sauna-culture.com/memberships to explore our membership plans and benefits. We offer flexible membership options to suit your needs."
    },
    {
      question: "Are there any health precautions to consider before using the saunas?",
      answer: "It’s always recommended to consult with your healthcare provider before starting any new wellness routine, including sauna use. Additionally, please follow our guidelines for safe sauna usage, including staying hydrated and listening to your body’s cues."},
    {
      question: "Can I reserve a private room at Sauna Culture?",
      answer: "Yes, Sauna Culture offers a sauna and cold plunge option for private gatherings up to 4 people. Contact us for more information on hosting your event at our facility." },
    {
      question: "How can I stay updated on Sauna Culture events and promotions?",
      answer:"Stay connected with us through our website and social media channels for the latest updates on events, promotions, and wellness tips. Don’t forget to sign up for our newsletter to receive exclusive offers and announcements!" }
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