# IntelliText API 🎯

![CI Status](https://img.shields.io/github/actions/workflow/status/pieropaccc/IntelliText-api/ci.yml?branch=Main)
![Node.js](https://img.shields.io/badge/node.js-20-339933?logo=node.js)
![Express](https://img.shields.io/badge/express-5.2.1-000000?logo=express)
![Groq](https://img.shields.io/badge/groq-llama--3.1-ff6b35)

AI-powered text classification and entity extraction API using Large Language Models.

## 🚀 Features

- **Text Classification**: Automatically categorizes text into 5 categories (purchase, complaint, inquiry, news, other)
- **Entity Extraction**: Identifies products, prices, currencies, and platforms
- **AI-Powered**: Uses Groq's Llama 3.1 8B model for intelligent analysis
- **Type-Safe**: Zod schema validation ensures reliable responses
- **RESTful API**: Clean, documented endpoints with proper error handling

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **AI Provider**: Groq (Llama 3.1 8B)
- **Validation**: Zod
- **CI/CD**: GitHub Actions
- **Deployment Ready**: Works on AWS, Heroku, Render, etc.

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/` | API documentation UI |
| POST | `/analyze` | Analyze text and extract insights |

### Analyze Endpoint

```bash
POST /analyze
Content-Type: application/json

{
  "text": "Compré un iPhone 15 por $999 en Amazon y estoy muy satisfecho"
}

# Response
{
  "summary": "Compra satisfactoria de iPhone 15 en Amazon",
  "classification": "compra",
  "entities": {
    "product": "iPhone 15",
    "price": 999,
    "currency": "USD",
    "platform": "Amazon"
  }
}
```

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env
# Add your GROQ_API_KEY to .env

# Run development server
npm run dev

# Production
npm start
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Groq API key | Yes |
| `PORT` | Server port (default: 3000) | No |

## 📁 Project Structure

```
IntelliText-api/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
├── index.js                    # Express server entry point
├── routes/
│   └── analyze.route.js        # API routes & validation
├── services/
│   └── LLM.service.js          # Groq integration
├── prompts/
│   └── analyze.prompt.js       # AI prompt engineering
├── schemas/
│   └── analyze.schema.js       # Zod validation schemas
├── public/
│   └── index.html              # API documentation UI
└── package.json
```

## 🎯 Key Implementation Details

### Multi-Layer Validation
1. **Input validation**: Required fields check
2. **Schema validation**: Zod ensures type safety
3. **JSON parsing**: Robust error handling for LLM responses

### AI Prompt Engineering
- Strict JSON-only output format
- Spanish language support
- Structured entity extraction

## 📊 Use Cases

- Customer feedback analysis
- E-commerce review processing
- Social media monitoring
- Support ticket classification

## 🔐 Security

- Environment variables for sensitive keys
- Input sanitization
- Error messages without sensitive data

## 🔄 CI/CD Pipeline

This project uses GitHub Actions for continuous integration:

- **Automatic testing** on every push and PR
- **Node.js version**: 20
- **Dependency caching** for faster builds

---

**Built with ❤️ using Node.js, Express, and Groq AI**
