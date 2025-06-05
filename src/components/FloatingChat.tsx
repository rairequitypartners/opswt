import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X, Minimize2, Maximize2, Plus, Bot } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AgentRegistration {
  name: string;
  description: string;
  capabilities: string;
}

const FloatingChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your AI assistant. I can help you with various tasks, including registering new AI agents. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [agentData, setAgentData] = useState<AgentRegistration>({
    name: '',
    description: '',
    capabilities: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          context: {
            showRegistration: showRegistration,
            agentData: agentData
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content,
      };
      setMessages(prev => [...prev, assistantMessage]);

      // Check if the response indicates we should show the registration form
      if (data.showRegistration) {
        setShowRegistration(true);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterAgent = async () => {
    try {
      const response = await fetch('/api/agents/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(agentData),
      });

      if (!response.ok) {
        throw new Error('Failed to register agent');
      }

      const data = await response.json();
      const successMessage: Message = {
        role: 'assistant',
        content: `Great! I've registered your new agent "${agentData.name}". It's now ready to help with: ${agentData.capabilities}. Is there anything else you'd like me to help you with?`,
      };
      setMessages(prev => [...prev, successMessage]);
      setShowRegistration(false);
      setAgentData({ name: '', description: '', capabilities: '' });
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I encountered an error while registering your agent. Would you like to try again?',
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg"
      >
        <Bot className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <>
      <Card className="fixed bottom-4 right-4 w-96 shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg">AI Assistant</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? (
                <Maximize2 className="h-4 w-4" />
              ) : (
                <Minimize2 className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        {!isMinimized && (
          <CardContent>
            <div className="space-y-4">
              <div className="h-[300px] overflow-y-auto space-y-4 p-4 border rounded-lg">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                />
                <Button type="submit" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        )}
      </Card>

      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Register New Agent</DialogTitle>
            <DialogDescription>
              Let's set up your new AI agent. Please provide the following details:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Agent Name</Label>
              <Input
                id="name"
                value={agentData.name}
                onChange={(e) => setAgentData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="What would you like to call your agent?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={agentData.description}
                onChange={(e) => setAgentData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="What is the main purpose of this agent?"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="capabilities">Capabilities</Label>
              <Textarea
                id="capabilities"
                value={agentData.capabilities}
                onChange={(e) => setAgentData(prev => ({ ...prev, capabilities: e.target.value }))}
                placeholder="What tasks can this agent perform?"
              />
            </div>
            <Button onClick={handleRegisterAgent} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Create Agent
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingChat; 