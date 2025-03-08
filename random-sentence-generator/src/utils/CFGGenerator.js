/**
 * Context-Free Grammar (CFG) Sentence Generator
 * 
 * This utility implements a simple CFG for generating grammatically correct
 * random sentences based on user-provided words.
 */

// Helper function to get a random item from an array
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Articles to use in noun phrases
const articles = ['The', 'A', 'An'];

/**
 * Generate a random sentence based on the provided word bank
 * 
 * Grammar rules:
 * Sentence → NounPhrase VerbPhrase
 * NounPhrase → Article Adjective? Noun
 * VerbPhrase → Verb Adverb?
 * 
 * @param {Object} wordBank - Object containing arrays of words by type
 * @returns {string} A randomly generated sentence
 */
const generateRandomSentence = (wordBank) => {
  // Check if we have all required word types
  const { noun, verb, adjective, adverb } = wordBank;
  
  if (!noun.length || !verb.length) {
    return 'Not enough words to generate a sentence. Please add at least one noun and one verb.';
  }
  
  // Generate a noun phrase
  const article = getRandomItem(articles);
  const useAdjective = adjective.length > 0 && Math.random() > 0.3; // 70% chance to use adjective if available
  const selectedNoun = getRandomItem(noun);
  
  let nounPhrase = article;
  if (useAdjective) {
    nounPhrase += ' ' + getRandomItem(adjective);
  }
  nounPhrase += ' ' + selectedNoun;
  
  // Generate a verb phrase
  const selectedVerb = getRandomItem(verb);
  const useAdverb = adverb.length > 0 && Math.random() > 0.4; // 60% chance to use adverb if available
  
  let verbPhrase = selectedVerb;
  if (useAdverb) {
    verbPhrase += ' ' + getRandomItem(adverb);
  }
  
  // Combine to form a sentence
  const sentence = `${nounPhrase} ${verbPhrase}.`;
  
  // Capitalize first letter and return
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

export default generateRandomSentence; 