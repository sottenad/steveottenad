#### [Live Demo - https://gsv-frontend.onrender.com/](https://gsv-frontend.onrender.com/)

### Case Study: AI-Powered Agenda Optimization

At large-scale conferences, attendees are often faced with the challenge of choosing between hundreds of overlapping sessions, networking events, and vendor meetings. The goal of this initiative was threefold:

* **Help attendees** build the best possible agenda based on their role, goals, and interests
* **Provide organizers** with real-time insights into attendee preferences to inform content curation and overflow management
* **Enable connections** between attendees and vendors who share common interests
  Longer-term, the platform was also designed to support advanced capabilities such as dynamic re-routing of attendees into overflow sessions.

The complexity of these goals introduced several challenges. Attendees came in with diverse backgrounds, learning priorities, and scheduling constraints, making it difficult to optimize for both **relevance** and **practical considerations** like breaks, room changes, and networking. Collecting preference data without overwhelming users with forms was another hurdle. On the technical side, the system had to:

* Balance conversational AI, semantic search, and scheduling logic in a single flow
* Remain performant and scalable for thousands of concurrent users
* Keep data useful to both individual attendees and event organizers
  At the same time, the frontend experience had to feel natural and engaging, avoiding the sense of “form filling” while still producing structured, actionable data.

The solution was a two-tiered architecture: an AI-driven backend and a modern React-based frontend. The backend, built with FastAPI and orchestrated using LangGraph, managed conversational flows, confidence scoring, vector search, and custom scheduling. It leveraged GPT-4 for natural language understanding and preference extraction, and Qdrant/Chroma with OpenAI embeddings for semantic search across sessions, vendors, and speakers. PostgreSQL with JSONB storage ensured flexible, durable persistence of session data, while Docker-based deployment provided scalability and operational simplicity. Together, these choices enabled a **production-ready service** capable of personalization and aggregated insights.

On the frontend, the application was built with Next.js 15.3.5 and React 19, using the new App Router architecture for performance and maintainability. A conversational UI captured attendee preferences in a natural, chat-like flow, supported by Framer Motion animations and confidence-based progress visualizations. FullCalendar provided an interactive, mobile-friendly view of the optimized agenda, while Tailwind CSS and a custom design system ensured accessibility and branding consistency. Key decisions included:

* **Local state management** with lightweight persistence in localStorage
* **Polling-based updates** for reliable sync without WebSocket complexity
* **Split panel layout** to clearly separate conversational inputs from agenda outputs

The outcome was a production-ready application that transformed conference planning from a tedious manual process into an **engaging AI-powered interaction**. Attendees could quickly articulate their goals, explore tailored session recommendations, and see them reflected in a conflict-free, visually clear agenda. Organizers gained access to real-time insights that supported:

* On-the-fly adjustments to programming and overflow
* Promotion of sessions or vendors based on attendee demand
* Richer clustering of networking opportunities

Ultimately, the project demonstrated the value of combining conversational AI, vector search, and intelligent scheduling within a thoughtfully designed frontend. By prioritizing **user experience, scalability, and maintainability**, the system not only solved the immediate problem of session overload but also created a foundation for richer attendee insights and adaptive conference management. The technical decisions—such as using LangGraph for stateful workflows, FastAPI for type-safe APIs, and Next.js for modern frontend delivery—proved critical in aligning the platform’s ambitious goals with a practical, extensible architecture.
