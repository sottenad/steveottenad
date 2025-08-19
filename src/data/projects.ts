export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  caseStudyPath?: string; // Optional path to markdown file containing detailed case study
}

export const projects: Project[] = [
      {
    id: "sow-analyzer",
    title: "Case Study: Transforming Statement of Work Review with AI",
    description: "An AI-powered system that streamlines Statement of Work reviews, uncovering risks and improvements in hours instead of days.",
    tags: ["AI Document Analysis", "Statement of Work", "Risk Management", "Enterprise Productivity", "Contract Quality"],
    image: "/images/sow.png",
    slug: "sow-analyzer",
    caseStudyPath: "./src/data/sow-analyzer.md"
  },
    {
    id: "agenda-app",
    title: "Case Study: AI-Powered Agenda Optimization",
    description: "Building an AI-powered platform that transforms conference planning into a personalized, data-driven experience for attendees and organizers.",
    tags: ["Event Personalization", "Agenda Optimization", "LLM Recommendations", "Multi Session Planning", "User Engagement"],
    image: "/images/gsv.png",
    slug: "agenda-app",
    caseStudyPath: "./src/data/agenda-app.md"
  },
  {
    id: "multimodal-rag",
    title: "Multi-modal RAG to Enable Creative Outfits",
    description: "Building a recommendation system that uses multi-modal RAG to suggest creative outfit combinations based on visual and textual inputs.",
    tags: ["RAG", "Multi-modal", "Computer Vision", "LLM", "Fashion"],
    image: "/images/fashion-llm.png",
    slug: "multimodal-rag-creative-outfits",
    caseStudyPath: "./src/data/fashion-multimodal.md"
  },
  {
    id: "gpt4o-mini",
    title: "From Tweets to Insights: 93% Accuracy with Fine-Tuned AI",
    description: "Achieving very high sentiment analysis accuracy for airline customer feedback through strategic fine-tuning of GPT-4o-mini, delivering actionable intelligence with minimal training data.",
    tags: ["GPT-4o-mini", "Fine-tuning", "Sentiment Analysis", "Social Media", "Airlines", "NLP"],
    image: "/images/gpt4o-mini.png",
    slug: "airline-sentiment-analysis",
    caseStudyPath: "./src/data/airline-sentiment-case-study.md"
  },
  {
    id: "eval-strategies",
    title: "From Vibes to Flywheel: Rigorous AI Evaluation",
    description: "A starter guide to understanding why evals matter, when and how to use them, and how to build a roadmap to a mature eval driven development cycle",
    tags: ["Evaluation", "Benchmarking", "LLM", "ML Ops", "Testing"],
    image: "/images/eval-strategies.png",
    slug: "eval-strategies",
    caseStudyPath: "./src/data/eval-strategies.md"
  },
  {
    id: "ollama-trivia",
    title: "Trivia Creation Using Local LLM",
    description: "Building a local trivia generation system using Ollama to create engaging, factually accurate questions without requiring cloud APIs.",
    tags: ["Ollama", "Local LLM", "Trivia", "Content Generation", "Edge AI"],
    image: "/images/ollama-trivia.png",
    slug: "trivia-creation-ollama",
    caseStudyPath: "./src/data/ollama-trivia.md"
  }
];

export const aboutMe = {
  name: "Steve Ottenad",
  role: "Solution Architect",
  bio: "Solution Architect with 15+ years of experience turning complex enterprise challenges into scalable, high-impact solutions. ",
  github: "https://github.com/steveotten",
  linkedin: "https://linkedin.com/in/steveotten",
  profileImage: "/images/profile.png"
};