import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #8b7355, #a68b5b)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#6a6a6a'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e0e0e0'};
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 300px;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
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
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
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
`;

const GalleryDescription = styled.p`
  opacity: 0.9;
  line-height: 1.5;
  font-size: 0.9rem;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
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
  }
`;

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'saunas',
      title: 'Traditional Finnish Sauna',
      description: 'Authentic cedar wood construction with premium finishes',
      image: 'https://images.pexels.com/photos/3188/wood-light-vacation-picnic.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      category: 'facilities',
      title: 'Relaxation Lounge',
      description: 'Comfortable spaces for post-sauna relaxation',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      category: 'saunas',
      title: 'Infrared Wellness Suite',
      description: 'Modern infrared technology for deep healing',
      image: 'https://images.pexels.com/photos/3188/wood-light-vacation-picnic.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      category: 'exterior',
      title: 'Ocean View Deck',
      description: 'Stunning views of the coastline',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      category: 'facilities',
      title: 'Premium Changing Rooms',
      description: 'Luxurious amenities and comfortable spaces',
      image: 'https://images.pexels.com/photos/3188/wood-light-vacation-picnic.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      category: 'saunas',
      title: 'Couples Suite',
      description: 'Private sauna experience for two',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'saunas', label: 'Saunas' },
    { key: 'facilities', label: 'Facilities' },
    { key: 'exterior', label: 'Exterior' }
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
              <PlaceholderImage />
              <GalleryOverlay>
                <GalleryTitle>{item.title}</GalleryTitle>
                <GalleryDescription>{item.description}</GalleryDescription>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </GalleryContainer>
  );
};

export default Gallery;