# Translation App

A lightweight web application that provides real-time text translation using OpenAI's API. Built with vanilla JavaScript and a clean, modern interface.

## ✨ Features

- **Simple Interface** - Clean, intuitive UI for seamless translation
- **Multiple Languages** - Support for numerous language pairs
- **Real-time Translation** - Get instant translations as you type
- **API-Powered** - Leverages OpenAI's powerful language models
- **Serverless Architecture** - Deployed on Vercel for optimal performance

## 🚀 Live Demo

Visit the live application: [translation-app-azure.vercel.app](https://translation-app-azure.vercel.app)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iccir919/translation-app.git
   cd translation-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root:
   ```bash
   touch .env
   ```
   
   Add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
   
   > ⚠️ **Important:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The app should now be running at `http://localhost:3000`

## 📁 Project Structure

```
translation-app/
├── api/              # Serverless API endpoints
├── public/           # Static assets and frontend files
├── .env              # Environment variables (not tracked)
├── .gitignore        # Git ignore rules
├── package.json      # Project dependencies
├── vercel.json       # Vercel deployment configuration
└── README.md         # This file
```

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variables**
   
   In your Vercel dashboard, add your `OPENAI_API_KEY` to the project's environment variables.

Alternatively, connect your GitHub repository to Vercel for automatic deployments on every push.

## 🔐 Security Notes

- The `.env` file is excluded from version control via `.gitignore`
- API keys should never be exposed in client-side code
- All API calls are routed through the serverless backend to protect credentials

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js with serverless functions
- **API:** OpenAI GPT models
- **Hosting:** Vercel

## 📝 Usage

1. Enter the text you want to translate in the input field
2. Select your source and target languages
3. Click the translate button
4. View your translated text instantly

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📚 Course Information

This project was built as part of the **AI Engineering** section of the [Scrimba Full Stack Developer Path](https://scrimba.com/fullstack-path-c0fullstack).

## 🙏 Acknowledgments

- [Scrimba](https://scrimba.com) for the excellent Full Stack Developer Path course
- OpenAI for providing the translation API
- Vercel for seamless deployment and hosting

---

Made with ❤️ by iccir919
