import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const ToggleContainer = styled.button`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${props => props.theme.colors.backgroundCard};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  padding: 2px;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  }
`;

const ToggleSlider = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #8b7355, #a68b5b);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${props => props.isDarkMode ? '28px' : '2px'});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  box-shadow: 0 2px 8px rgba(139, 115, 85, 0.3);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(139, 115, 85, 0.4);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;
  pointer-events: none;
`;

const Icon = styled.span`
  font-size: 12px;
  opacity: ${props => props.active ? '1' : '0.3'};
  transition: opacity 0.3s ease;
  color: ${props => props.theme.colors.textSecondary};
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