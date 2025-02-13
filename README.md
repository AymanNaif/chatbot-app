# Chatbot Application

This is a React.js application that consists of:

1. **Login Page**: A basic login form.
2. **Chatbot Page**: A chat interface with speech-to-text functionality powered by OpenAI Whisper API.

---

## Features

- **Login Page**:
  - Validates user credentials with a hardcoded username and password.
- **Chat Interface**:
  - Message input with "Send" functionality.
  - Speech-to-text conversion using the OpenAI Whisper API.
  - "Clear Chat" functionality to reset the conversation.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 14 or higher recommended)
- **npm** or **yarn**
- A valid **OpenAI API key** (with sufficient quota for the Whisper API).

---

## Installation and Setup

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd chatbot-app
   ```
2. **Install Dependencies:**

   ```
   npm install

   ``
   ```

3. **Create an Environment File:**

   In the root directory, create a .env file:

   REACT_APP_OPENAI_API_KEY=your_openai_api_key

   Replace your_openai_api_key with your valid OpenAI API key.

4. **Start the Application:**

   ```
   npm start

   ```

5. **Open the Application:**

   ```
   Visit http://localhost:3000 in your browser.

   ```
