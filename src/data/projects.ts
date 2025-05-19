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
    id: "multimodal-rag",
    title: "Multi-modal RAG to Enable Creative Outfits",
    description: "Building a recommendation system that uses multi-modal RAG to suggest creative outfit combinations based on visual and textual inputs.",
    tags: ["RAG", "Multi-modal", "Computer Vision", "LLM", "Fashion"],
    image: "/images/fashion-llm.png",
    slug: "multimodal-rag-creative-outfits"
  },
  {
    id: "gpt4o-mini",
    title: "From Tweets to Insights: 93% Accuracy with Fine-Tuned AI",
    description: "Achieving remarkable sentiment analysis accuracy for airline customer feedback through strategic fine-tuning of GPT-4o-mini, delivering actionable intelligence with minimal training data.",
    tags: ["GPT-4o-mini", "Fine-tuning", "Sentiment Analysis", "Social Media", "Airlines", "NLP"],
    image: "/images/gpt4o-mini.png",
    slug: "airline-sentiment-analysis",
    caseStudyPath: "./src/data/airline-sentiment-case-study.md"
  },
  {
    id: "eval-strategies",
    title: "From Vibes to Flywheel: Rigorous AI Evaluation",
    description: "A comprehensive guide to designing effective evaluation strategies for language models in production environments, building trust through systematic validation.",
    tags: ["Evaluation", "Benchmarking", "LLM", "ML Ops", "Testing"],
    image: "/images/eval-strategies.png",
    slug: "eval-strategies-101"
  },
  {
    id: "ollama-trivia",
    title: "Trivia Creation Using Local LLM",
    description: "Building a local trivia generation system using Ollama to create engaging, factually accurate questions without requiring cloud APIs.",
    tags: ["Ollama", "Local LLM", "Trivia", "Content Generation", "Edge AI"],
    image: "/images/ollama-trivia.png",
    slug: "trivia-creation-ollama"
  }
];

export const aboutMe = {
  name: "Steve Ottenad",
  role: "Solution Architect",
  bio: "I'm an experienced solution architect specializing in delivering valuable solutions for enterprice customers. ",
  github: "https://github.com/steveotten",
  linkedin: "https://linkedin.com/in/steveotten",
  profileImage: "/images/profile.png"
};