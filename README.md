# Job Description Generator

This project generates job descriptions using the **Groq API**, **Pinecone API**, **Hugging Face models**, and various other AI tools. The application allows users to create job descriptions based on specific criteria.

## Features

- Generate job descriptions using AI
- Utilizes **Groq** and **Pinecone** APIs
- Flask-based backend for handling requests
- Easy-to-use frontend with React (optional)
- Language translation option for job descriptions

## Prerequisites

Ensure that you have the following installed:

- **Python** (3.7+)
- **Pip** (Package installer for Python)

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Su-mia/job-description-generator.git
cd job-description-generator
```

### Step 2: Create a Virtual Environment
 ```bash 
 python -m venv venv
 On macOS/Linux: 
 source venv/bin/activate
 On Windows:
 venv\Scripts\activate
 ```
### Step 3 : install Dependencies 
 ```bash 
     install -r requirements.txt
```

### Step 4: Set Up API Keys
You will need to set up API keys for Groq and Pinecone to use the project.

Groq API Key: Register and get your API key from Groq.
Pinecone API Key: Register and get your API key from Pinecone.
Set the API keys in your environment:
```bash
export GROQ_API_KEY=your_groq_api_key
export PINECONE_API_KEY=your_pinecone_api_key
```

### Step 5: Running the Application
```bash
python app.py
```





### Frontend Installation (React)
```bash
 cd description_generator_frontend
 npm install
 npm run dev