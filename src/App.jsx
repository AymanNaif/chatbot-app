import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChatbotPage from "./pages/ChatbotPage/ChatbotPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/chat" element={<ChatbotPage />} />
    </Routes>
  );
};

export default App;
