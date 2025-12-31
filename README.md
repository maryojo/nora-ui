# Modula UI

A library of modern UI patterns and complete interfaces built with [Shadcn](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/). Get beautiful, functional UIs without building from scratch.

## ✨ Features

- 🎨 **Complete UI Patterns** - Full-featured interfaces, not just individual components
- 🚀 **Easy Integration** - Simple CLI to add entire UI blocks to your project
- 📦 **Copy & Paste** - Browse interfaces in your browser and copy code directly
- 🎯 **Modern Stack** - Built with Next.js, React 19, and Tailwind CSS 4
- 🔧 **Customizable** - Full control over styling and behavior
- 📱 **Responsive** - Mobile-first design approach

## 🚀 Quick Start

### Browse UI Patterns

Run the library locally to browse all available UI patterns and interfaces:

```bash
npx modula-ui
```

This will start a local server at `http://localhost:3177` where you can:
- Preview all UI patterns
- Copy interface code
- See live examples

### Add UI Patterns to Your Project

Use the CLI to add complete interfaces directly to your project:

```bash
npx modula-ui add <component-name>
```

The CLI will automatically:
1. Install required dependencies
2. Install necessary Shadcn UI components
3. Copy the complete interface files to your project

## 📦 Available UI Patterns

- **video-conference** - Full-featured video conferencing interface with participant grid, controls, and animations
- **group-chat** - Modern group chat interface with sidebar, message threads, and real-time feel


## 🛠️ Installation

### Prerequisites

- Node.js >= 18.17.0
- A Next.js or React project with Tailwind CSS configured

### Example: Adding a UI Block

```bash
# Add the video conference page
npx modula-ui add video-conference

# Add the group chat interface
npx modula-ui add group-chat
```

The interface will be added to `src/library/<type>/` (or `library/<type>/` if no `src` folder exists).

## 🎯 Usage

After adding a UI pattern, import and use it in your project:

```jsx
import VideoConferencePage from '@/library/pages/VideoConferencePage';

export default function MyPage() {
  return <VideoConferencePage />;
}
```

## 🏗️ Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Components:** Radix UI primitives
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

## 📄 License

MIT © Mary Ojo


## 🔗 Links

- [npm Package](https://www.npmjs.com/package/modula-ui)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
