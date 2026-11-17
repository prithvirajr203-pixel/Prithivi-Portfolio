export const skillGroups = [
  {
    title: "AI & Agentic AI",
    items: [
      "Agentic AI",
      "AI Agents",
      "Generative AI",
      "LLM Applications",
      "Prompt Engineering",
      "AI Automation",
      "AI Orchestration",
      "Tool Integration",
      "Workflow Automation",
    ],
  },
  {
    title: "Automation",
    items: ["n8n", "Webhooks", "REST APIs", "HTTP Requests", "API Integration", "Workflow Orchestration"],
  },
  {
    title: "Programming",
    items: ["Python", "JavaScript", "FastAPI", "Flask", "Node.js", "JSON"],
  },
  {
    title: "AI / ML",
    items: [
      "Machine Learning",
      "YOLOv8",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
      "Object Detection",
      "Gesture Recognition",
      "Model Evaluation",
    ],
  },
  {
    title: "Database",
    items: ["MongoDB", "MongoDB Atlas"],
  },
  {
    title: "Tools / Cloud",
    items: ["Git", "GitHub", "AWS", "Microsoft Azure", "VS Code", "PyCharm", "Vercel", "Netlify"],
  },
];

// Technology constellation nodes (center: AI Agent)
export const constellation = [
  { id: "python", label: "Python", description: "Core language for AI, automation and scripting." },
  { id: "n8n", label: "n8n", description: "Workflow automation and orchestration." },
  { id: "groq", label: "Groq", description: "High-speed LLM inference." },
  { id: "llms", label: "LLMs", description: "Large language models powering reasoning." },
  { id: "rest", label: "REST APIs", description: "Connecting agents to external services." },
  { id: "webhooks", label: "Webhooks", description: "Event-driven automation triggers." },
  { id: "mongodb", label: "MongoDB", description: "Document database for flexible data storage." },
  { id: "git", label: "Git", description: "Version control for every build." },
  { id: "github", label: "GitHub", description: "Hosting, collaboration and CI." },
  { id: "fastapi", label: "FastAPI", description: "High-performance backend APIs." },
  { id: "flask", label: "Flask", description: "Lightweight Python web framework." },
  { id: "yolov8", label: "YOLOv8", description: "Real-time object detection." },
  { id: "opencv", label: "OpenCV", description: "Computer vision processing." },
  { id: "mediapipe", label: "MediaPipe", description: "Real-time gesture and pose tracking." },
  { id: "aws", label: "AWS", description: "Cloud infrastructure and deployment." },
  { id: "azure", label: "Microsoft Azure", description: "Cloud platform for AI services." },
];
