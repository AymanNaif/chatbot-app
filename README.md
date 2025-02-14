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
**Setting Up Whisper API Integration**

This project uses the Whisper API for speech-to-text functionality. To get started, follow these steps to configure the API:
Prerequisites

    Ensure you have a valid API key for OpenAI's Whisper API.
      1. You can obtain an API key by signing up at [OpenAI whisper](https://openai.com/index/whisper/) on the API 
      2. and the go to the [API Key](https://platform.openai.com/settings/organization/api-keys) and generate a key from there
      3.  then add it to .env file with key name of : REACT_APP_OPENAI_API_KEY
          example : ``` REACT_APP_OPENAI_API_KEY=keyFrom-OpenAi```
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
6. Login by using this account:
    ```
    username: admin
    password 1234
    ```
