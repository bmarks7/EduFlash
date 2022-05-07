import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./contexts/quiz";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);

