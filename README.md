# Personal Site - React + TypeScript + Vite

A modern, responsive personal website built with React, TypeScript, and Vite. Features a professional design with smooth animations and a cohesive color scheme.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 🐳 Docker Deployment

### Build and Run with Docker
```bash
# Build the Docker image
docker build -t personal-site .

# Run the container
docker run -p 3000:80 personal-site
```

### Using Docker Compose
```bash
# Production deployment
docker-compose up -d

# Development mode with hot reload
docker-compose --profile dev up
```

Your site will be available at:
- **Production**: http://localhost:3000
- **Development**: http://localhost:5173

## 📁 Project Structure
```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills with progress bars
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🎨 Features
- Responsive design with mobile-first approach
- Modern color scheme with var(--color-primary) primary color
- Smooth scrolling navigation
- Interactive skill progress bars
- Contact form with validation
- Professional typography and spacing
- Optimized for performance

## 🛠 Technologies
- React 18 with TypeScript
- Vite for fast development
- Modern CSS with Flexbox/Grid
- Docker for containerization
- Nginx for production serving

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
