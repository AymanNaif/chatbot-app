import React, { useState } from "react";
import styles from "./ChatInput.module.css";
import { recordAudio } from "../../utils/audioUtils";
import { whisperTranscription } from "../../utils/whisperAPI";

const ChatInput = ({ onSend, onClear }) => {
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSpeechToText = async () => {
    try {
      setIsRecording(true);
      const audioBlob = await recordAudio();
      const transcription = await whisperTranscription(audioBlob);
      setInput(transcription);
    } catch (error) {
      console.error("Error during Speech-to-Text:", error);
      alert("Failed to transcribe audio. Please try again.");
    } finally {
      setIsRecording(false);
    }
  };

  return (
    <div className={styles.chatInput}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message"
        onKeyDown={handleEnter}
      />
      <button onClick={handleSend} disabled={!input.trim()}>
        Send
      </button>
      <button onClick={handleSpeechToText} disabled={isRecording}>
        {isRecording ? "Recording..." : "Speech-to-Text"}
      </button>
      <button onClick={onClear}>Clear Chat</button>
    </div>
  );
};

export default ChatInput;
