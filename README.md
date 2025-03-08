# Interactive Random Sentence Generator
![Screenshot 2025-03-08 at 3 26 01 PM](https://github.com/user-attachments/assets/e6febd9c-b526-459f-8e50-b78f4f3eb323)
![Screenshot 2025-03-08 at 3 26 07 PM](https://github.com/user-attachments/assets/d67066b1-05b7-4701-af75-f4516e752ca9)


A React-based web application that allows users to create random sentences by adding words to a word bank and generating grammatically correct sentences.

## Project Overview

This project was created as Project 1 for the Theory of Computation course by Bernard Ginn and Destiny Butler. The application demonstrates concepts related to formal languages and grammar by implementing a random sentence generator that follows specific syntactic rules.

## Features

- Interactive landing page with animated elements
- Form to add words of different types (nouns, verbs, adjectives, adverbs)
- Word bank that organizes and displays added words by category
- Random sentence generation based on a simple grammar
- Responsive design that works on both desktop and mobile devices

## Technologies Used

- React.js
- CSS3 with animations
- JavaScript ES6+

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Interactive-Random-Sentence-Generator.git
   cd Interactive-Random-Sentence-Generator
   ```

2. Navigate to the project directory:
   ```bash
   cd random-sentence-generator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Use

1. **Landing Page**:
   - When you first open the application, you'll see an animated landing page
   - Click the "Enter Application" button to proceed to the main application

2. **Adding Words**:
   - Use the "Add Words" form on the left side of the screen
   - Enter a word in the text field
   - Select the appropriate word type (noun, verb, adjective, or adverb)
   - Click the "Add Word" button to add the word to the word bank

3. **Generating Sentences**:
   - Words you add will appear in the Word Bank section, organized by type
   - Once you have at least one word of each type, the "Generate Sentence" button will become active
   - Click "Generate Sentence" to create a random sentence using words from your word bank
   - The generated sentence will appear below the button

4. **Grammar Rules**:
   - The application follows a simple grammar to generate sentences
   - The basic sentence structure is: [Article] [Adjective] [Noun] [Verb] [Adverb]
   - Articles are automatically added where appropriate

## Project Structure
random-sentence-generator/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── InputForm.js # Form for adding words
│ │ ├── InputForm.css # Styles for the input form
│ │ ├── LandingPage.js # Animated landing page
│ │ ├── LandingPage.css # Styles for the landing page
│ │ ├── SentenceGenerator.js # Sentence generation component
│ │ └── SentenceGenerator.css # Styles for the sentence generator
│ ├── App.js # Main application component
│ ├── index.js # Entry point
│ └── ...
└── package.json
community

## Building for Production

To build the app for production:

```bash
npm run build
```

This creates a `build` directory with a production build of the application. The build is minified and the filenames include hashes for efficient caching.

## Deployment

The application can be deployed to various hosting platforms:

### GitHub Pages
```bash
npm install --save gh-pages
```

Add the following to your `package.json`:
```json
"homepage": "https://yourusername.github.io/Interactive-Random-Sentence-Generator",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```

### Netlify, Vercel, or other platforms
Follow the platform-specific deployment instructions, pointing to your build directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Theory of Computation course instructors and teaching assistants
- React.js documentation and community
