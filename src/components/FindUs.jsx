import React from 'react';
import styled from 'styled-components';

const FindUsContainer = styled.section`
  padding: 120px 0;
  background: white;
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6a6a6a;
  line-height: 1.6;
  font-weight: 400;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactInfo = styled.div`
  background: #f8f8f8;
  padding: 50px 40px;
  border-radius: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.h4`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ContactText = styled.p`
  color: #6a6a6a;
  line-height: 1.5;
  margin: 0;
`;

const MapContainer = styled.div`
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  border-radius: 12px;
  padding: 60px 40px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='80' cy='80' r='2' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='80' cy='20' r='2' fill='%23ffffff' opacity='0.1'/%3E%3Ccircle cx='20' cy='80' r='2' fill='%23ffffff' opacity='0.1'/%3E%3C/svg%3E") repeat;
  }
`;

const MapIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const MapTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const MapDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  opacity: 0.9;
  max-width: 400px;
`;

const DirectionsButton = styled.button`
  background: white;
  color: #8b7355;
  padding: 14px 28px;
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

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 80px;
`;

const HoursCard = styled.div`
  background: #f8f8f8;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
`;

const HoursTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const DayLabel = styled.span`
  color: #4a4a4a;
  font-weight: 500;
`;

const TimeLabel = styled.span`
  color: #8b7355;
  font-weight: 600;
`;

const FindUs = () => {
  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 9:00 PM' },
    { day: 'Holidays', time: '9:00 AM - 8:00 PM' }
  ];

  return (
    <FindUsContainer id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>Visit Our Sanctuary</SectionTitle>
          <SectionSubtitle>
            Located in the heart of paradise, our wellness sanctuary offers easy access 
            and convenient amenities for the perfect sauna experience.
          </SectionSubtitle>
        </SectionHeader>
        
        <ContentGrid>
          <ContactInfo>
            <ContactTitle>Get in Touch</ContactTitle>
            
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactDetails>
                <ContactLabel>Address</ContactLabel>
                <ContactText>
                  123 Wellness Drive<br />
                  Sunset Bay, CA 90210
                </ContactText>
              </ContactDetails>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactDetails>
                <ContactLabel>Phone</ContactLabel>
                <ContactText>(555) 123-SAUNA</ContactText>
              </ContactDetails>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>✉️</ContactIcon>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactText>hello@saunaculture.com</ContactText>
              </ContactDetails>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>🌐</ContactIcon>
              <ContactDetails>
                <ContactLabel>Website</ContactLabel>
                <ContactText>www.saunaculture.com</ContactText>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>
          
          <MapContainer>
            <MapIcon>🗺️</MapIcon>
            <MapTitle>Find Your Way to Wellness</MapTitle>
            <MapDescription>
              Conveniently located with ample parking and easy access to public transportation. 
              Your journey to wellness starts here.
            </MapDescription>
            <DirectionsButton>
              Get Directions
            </DirectionsButton>
          </MapContainer>
        </ContentGrid>
        
        <HoursGrid>
          <HoursCard>
            <HoursTitle>Operating Hours</HoursTitle>
            {hours.map((item, index) => (
              <HoursItem key={index}>
                <DayLabel>{item.day}</DayLabel>
                <TimeLabel>{item.time}</TimeLabel>
              </HoursItem>
            ))}
          </HoursCard>
          
          <HoursCard>
            <HoursTitle>Special Services</HoursTitle>
            <HoursItem>
              <DayLabel>Private Sessions</DayLabel>
              <TimeLabel>By Appointment</TimeLabel>
            </HoursItem>
            <HoursItem>
              <DayLabel>Group Bookings</DayLabel>
              <TimeLabel>24hr Notice</TimeLabel>
            </HoursItem>
            <HoursItem>
              <DayLabel>Wellness Consultation</DayLabel>
              <TimeLabel>Weekdays Only</TimeLabel>
            </HoursItem>
            <HoursItem>
              <DayLabel>Corporate Events</DayLabel>
              <TimeLabel>Custom Schedule</TimeLabel>
            </HoursItem>
          </HoursCard>
        </HoursGrid>
      </Container>
    </FindUsContainer>
  );
};

export default FindUs;