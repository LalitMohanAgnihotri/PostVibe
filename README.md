PostVibe
PostVibe is a dynamic React-based social media dashboard designed for a seamless content sharing experience. It utilizes advanced React patterns to manage a real-time feed, user interactions, and a clean, responsive interface.

🚀 Key Features
Centralized State: Powered by React Context API and the useReducer hook to maintain a "single source of truth" for all post data.

Smart Data Fetching: Automatically populates the feed from an external API using useEffect with built-in cleanup logic (AbortController) to ensure performance.

Interactive UI: * Create: Add new posts instantly with tags and reaction counters.

Delete: Remove posts dynamically with a single click.

Loading States: Integrated LodingSpinner for a polished user experience during data transitions.

Responsive Design: A sleek layout built with Bootstrap 5, featuring a side-navigation drawer and mobile-friendly post cards.

🛠️ Tech Stack
Framework: React.js

State Management: Context API & useReducer

Icons: React Icons (MdDelete)

UI Framework: Bootstrap 5

API: DummyJSONProject HighlightsFeatureImplementationForm HandlinguseRef for high-performance, uncontrolled input components.Logic SeparationReducer logic is isolated in post-list-store.jsx for better maintainability.NavigationState-based conditional rendering for switching between "Home" and "Create Post".
Installation
Clone the project

Bash

git clone https://github.com/LalitMohanAgnihotri/Calculator.git
Install dependencies

Bash

npm install
Start the vibe

Bash

npm run dev
