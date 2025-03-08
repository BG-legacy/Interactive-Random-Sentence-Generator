import React, { useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import SentenceGenerator from './components/SentenceGenerator';
import LandingPage from './components/LandingPage';
import generateRandomSentence from './utils/CFGGenerator';

function App() {
  // State to detect mobile devices
  const [isMobile, setIsMobile] = useState(false);
  
  // State to control whether to show the landing page or main app
  const [showLandingPage, setShowLandingPage] = useState(true);
  
  // Initialize word bank with empty arrays for each word type
  const [wordBank, setWordBank] = useState({
    noun: [],
    verb: [],
    adjective: [],
    adverb: []
  });
  
  // State for the generated sentence
  const [sentence, setSentence] = useState('');

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Function to add a word to the word bank
  const addWord = (word, type) => {
    // Check if the word already exists in the word bank
    if (wordBank[type].includes(word)) {
      alert(`The word "${word}" is already in your ${type} list.`);
      return;
    }
    
    // Add the word to the appropriate category
    setWordBank(prevWordBank => ({
      ...prevWordBank,
      [type]: [...prevWordBank[type], word]
    }));
  };

  // Function to generate a random sentence
  const handleGenerateSentence = () => {
    // Check if we have enough words to generate a sentence
    const hasNouns = wordBank.noun.length > 0;
    const hasVerbs = wordBank.verb.length > 0;
    
    if (!hasNouns || !hasVerbs) {
      alert('Please add at least one noun and one verb to generate a sentence.');
      return;
    }
    
    // Generate a random sentence using our CFG utility
    const newSentence = generateRandomSentence(wordBank);
    setSentence(newSentence);
  };

  // Function to handle entering the main application
  const handleEnterApp = () => {
    setShowLandingPage(false);
  };

  return (
    <div className={`App ${isMobile ? 'mobile' : ''}`}>
      {showLandingPage ? (
        <LandingPage onEnter={handleEnterApp} />
      ) : (
        <>
          <header className="App-header">
            <h1>Random Sentence Generator</h1>
            <p>Add words and generate grammatically correct random sentences!</p>
          </header>
          
          <main className="App-main">
            <div className="container">
              <InputForm addWord={addWord} />
              <SentenceGenerator 
                wordBank={wordBank} 
                generateSentence={handleGenerateSentence} 
                sentence={sentence} 
              />
            </div>
          </main>
          
          <footer className="App-footer">
            <p>Interactive Random Sentence Generator using Context-Free Grammar</p>
            <p className="authors">By Bernard Ginn & Destiny Butler</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
