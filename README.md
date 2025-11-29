# Translation App

A simple web app that translates text using a clean HTML/CSS/JS interface with lightweight backend routes.

## Features
- Input text → get translation  
- Simple UI  
- Frontend + API folder structure  
- Deployable on Vercel

## API Key Required
This project uses the **OpenAI / ChatGPT API** for translations.  
You must create a `.env` file in the project root and add your API key:

OPENAI_API_KEY=your_key_here

Do **not** commit your `.env` file to GitHub.

## Install & Run

```bash
git clone https://github.com/iccir919/translation-app.git
cd translation-app
npm install
npm run dev
