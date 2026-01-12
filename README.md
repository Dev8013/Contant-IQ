<p align="center">
  <img src="public/thumail.png" alt="Content Analysis Tool Thumbnail" width="600" />
</p>


Content Analysis Tool
A modern web application for analyzing various content types (YouTube videos, PDFs, resumes, images) using React + Vite, TypeScript, Bun/Puter.js, shadcn/ui, and Zustand. Provides detailed scores, insights, and actionable improvements.

✨ Features
Multi-format Analysis: YouTube videos, PDFs, resumes, images

Comprehensive Scoring: Quality, readability, engagement metrics

Actionable Improvements: Specific recommendations for enhancement

Real-time Processing: Instant analysis feedback

Responsive UI: Beautiful shadcn/ui components

Type-safe: Full TypeScript implementation

State Management: Efficient Zustand store

🛠️ Tech Stack
Category	Technology
Frontend	React 18, Vite, TypeScript
Runtime	Bun / Puter.js
UI	shadcn/ui, Tailwind CSS
State	Zustand
Analysis	Custom ML models, NLP APIs
🚀 Quick Start
Prerequisites
Node.js 18+ or Bun

Yarn / npm / Bun

Installation
bash
# Clone the repository
git clone <your-repo-url>
cd content-analysis-tool

# Install dependencies
bun install
# or
npm install
# or
yarn install

# Run development server
bun dev
# or
npm run dev
App runs at: http://localhost:5173

📁 Project Structure
text
src/
├── components/     # shadcn/ui components + custom
├── lib/           # Utils, API clients, analysis logic
├── stores/        # Zustand state management
├── types/         # TypeScript definitions
├── hooks/         # Custom React hooks
└── app/           # Main app components
🎯 Usage
Upload Content: Drag & drop or select YouTube URL/PDF/Image/Resume

Analysis Runs: AI processes content (2-10 seconds)

View Results: Score breakdown + improvement suggestions

Export: PDF/JSON report download

Example Analysis Output
text
📊 Resume Score: 82/100
✅ Strengths: Strong technical skills, relevant experience
⚠️ Improvements: 
  - Add quantifiable achievements
  - Improve formatting consistency
  - Include GitHub links
🔧 Configuration
Create .env.local:

text
VITE_ANALYSIS_API_KEY=your_api_key
VITE_YOUTUBE_API_KEY=your_youtube_key
🧪 Testing
bash
# Run tests
bun test
# or
npm run test
🚀 Deployment
bash
# Build for production
bun run build

# Preview production build
bun run preview
Recommended: Vercel, Netlify, Cloudflare Pages

📊 Analysis Features
Content Type	Metrics Analyzed	Score Categories
YouTube	Engagement, SEO, Retention	Watch Time, CTR, Quality
PDFs	Readability, Structure	Clarity, Formatting
Resumes	ATS Score, Impact	Experience, Skills
Images	Quality, Composition	Clarity, Relevance
🎨 UI Components
File upload with drag & drop

Real-time analysis progress

Score cards with radial progress

Improvement suggestion panels

Responsive result tables

Dark/Light theme toggle

📈 State Management (Zustand)
typescript
// stores/analysisStore.ts
interface AnalysisState {
  results: AnalysisResult[]
  isAnalyzing: boolean
  score: number
  improvements: string[]
}
🤝 Contributing
Fork the repository

Create feature branch (git checkout -b feature/amazing-feature)

Commit changes (git commit -m 'Add amazing feature')

Push to branch (git push origin feature/amazing-feature)

Open Pull Request

📄 License
MIT License - see LICENSE file.

🙌 Acknowledgments
shadcn/ui - Beautiful components

Vite - Lightning-fast builds

Zustand - Simple state management

Bun - Fast runtime

⭐ Star this repo if you found it useful!
🔥 Built with ❤️ for content creators & job seekers
