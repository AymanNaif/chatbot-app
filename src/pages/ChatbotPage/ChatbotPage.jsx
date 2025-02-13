import React, { useState } from "react";
import ChatHistory from "../../components/ChatHistory/ChatHistory";
import ChatInput from "../../components/ChatInput/ChatInput";
import styles from "./ChatbotPage.module.css";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setMessages([...messages, { sender: "user", text: message }]);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <ChatHistory messages={messages} />
        <ChatInput onSend={handleSendMessage} onClear={handleClearChat} />
      </div>
    </div>
  );
};

export default ChatbotPage;
