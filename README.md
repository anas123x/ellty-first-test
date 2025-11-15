# Ellty Page Selector

A React application featuring an interactive page selector component with checkboxes and visual feedback states.

## 📋 Features

- **Select All/Individual Pages**: Toggle all pages at once or select individually
- **Interactive Checkboxes**: Hover, click, and selected states with smooth transitions
- **Custom Styling**: Built with Tailwind CSS and custom Montserrat font
- **Responsive Design**: Clean, centered layout with shadow effects
- **Component Architecture**: Well-organized, reusable React components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anas123x/ellty-first-test.git
cd ellty
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.jsx           # Styled button component
│   ├── CheckBox.jsx          # Interactive checkbox with states
│   ├── ListItem.jsx          # List item with checkbox
│   └── PageSelector.jsx      # Main page selector container
├── assets/
│   ├── fonts/Montserrat/     # Custom font files
│   └── icons/                # SVG icons for checkboxes
├── App.jsx                   # Root application component
├── main.jsx                  # Application entry point
└── index.css                 # Global styles and Tailwind config
```

## 🎨 Component Documentation

### PageSelector
Main component that manages page selection state and renders the UI.
- **Props**: `onDone` (callback function when Done button is clicked)

### ListItem
Renders a selectable list item with hover and click interactions.
- **Props**: `text`, `isChecked`, `onToggle`

### CheckBox
Interactive checkbox with visual states (hover, clicking, checked).
- **Props**: `isHovering`, `isClicking`, `isChecked`

### Button
Styled button with yellow accent color.
- **Props**: `children`, `onClick`, `className`

## 🎯 Tech Stack

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **ESLint** - Code linting

## 📝 Code Quality

- JSDoc comments for all components and functions
- Consistent naming conventions
- Modular component structure
- Clean separation of concerns

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.
