# trivia-engine.com: Transforming Jeopardy! with AI

## Business Overview

**What It Is:**  
Trivia-engine.com is an API service that transforms over 200,000 Jeopardy! clues from J-Archive into engaging multiple-choice questions using AI technology. This project extends my earlier work (jService) by addressing the most frequent developer request: converting free-response questions into the more accessible multiple-choice format.

**Why It Matters:**  
As a Jeopardy! enthusiast, I created the original jService API to share this rich content with developers. However, the direct question-answer format created implementation challenges for many applications. Multiple-choice significantly lowers the barrier to entry, making the content more versatile for games, educational tools, and entertainment applications.

## Key Challenges & Solutions

### Challenge 1: Quality Distractors at Scale
**Problem:** Creating plausible but incorrect answer options for 200,000+ questions would require thousands of hours of expert work.

**Solution:** Developed a specialized AI transformation engine using a local LLM (qwq:32b) through Ollama. This approach allowed for batch processing with carefully engineered prompts that generate contextually appropriate wrong answers while maintaining the original difficulty level.

### Challenge 2: Cost-Effective Processing
**Problem:** Commercial AI APIs would make processing the entire database prohibitively expensive.

**Solution:** Implemented a local model deployment that eliminated per-token costs, enabling full database transformation with minimal ongoing expenses. This approach also reduced latency and eliminated external API dependencies.

### Challenge 3: Developer Accessibility
**Problem:** Developers needed flexible, reliable access with customization options.

**Solution:** Built a comprehensive API service with authentication, rate limiting, and diverse endpoints that allow random question retrieval, category filtering, and search functionality. Each endpoint follows consistent RESTful design principles with thorough documentation.

## Technical Implementation

### Technical Architecture Details

#### 1. Data Foundation
- **Extraction Pipeline:** Node.js with Cheerio for efficient HTML parsing
- **Database Design:** PostgreSQL with Prisma ORM implementing relational models for Categories, Clues, Games, and Players
- **Data Processing:** Implemented cleansing to remove extraneous content and deduplication using game IDs and question-answer pairs

#### 2. AI Transformation Engine
- **Model Implementation:** Deployed Ollama with qwq:32b model for high-quality local processing
- **Prompt Engineering:** Created structured templates that instruct the model to:
  - Rephrase clues into natural-language questions
  - Generate three plausible but definitively incorrect answers
  - Maintain consistent difficulty and knowledge domain
- **Quality Control:** Implemented JSON schema validation and error fallbacks to ensure consistent outputs

#### 3. API Service Layer
- **Framework:** Express.js with modular controllers for users, API keys, and trivia content
- **Authentication:** Dual-layer system with JWT tokens for account access and API keys for service integration
- **Performance:** Database indexing and query optimization for efficient random selection and filtering

## Technical Workflow Example

Here's how a typical transformation flows through the system:

**1. Original Jeopardy! Clue Selection:**
```json
{
  "category": "WORLD GEOGRAPHY",
  "value": 800,
  "clue": "This African nation is the continent's largest producer of oil",
  "answer": "Nigeria",
  "gameId": 4680
}
```

**2. AI Transformation Process:**
```javascript
// Simplified transformation prompt
const prompt = `
Convert this Jeopardy! clue into a multiple-choice question with one correct and three plausible but incorrect answers.

CATEGORY: ${clue.category}
CLUE: ${clue.clue}
CORRECT ANSWER: ${clue.answer}
DIFFICULTY: ${clue.value / 200} (on scale of 1-5)

Return a JSON object with:
1. A rephrased question in natural language
2. Four answer options including the correct one
3. The index of the correct answer
`;

const transformedQuestion = await ollama.generate({
  model: 'qwq:32b',
  prompt: prompt,
  format: 'json'
});
```

**3. Transformed Result:**
```json
{
  "question": "Which African nation is the continent's largest producer of oil?",
  "options": [
    "Nigeria",
    "Angola",
    "Algeria",
    "Libya"
  ],
  "correctIndex": 0,
  "originalClue": {
    "id": 34592,
    "category": "WORLD GEOGRAPHY",
    "value": 800
  }
}
```

**4. API Response:**
```json
{
  "success": true,
  "trivia": {
    "id": 12485,
    "question": "Which African nation is the continent's largest producer of oil?",
    "options": ["Nigeria", "Angola", "Algeria", "Libya"],
    "correctIndex": 0,
    "category": {
      "id": 583,
      "name": "WORLD GEOGRAPHY"
    },
    "difficulty": 4,
    "original": {
      "clueId": 34592,
      "gameId": 4680
    }
  }
}
```

## Business Impact

Trivia-engine.com has transformed the original jService content into a more developer-friendly and accessible format that:

1. **Expands Use Cases:** Enables implementation in casual games, educational applications, and entertainment platforms
2. **Increases Engagement:** Multiple-choice format lowers the barrier to participation while maintaining the educational value
3. **Provides Sustainable Value:** The architecture supports scaling with minimal operational costs

## Why It Works

The success of trivia-engine.com demonstrates how AI can transform existing content to add substantial value while maintaining its core quality. The project strikes an optimal balance between:

- **Human Expertise:** Using high-quality, curated Jeopardy! content as the foundation
- **AI Transformation:** Applying machine learning to handle the repetitive task of creating plausible alternatives
- **Developer Experience:** Delivering the content through a professionally designed API service

Rather than using AI to generate content from scratch, trivia-engine.com shows how AI can be most effectively used as a transformation layer that enhances existing expert-created content, making specialized knowledge more accessible to broader audiences.

Visit **trivia-engine.com** to explore the API and see how this approach could be applied to your own content transformation needs.