# 🤖 Career Chatbot API

A backend chatbot built using **Node.js, Express, and OpenAI API** that provides career guidance, interview preparation tips, and general advice through a simple REST API.

---

## 📌 Overview

This project is designed to simulate a **career assistant chatbot**.
It processes user queries and returns meaningful, structured responses using an AI model.

---

## 🚀 Features

* 💬 AI-powered chatbot responses
* 🎯 Career guidance and interview tips
* ⚡ Fast and lightweight Express server
* 🔐 Secure API key handling using environment variables

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **OpenAI API**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/P-swe123/career-chatbot.git
cd career-chatbot
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

```
OPENAI_API_KEY=your_api_key_here
PORT=5000
```

> ⚠️ Never commit your actual API key. Use `.env.example` as reference.

---

## ▶️ Running the Server

```bash
node server.js
```

Server will start at:

```
http://localhost:5000
```

---

## 🧪 Testing with Postman

### 📍 Endpoint

```
POST /chat
```

### 📤 Request Body (JSON)

```json
{
  "message": "How can I prepare for technical interviews?"
}
```

### 📥 Sample Response

```json
{
  "reply": "To prepare for technical interviews, focus on data structures, practice coding problems, and understand system design basics..."
}
```

---

## 🧠 System Prompt Design

The system prompt is structured to ensure the chatbot behaves as a **professional career advisor**:

* Provides **clear and structured answers**
* Maintains a **friendly and supportive tone**
* Focuses on **practical and actionable advice**

This improves response quality and ensures relevance to user queries.

---

## 🧩 Long-Term Memory

If implemented:

* Stores previous user interactions
* Sends conversation history with new requests
* Enables **context-aware and personalized responses**

If not implemented:

* Each request is handled independently without memory

---

## 📁 Project Structure

```
career-chatbot/
│── node_modules/
│── .env.example
│── package.json
│── server.js
│── README.md
```

---

## 🔒 Security Note

* Do not expose your API keys publicly
* Always use environment variables (`.env`)
* `.env.example` is provided for reference only

---

## 🚀 Future Improvements

* 🌐 Add frontend UI (React)
* 🗄️ Integrate database for chat history
* ☁️ Deploy on cloud (Render / Vercel)
* 🔐 Add authentication

---

## 👨‍💻 Author

**P-swe123**

---
## ⭐ Acknowledgements

* OpenAI for AI capabilities
* Express.js for backend framework

---
