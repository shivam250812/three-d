Forge - 3D Landing Page Replica
This project is a high-fidelity, pixel-perfect replica of a modern landing page for a CNC manufacturing company called "Forge." The design was sourced from a video and has been meticulously recreated using a modern frontend stack.

The primary goal of this project was to demonstrate proficiency in advanced frontend technologies, including 3D rendering with React Three Fiber, complex scroll-based animations, and responsive, component-based architecture with Next.js.

Live Demo: your-project-name.vercel.app (Replace with your Vercel deployment link)

✨ Key Features
Pixel-Perfect Replication: The layout, typography, spacing, and colors have been carefully matched to the original design video.

Interactive 3D Hero Section: A stunning hero section featuring a 3D model with a realistic metallic texture, animated and rendered in real-time using React Three Fiber.

Advanced Scroll Animations: As the user scrolls, the 3D model dynamically animates to new positions, creating a seamless and engaging parallax effect.

Automatic Carousel: The "Most Popular Details" section features an automatic, looping carousel that animates smoothly, built with Framer Motion.

Fully Responsive Design: The entire landing page is fully responsive and optimized for a seamless experience across desktops, tablets, and mobile devices.

Performance Optimized: The 3D scene includes advanced performance monitoring that automatically adjusts render quality to ensure a smooth frame rate on all devices.

🛠️ Tech Stack
This project was built using a modern, type-safe, and performant technology stack:

Framework: Next.js (with App Router)

Language: TypeScript

Styling: Tailwind CSS

3D Rendering: React Three Fiber & Drei

Animation: Framer Motion

State Management: Zustand (for global animation state)

Scroll Detection: React Intersection Observer

Deployment: Vercel

🚀 Getting Started
To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

Install dependencies:

npm install

Place 3D Assets:
Make sure you have the model.glb and texture.exr files placed inside the public/models/ directory.

Run the development server:

npm run dev

Open http://localhost:3000 in your browser to see the result.

📂 Project Structure
The project follows the standard Next.js App Router structure:

.
├── public/
│   └── models/       # Contains the .glb and .exr 3D assets
├── src/
│   ├── app/          # Main page routes and global layout
│   ├── components/   # All reusable React components
│   └── lib/          # Utility files, like the Zustand store
├── next.config.mjs
├── package.json
└── README.md
