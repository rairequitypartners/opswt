import express from 'express';
import cors from 'cors';
import { Anthropic } from '@anthropic-ai/sdk';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enable CORS with specific options
app.use(cors({
  origin: 'http://localhost:8081', // Allow requests from Vite dev server
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Verify API key is present
if (!process.env.ANTHROPIC_API_KEY) {
  console.error('ANTHROPIC_API_KEY is not set in environment variables');
  process.exit(1);
}

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// System prompt for the AI assistant
const SYSTEM_PROMPT = `You are an AI assistant that helps users register and manage AI agents. 
When a user expresses interest in creating or registering a new agent, you should:
1. Ask for the agent's name, description, and capabilities
2. Set showRegistration to true in your response
3. Guide them through the registration process

For example, if a user says "I want to create a new agent" or "Can you help me register an AI agent?", 
respond with a helpful message and set showRegistration to true.

Your response should be in JSON format with two fields:
{
  "content": "your response message",
  "showRegistration": true/false
}`;

app.post('/api/chat', async (req, res) => {
  console.log('Received chat request:', req.body);
  try {
    const { messages, context } = req.body;
    
    // Add system message at the beginning
    const allMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      messages: allMessages,
    });

    console.log('Anthropic response:', response);
    
    // Parse the response content
    const content = response.content[0].type === 'text' ? response.content[0].text : '';
    let parsedResponse;
    
    try {
      parsedResponse = JSON.parse(content);
    } catch (e) {
      // If response is not valid JSON, wrap it in the expected format
      parsedResponse = {
        content: content,
        showRegistration: false
      };
    }

    res.json(parsedResponse);
  } catch (error) {
    console.error('Error in /api/chat:', error);
    // Send more detailed error information
    res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message,
      type: error.type || 'unknown_error'
    });
  }
});

// Add agent registration endpoint
app.post('/api/agents/register', async (req, res) => {
  try {
    const { name, description, capabilities } = req.body;
    
    // Here you would typically save the agent to your database
    // For now, we'll just return a success response
    console.log('Registering new agent:', { name, description, capabilities });
    
    res.json({
      success: true,
      message: 'Agent registered successfully',
      agent: { name, description, capabilities }
    });
  } catch (error) {
    console.error('Error registering agent:', error);
    res.status(500).json({
      error: 'Failed to register agent',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS enabled for http://localhost:8081`);
}); 