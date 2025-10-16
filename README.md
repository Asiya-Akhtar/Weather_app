# 🌦️ AI-Generated Weather App  

A modern, full-stack **Weather Application** built using **SpecKit CLI**, powered by **Qwen AI** through **Spec-Driven Development**.  
This project showcases how intelligent automation and clean architecture can deliver accurate, real-time weather data with minimal human coding effort.  

---

## 🌟 Features

- **Current Weather & 3-Day Forecast** – Powered by OpenWeather API  
- **Smart Input Validation** – Prevents invalid or empty searches  
- **Celsius ↔ Fahrenheit Conversion** – Toggle between temperature units  
- **Location Search** – Find weather by city or GPS coordinates  
- **Responsive UI** – Seamlessly adapts to mobile and desktop  
- **Error Handling** – Friendly feedback for all failure scenarios  
- **Caching & Rate Limiting** – Efficient and API-friendly requests  

---

## 🏗️ Architecture Overview  

weather-app/
├── backend/ # Express.js API with caching & validation
├── frontend/ # React + Vite client with Tailwind UI
└── .specify/ # SpecKit CLI templates (Qwen-generated)

markdown
Copy code

- **Backend:** Node.js + Express  
- **Frontend:** React + Vite + Tailwind CSS  
- **AI Stack:** SpecKit CLI + Qwen (Spec-Driven Development)  

---

## ⚙️ Setup  

### 1️⃣ Prerequisites  
- Node.js 18+  
- OpenWeather API Key → [https://openweathermap.org/api](https://openweathermap.org/api)  

### 2️⃣ Installation  
```bash
git clone https://github.com/Asiya-Akhtar/Weather-App.git
cd Weather-App
npm install
3️⃣ Configure Environment
Create .env.local and add:

ini
Copy code
OPENWEATHER_API_KEY=your_api_key_here
PORT=3001
VITE_API_BASE_URL=http://localhost:3001
4️⃣ Run the App
bash
Copy code
npm run dev
Frontend: http://localhost:5173
Backend: http://localhost:3001

🧪 Testing
✅ Search city weather (e.g., London, New York)

🌡️ Toggle temperature units

📅 Verify 3-day forecast appears

⚠️ Test offline/error handling

Run tests:

bash
Copy code
npm test
🧠 Built With
Layer	Tech Stack
Frontend	React, TypeScript, Vite, Tailwind CSS
Backend	Node.js, Express.js
AI/Automation	SpecKit CLI, Qwen (Spec-Driven Development)
API	OpenWeather API

💡 Key Learnings
Designing AI-generated full-stack applications with SpecKit

Structuring weather APIs with layered architecture

Handling input validation, caching, and rate limits effectively

Embracing Spec-Driven Development for rapid prototyping

📄 License
This project is open-source and built for educational and demonstration purposes.
Weather data provided by OpenWeather API.

