import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #1a1a1a;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: #fafafa;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  p {
    margin-bottom: 1rem;
    font-weight: 400;
    color: #4a4a4a;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }

  /* Enhanced Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #8b7355, #a68b5b);
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #6d5a42, #8a7050);
  }

  /* Premium Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  /* Intersection Observer Animation */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Utility Classes */
  .text-gradient {
    background: linear-gradient(135deg, #8b7355, #a68b5b, #d4af37);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .shadow-luxury {
    box-shadow: 
      0 4px 20px rgba(0, 0, 0, 0.08),
      0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .shadow-luxury-hover {
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.15),
      0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .text-shadow-soft {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .section-padding {
    padding: 120px 0;
    
    @media (max-width: 768px) {
      padding: 80px 0;
    }
  }

  /* Focus States */
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid #8b7355;
    outline-offset: 2px;
  }

  /* Selection */
  ::selection {
    background: rgba(139, 115, 85, 0.2);
    color: #1a1a1a;
  }

  /* Smooth transitions for all interactive elements */
  button,
  a,
  input,
  textarea {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default GlobalStyles;