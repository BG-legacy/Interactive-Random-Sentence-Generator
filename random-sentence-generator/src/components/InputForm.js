/* Import React library and useState hook for state management */
import React, { useState } from 'react';
/* Import CSS styles for this component */
import './InputForm.css';

/* Define the InputForm component that receives addWord function as a prop */
const InputForm = ({ addWord }) => {
  /* Initialize state for the word input with empty string */
  const [word, setWord] = useState('');
  /* Initialize state for the word type with default value 'noun' */
  const [wordType, setWordType] = useState('noun');

  /* Regular expressions for validating different word types */
  const regexPatterns = {
    /* Pattern for nouns: only letters allowed, no numbers or special characters */
    noun: /^[a-zA-Z]+$/,
    /* Pattern for verbs: only letters allowed, no numbers or special characters */
    verb: /^[a-zA-Z]+$/,
    /* Pattern for adjectives: only letters allowed, no numbers or special characters */
    adjective: /^[a-zA-Z]+$/,
    /* Pattern for adverbs: only letters allowed, no numbers or special characters */
    adverb: /^[a-zA-Z]+$/
  };

  /* Function to handle form submission */
  const handleSubmit = (e) => {
    /* Prevent default form submission behavior (page reload) */
    e.preventDefault();
    
    /* Validate the word based on the selected type using regex patterns */
    if (word.trim() && regexPatterns[wordType].test(word)) {
      /* If valid, add the word to the word bank using the addWord function from props */
      /* Convert to lowercase and trim whitespace */
      addWord(word.trim().toLowerCase(), wordType);
      /* Reset the word input field after successful submission */
      setWord('');
    } else {
      /* Show an alert if the word is invalid */
      alert('Please enter a valid word');
    }
  };

  /* Render the component UI */
  return (
    /* Main container div for the input form */
    <div className="input-form">
      {/* Heading for the form section */}
      <h2>Add Words</h2>
      {/* Form element with submit handler */}
      <form onSubmit={handleSubmit}>
        {/* Form group for word input */}
        <div className="form-group">
          {/* Label for the word input field */}
          <label htmlFor="word">Word:</label>
          {/* Text input field for entering words */}
          <input
            /* Set input type to text */
            type="text"
            /* Connect label to input with matching id */
            id="word"
            /* Bind input value to word state */
            value={word}
            /* Update word state when input changes */
            onChange={(e) => setWord(e.target.value)}
            /* Placeholder text for the input field */
            placeholder="Enter a word"
            /* Make this field required */
            required
          />
        </div>
        
        {/* Form group for word type selection */}
        <div className="form-group">
          {/* Label for the word type dropdown */}
          <label htmlFor="wordType">Word Type:</label>
          {/* Dropdown select for choosing word type */}
          <select
            /* Connect label to select with matching id */
            id="wordType"
            /* Bind select value to wordType state */
            value={wordType}
            /* Update wordType state when selection changes */
            onChange={(e) => setWordType(e.target.value)}
          >
            {/* Option for noun word type */}
            <option value="noun">Noun</option>
            {/* Option for verb word type */}
            <option value="verb">Verb</option>
            {/* Option for adjective word type */}
            <option value="adjective">Adjective</option>
            {/* Option for adverb word type */}
            <option value="adverb">Adverb</option>
          </select>
        </div>
        
        {/* Submit button for the form */}
        <button type="submit" className="add-button">Add Word</button>
      </form>
    </div>
  );
};

/* Export the InputForm component for use in other files */
export default InputForm; 