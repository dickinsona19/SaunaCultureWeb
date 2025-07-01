import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const ToggleContainer = styled.button`
  position: relative;
  width: 50px;
  height: 26px;
  background: ${props => props.theme.colors.backgroundCard};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 13px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  padding: 2px;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 3px 10px ${props => props.theme.colors.shadow};
  }
  
  @media (max-width: 480px) {
    width: 46px;
    height: 24px;
    border-radius: 12px;
  }
`;

const ToggleSlider = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${props => props.isDarkMode ? '22px' : '2px'});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: white;
  box-shadow: 0 2px 6px rgba(139, 115, 85, 0.3);
  
  &:hover {
    box-shadow: 0 3px 10px rgba(139, 115, 85, 0.4);
  }
  
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    transform: translateX(${props => props.isDarkMode ? '20px' : '2px'});
    font-size: 7px;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  pointer-events: none;
  
  @media (max-width: 480px) {
    padding: 0 4px;
  }
`;

const Icon = styled.span`
  font-size: 10px;
  opacity: ${props => props.active ? '1' : '0.3'};
  transition: opacity 0.3s ease;
  color: ${props => props.theme.colors.textSecondary};
  
  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ToggleContainer onClick={toggleTheme} aria-label="Toggle theme">
      <IconContainer>
        <Icon active={!isDarkMode}>☀️</Icon>
        <Icon active={isDarkMode}>🌙</Icon>
      </IconContainer>
      <ToggleSlider isDarkMode={isDarkMode}>
        {isDarkMode ? '🌙' : '☀️'}
      </ToggleSlider>
    </ToggleContainer>
  );
};

export default ThemeToggle;