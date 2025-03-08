/* Import React library and hooks for component functionality */
import React, { useEffect, useState } from 'react';
/* Import CSS styles for this component */
import './LandingPage.css';

/* Define the LandingPage component that receives onEnter function as a prop */
const LandingPage = ({ onEnter }) => {
  /* State to control when to show the content */
  const [showContent, setShowContent] = useState(false);
  /* State to track when the drawing animation is complete */
  const [drawComplete, setDrawComplete] = useState(false);
  /* State to detect if the user is on a mobile device */
  const [isMobile, setIsMobile] = useState(false);
  
  /* Text to be animated with extra spacing */
  /* Title text for the landing page */
  const title = "Theory  of  Computation";
  /* Names of the project creators */
  const names = "Bernard  Ginn  &  Destiny  Butler";
  /* Project title text */
  const project = "Project  1:  Interactive  Random  Sentence  Generator";

  /* Effect hook to handle animations and mobile detection */
  useEffect(() => {
    /* Function to check if the device is mobile based on screen width */
    const checkMobile = () => {
      /* Set isMobile state to true if window width is 768px or less */
      setIsMobile(window.innerWidth <= 768);
    };
    
    /* Run the mobile check when component mounts */
    checkMobile();
    
    /* Add event listener to detect window resize for responsive behavior */
    window.addEventListener('resize', checkMobile);
    
    /* Timer to show content with delay on desktop, immediately on mobile */
    const timer = setTimeout(() => {
      /* Set showContent state to true after delay */
      setShowContent(true);
    }, isMobile ? 0 : 500);

    /* Timer to mark drawing animation as complete */
    const drawTimer = setTimeout(() => {
      /* Set drawComplete state to true after delay */
      setDrawComplete(true);
    }, isMobile ? 0 : 4000);

    /* Cleanup function to remove event listeners and clear timers */
    return () => {
      /* Clear the content display timer */
      clearTimeout(timer);
      /* Clear the drawing completion timer */
      clearTimeout(drawTimer);
      /* Remove the resize event listener */
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]); /* Re-run effect when isMobile state changes */

  /* Function to add spacing between words for animation */
  const animateText = (text, baseDelay, charDelay) => {
    /* For mobile, just return the text without animation */
    if (isMobile) {
      /* Return plain text without animation on mobile */
      return text;
    }
    
    /* Split by words first to add extra spacing between words */
    return text.split(' ').map((word, wordIndex) => (
      /* Wrapper span for each word with unique key */
      <span key={`word-${wordIndex}`} className="word-wrapper">
        {/* Map through each character in the word */}
        {word.split('').map((char, charIndex) => (
          /* Span for each character with animation delay */
          <span 
            /* Unique key for each character */
            key={`char-${wordIndex}-${charIndex}`} 
            /* Inline style for animation delay based on character position */
            style={{ 
              animationDelay: `${baseDelay + (charDelay * (charIndex + (wordIndex * 5)))}s` 
            }}
            /* CSS class for character animation */
            className="animated-char"
          >
            {/* Display the character */}
            {char}
          </span>
        ))}
        {/* Add space after each word except the last one */}
        {wordIndex < text.split(' ').length - 1 && (
          /* Span for space between words */
          <span className="word-space"> </span>
        )}
      </span>
    ));
  };

  /* Return the JSX for rendering the component */
  return (
    /* Main container div for the landing page with conditional mobile class */
    <div className={`landing-page ${isMobile ? 'mobile' : ''}`}>
      {/* Container for the drawing board animation */}
      <div className="drawing-board">
        {/* Animated drawing elements - only show on desktop */}
        {!isMobile && (
          /* Fragment to group multiple elements */
          <>
            {/* Various animated drawing elements */}
            <div className="drawing-element line-1"></div>
            <div className="drawing-element line-2"></div>
            <div className="drawing-element line-3"></div>
            <div className="drawing-element line-4"></div>
            <div className="drawing-element circle-1"></div>
            <div className="drawing-element circle-2"></div>
            <div className="drawing-element circle-3"></div>
            <div className="drawing-element squiggle"></div>
            <div className="drawing-element squiggle-2"></div>
            <div className="drawing-element dot-1"></div>
            <div className="drawing-element dot-2"></div>
            <div className="drawing-element dot-3"></div>
            <div className="drawing-element dot-4"></div>
            <div className="drawing-element dot-5"></div>
            
            {/* Animated graph-like structure */}
            <div className="drawing-element graph-node node-1"></div>
            <div className="drawing-element graph-node node-2"></div>
            <div className="drawing-element graph-node node-3"></div>
            <div className="drawing-element graph-edge edge-1"></div>
            <div className="drawing-element graph-edge edge-2"></div>
          </>
        )}
        
        {/* Text content with animation */}
        <div className={`content ${showContent || isMobile ? 'visible' : ''}`}>
          {/* Main title with conditional animation */}
          <h1 className="title">
            {/* Use plain text on mobile, animated text on desktop */}
            {isMobile ? title : animateText(title, 0, 0.1)}
          </h1>
          
          {/* Names with conditional animation */}
          <h2 className="names">
            {/* Use plain text on mobile, animated text on desktop */}
            {isMobile ? names : animateText(names, 1, 0.05)}
          </h2>
          
          {/* Project title with conditional animation */}
          <h3 className="project">
            {/* Use plain text on mobile, animated text on desktop */}
            {isMobile ? project : animateText(project, 2, 0.03)}
          </h3>
          
          {/* Button to enter the application */}
          <button 
            /* CSS class with conditional visibility based on animation completion */
            className={`enter-button ${drawComplete || isMobile ? 'visible' : ''}`}
            /* Call onEnter function when button is clicked */
            onClick={onEnter}
          >
            {/* Button text */}
            Enter Application
          </button>
        </div>
      </div>
    </div>
  );
};

/* Export the LandingPage component for use in other files */
export default LandingPage; 