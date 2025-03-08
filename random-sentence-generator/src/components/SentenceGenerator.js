/* Import React library for creating components */
import React from 'react';
/* Import CSS styles for this component */
import './SentenceGenerator.css';

/* Define the SentenceGenerator component that receives wordBank, generateSentence function, and sentence as props */
const SentenceGenerator = ({ wordBank, generateSentence, sentence }) => {
  /* Return the JSX for rendering the component */
  return (
    /* Main container div for the sentence generator */
    <div className="sentence-generator">
      {/* Heading for the sentence generator section */}
      <h2>Sentence Generator</h2>
      
      {/* Container for displaying the word bank */}
      <div className="word-bank">
        {/* Heading for the word bank section */}
        <h3>Word Bank</h3>
        {/* Container for the different word categories */}
        <div className="word-categories">
          {/* Map through each word type (noun, verb, etc.) in the wordBank object */}
          {Object.keys(wordBank).map(type => (
            /* Container for each word category with a unique key */
            <div key={type} className="word-category">
              {/* Heading for each word type, capitalized first letter */}
              <h4>{type.charAt(0).toUpperCase() + type.slice(1)}s</h4>
              {/* Conditional rendering based on whether there are words of this type */}
              {wordBank[type].length > 0 ? (
                /* Unordered list to display words if they exist */
                <ul>
                  {/* Map through each word in this category */}
                  {wordBank[type].map((word, index) => (
                    /* List item for each word with a unique key */
                    <li key={index}>{word}</li>
                  ))}
                </ul>
              ) : (
                /* Message to display if no words of this type exist yet */
                <p className="empty-message">No {type}s added yet</p>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Button to generate a random sentence */}
      <button 
        /* Apply CSS class for styling */
        className="generate-button" 
        /* Call generateSentence function when clicked */
        onClick={generateSentence}
        /* Disable button if any word category is empty */
        disabled={!Object.values(wordBank).every(arr => arr.length > 0)}
      >
        {/* Button text */}
        Generate Sentence
      </button>
      
      {/* Conditional rendering of the generated sentence section */}
      {sentence && (
        /* Container for the generated sentence */
        <div className="generated-sentence">
          {/* Heading for the generated sentence section */}
          <h3>Generated Sentence:</h3>
          {/* Paragraph to display the generated sentence */}
          <p>{sentence}</p>
        </div>
      )}
    </div>
  );
};

/* Export the SentenceGenerator component for use in other files */
export default SentenceGenerator; 