export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
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
    title: "Fine-tuning GPT-4o-mini for Sentiment Classification",
    description: "Fine-tuning GPT-4o-mini to achieve state-of-the-art performance on complex sentiment classification tasks with minimal training data.",
    tags: ["GPT-4o-mini", "Fine-tuning", "Sentiment Analysis", "NLP", "Classification"],
    image: "/images/gpt4o-mini.png",
    slug: "fine-tuning-gpt4o-mini-sentiment"
  },
  {
    id: "eval-strategies",
    title: "Eval Strategies 101",
    description: "A comprehensive guide to designing effective evaluation strategies for language models in production environments.",
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