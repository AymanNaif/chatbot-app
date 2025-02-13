import React from "react";
import styles from "./ChatHistory.module.css";

const ChatHistory = ({ messages }) => {
  return (
    <div className={styles.chatHistory}>
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`${styles.message} ${
            msg.sender === "user" ? styles.user : styles.bot
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
