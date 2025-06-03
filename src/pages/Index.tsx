
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Code, Database, DollarSign, Users, Zap, Shield, BarChart3, Bot, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // TODO: Implement search functionality
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">OpSweet</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Documentation</Button>
              <Button variant="ghost">Pricing</Button>
              <Button asChild>
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Find the Perfect AI Agent for Your Startup
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Discover AI Agents
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> That Solve</span>
            <br />
            Your Business Problems
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Simply type what you're trying to solve and we'll serve up a curated list of AI tools, 
            agents, and LLMs perfect for your startup's needs.
          </p>
          
          {/* Prominent Search Input */}
          <div className="max-w-2xl mx-auto mb-10">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-6 w-6 text-slate-400" />
                <Input
                  type="text"
                  placeholder="What problem are you trying to solve? (e.g., automate customer support, process invoices, handle payroll)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-24 py-6 text-lg rounded-full border-2 border-slate-200 focus:border-blue-500 shadow-lg"
                />
                <Button 
                  type="submit" 
                  className="absolute right-2 rounded-full px-6 py-2"
                  disabled={!searchQuery.trim()}
                >
                  Search
                </Button>
              </div>
            </form>
            <p className="text-sm text-slate-500 mt-3">
              Or browse popular searches: Customer Support • Payroll • Tax Compliance • Document Processing
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/dashboard">
                Explore Agent Directory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Submit Your Agent
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Find and deploy the right AI agent in minutes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Search Your Problem",
                description: "Describe what you're trying to solve in plain English. Our AI understands your business needs and context.",
                icon: <Search className="h-8 w-8 text-blue-600" />
              },
              {
                step: "02", 
                title: "Browse Curated Results",
                description: "Get a personalized list of AI agents, tools, and LLMs ranked by relevance to your specific use case.",
                icon: <Database className="h-8 w-8 text-green-600" />
              },
              {
                step: "03",
                title: "Compare & Evaluate", 
                description: "See pricing, features, reviews, and integration options side-by-side to make informed decisions.",
                icon: <BarChart3 className="h-8 w-8 text-orange-600" />
              },
              {
                step: "04",
                title: "Deploy & Scale",
                description: "Connect your chosen agent through our platform and monitor performance as you scale.",
                icon: <Zap className="h-8 w-8 text-purple-600" />
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-slate-300">{item.step}</span>
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Developer-First Integration</h2>
              <p className="text-xl text-slate-600 mb-8">
                One-liner integration with your stack. We handle tracking, reporting, and billing logic.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Track every run</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Monitor every output</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Bill every result</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm leading-relaxed">
                <code>{`import { OpSweetClient } from "@opsweet/sdk";

const client = new OpSweetClient({ 
  apiKey: "your-api-key" 
});

await client.trackAgentRun({
  agentId: "paichex",
  taskId: "payroll-001",
  input: {
    employeeId: "E45",
    grossSalary: 5000,
  },
  output: {
    netSalary: 4200,
    tax: 800,
  },
  outcome: "success",
  tags: ["payroll", "monthly"],
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600">Everything you need to discover and manage AI agents</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Search",
                description: "AI-powered search that understands business problems and matches them with the right agents.",
                icon: <Search className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Curated Directory",
                description: "Hand-picked AI agents, tools, and LLMs vetted for quality and effectiveness.",
                icon: <Database className="h-8 w-8 text-green-600" />
              },
              {
                title: "Performance Analytics",
                description: "See real usage data, success rates, and user reviews for every agent in our directory.",
                icon: <BarChart3 className="h-8 w-8 text-orange-600" />
              },
              {
                title: "Integration Support",
                description: "Get help connecting agents to your existing stack with our integration guides.",
                icon: <Code className="h-8 w-8 text-purple-600" />
              },
              {
                title: "Pricing Transparency",
                description: "Compare costs, billing models, and ROI estimates across different agents.",
                icon: <DollarSign className="h-8 w-8 text-red-600" />
              },
              {
                title: "Expert Reviews",
                description: "Detailed analysis and recommendations from our team of AI implementation experts.",
                icon: <Users className="h-8 w-8 text-indigo-600" />
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Popular Agent Categories</h2>
            <p className="text-xl text-slate-600">Discover agents across these high-demand business areas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Payroll & HR Agents",
                description: "Automate payroll processing, benefits administration, and employee onboarding.",
                color: "bg-blue-100 text-blue-800"
              },
              {
                title: "Tax Compliance Bots",
                description: "Handle tax calculations, filing, and compliance across different jurisdictions.",
                color: "bg-green-100 text-green-800"
              },
              {
                title: "Customer Support AI",
                description: "Intelligent chatbots and support agents that resolve tickets automatically.",
                color: "bg-purple-100 text-purple-800"
              },
              {
                title: "Document Processing",
                description: "Extract and process data from invoices, contracts, and business documents.",
                color: "bg-orange-100 text-orange-800"
              },
              {
                title: "Sales & Lead Qualification",
                description: "Score leads, qualify prospects, and automate sales follow-ups.",
                color: "bg-red-100 text-red-800"
              },
              {
                title: "Financial Analysis",
                description: "Automated bookkeeping, expense tracking, and financial reporting agents.",
                color: "bg-indigo-100 text-indigo-800"
              }
            ].map((useCase, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Badge className={useCase.color}>{useCase.title}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple. Transparent. Value-Driven.</h2>
            <p className="text-xl text-slate-600">Find the right agents for free. Pay only when you're ready to deploy at scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Explorer",
                price: "Free",
                description: "For discovery and testing",
                features: ["Unlimited searches", "Agent comparisons", "Basic reviews", "Community support"]
              },
              {
                name: "Startup",
                price: "$49/mo",
                description: "For growing teams",
                features: ["Priority support", "Custom recommendations", "Integration assistance", "Performance tracking", "Advanced analytics"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For scale deployment", 
                features: ["Dedicated success manager", "Custom agent vetting", "White-label options", "SLA guarantees", "Direct vendor connections"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-slate-900 my-4">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Discovering AI Agents Today</h2>
          <p className="text-xl text-slate-600 mb-10">
            Join thousands of startups who have found their perfect AI solutions through OpSweet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/dashboard">
                Explore Agent Directory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              List Your Agent
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">OpSweet</span>
            </div>
            <p className="text-slate-400">© 2024 OpSweet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
