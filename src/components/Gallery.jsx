import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import saunagallery from '../assets/saunagal.webp';
import sauna1 from '../assets/Sauna2.webp';
import coldplunge1 from '../assets/coldplunge1.webp';
import coldplunge2 from '../assets/coldplunge2.webp';
import coldplunge3 from '../assets/coldplunge3.webp';


const GalleryContainer = styled.section`
  padding: 120px 0;
  background: ${props => props.theme.colors.backgroundCard};
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #8b7355, #a68b5b)' : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.textSecondary};
  border: 2px solid ${props => props.active ? 'transparent' : props.theme.colors.border};
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #8b7355, #a68b5b)' : 'linear-gradient(135deg, #8b7355, #a68b5b)'};
    color: white;
    border-color: transparent;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${props => props.theme.colors.shadow};
  transition: all 0.4s ease;
  height: 300px;
  border: 1px solid ${props => props.theme.colors.border};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px ${props => props.theme.colors.shadowHover};
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.image ? `url(${props.image})` : 'linear-gradient(135deg, #8b7355, #a68b5b)'} center/cover;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(139, 115, 85, 0.2), rgba(166, 139, 91, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${GalleryItem}:hover &::before {
    opacity: 1;
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, ${props => props.theme.isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)'});
  color: white;
  padding: 30px;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  
  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

const GalleryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 8px;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;

const GalleryDescription = styled.p`
  opacity: 0.9;
  line-height: 1.5;
  font-size: 0.9rem;
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const theme = useTheme();

  const galleryItems = [
    {
      id: 1,
      category: 'saunas',
      title: 'Traditional Finnish Sauna',
      description: 'Authentic cedar wood construction with premium finishes',
      image: saunagallery
    },
    {
      id: 2,
      category: 'coldbath',
      title: 'Cold Plunge Pool',
      description: 'Invigorating cold therapy for recovery and wellness',
      image: coldplunge1
    },
    {
      id: 3,
      category: 'saunas',
      title: 'Infrared Wellness Suite',
      description: 'Modern infrared technology for deep healing',
      image: sauna1
    },
    {
      id: 4,
      category: 'coldbath',
      title: 'Relaxation Lounge',
      description: 'Comfortable spaces for post-sauna relaxation',
      image: coldplunge2
    },
    {
      id: 5,
      category: 'coldbath',
      title: 'Premium Changing Rooms',
      description: 'Luxurious amenities and comfortable spaces',
      image: coldplunge3
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'saunas', label: 'Saunas' },
    { key: 'coldbath', label: 'Cold Bath' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <GalleryContainer id="gallery">
      <Container>
        <SectionHeader>
          <SectionTitle>Our Facilities</SectionTitle>
          <SectionSubtitle>
            Explore our thoughtfully designed spaces where traditional craftsmanship 
            meets modern luxury to create the perfect wellness environment.
          </SectionSubtitle>
        </SectionHeader>
        
        <FilterButtons>
          {filters.map(filter => (
            <FilterButton
              key={filter.key}
              active={activeFilter === filter.key}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <GalleryGrid>
          {filteredItems.map((item) => (
            <GalleryItem key={item.id}>
              <GalleryImage image={item.image} />
              <GalleryOverlay>

              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </GalleryContainer>
  );
};

export default Gallery;