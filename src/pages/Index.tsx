
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-black" />
              <span className="text-2xl font-bold text-black">OpSweet</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-black font-medium">Documentation</Button>
              <Button variant="ghost" className="text-gray-700 hover:text-black font-medium">Pricing</Button>
              <Button asChild className="bg-black text-white hover:bg-gray-800 font-bold">
                <Link to="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Combined Hero & Agent Discovery Section */}
      <section className="relative py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm bg-white text-black border border-gray-300">
                The Control Layer for AI-Native Companies
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 leading-tight">
              Find AI Agents
              <br />
              <span className="text-gray-600">That Solve</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Simply type what you're trying to solve and we'll serve up a curated list of AI tools, 
              agents, and LLMs perfect for your startup's needs. Deploy, orchestrate, and monetize AI agents across every team in your business.
            </p>
            
            {/* Prominent Search Input - Google-style */}
            <div className="max-w-2xl mx-auto mb-12">
              <form onSubmit={handleSearch} className="relative">
                <div className="relative flex items-center shadow-2xl rounded-full border border-gray-300 bg-white hover:shadow-3xl transition-shadow">
                  <Search className="absolute left-6 h-6 w-6 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="What problem are you trying to solve? (e.g., automate customer support, process invoices, handle payroll)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-16 pr-32 py-8 text-lg rounded-full border-0 focus:ring-0 focus:outline-none bg-transparent"
                  />
                  <Button 
                    type="submit" 
                    className="absolute right-3 rounded-full px-8 py-3 bg-black text-white hover:bg-gray-800 font-bold"
                    disabled={!searchQuery.trim()}
                  >
                    Search
                  </Button>
                </div>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                Popular searches: Customer Support • Payroll • Tax Compliance • Document Processing
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4 bg-black text-white hover:bg-gray-800 font-bold" asChild>
                <Link to="/dashboard">
                  Explore Agent Directory
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-black text-black hover:bg-gray-100 font-bold">
                Submit Your Agent
              </Button>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Run Your AI Agents
              <span className="text-gray-600"> Like Products</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              OpSweet lets you deploy, orchestrate, and monetize AI agents across every team in your business. 
              One platform. All your agents. Fully managed.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Find and deploy the right AI agent in minutes</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Search Your Problem",
                description: "Describe what you're trying to solve in plain English. Our AI understands your business needs and context.",
                icon: <Search className="h-8 w-8 text-black" />
              },
              {
                step: "02", 
                title: "Browse Curated Results",
                description: "Get a personalized list of AI agents, tools, and LLMs ranked by relevance to your specific use case.",
                icon: <Database className="h-8 w-8 text-gray-700" />
              },
              {
                step: "03",
                title: "Compare & Evaluate", 
                description: "See pricing, features, reviews, and integration options side-by-side to make informed decisions.",
                icon: <BarChart3 className="h-8 w-8 text-gray-600" />
              },
              {
                step: "04",
                title: "Deploy & Scale",
                description: "Connect your chosen agent through our platform and monitor performance as you scale.",
                icon: <Zap className="h-8 w-8 text-gray-500" />
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-300">{item.step}</span>
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">Developer-First Integration</h2>
              <p className="text-xl text-gray-600 mb-8">
                One-liner integration with your stack. We handle tracking, reporting, and billing logic.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-black" />
                  <span className="text-gray-700">Track every run</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-black" />
                  <span className="text-gray-700">Monitor every output</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-black" />
                  <span className="text-gray-700">Bill every result</span>
                </div>
              </div>
            </div>
            <div className="bg-black rounded-lg p-6 overflow-x-auto">
              <pre className="text-white text-sm leading-relaxed">
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to discover and manage AI agents</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Search",
                description: "AI-powered search that understands business problems and matches them with the right agents.",
                icon: <Search className="h-8 w-8 text-black" />
              },
              {
                title: "Curated Directory",
                description: "Hand-picked AI agents, tools, and LLMs vetted for quality and effectiveness.",
                icon: <Database className="h-8 w-8 text-gray-700" />
              },
              {
                title: "Performance Analytics",
                description: "See real usage data, success rates, and user reviews for every agent in our directory.",
                icon: <BarChart3 className="h-8 w-8 text-gray-600" />
              },
              {
                title: "Integration Support",
                description: "Get help connecting agents to your existing stack with our integration guides.",
                icon: <Code className="h-8 w-8 text-gray-500" />
              },
              {
                title: "Pricing Transparency",
                description: "Compare costs, billing models, and ROI estimates across different agents.",
                icon: <DollarSign className="h-8 w-8 text-gray-700" />
              },
              {
                title: "Expert Reviews",
                description: "Detailed analysis and recommendations from our team of AI implementation experts.",
                icon: <Users className="h-8 w-8 text-gray-600" />
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Popular Agent Categories</h2>
            <p className="text-xl text-gray-600">Discover agents across these high-demand business areas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Payroll & HR Agents",
                description: "Automate payroll processing, benefits administration, and employee onboarding.",
                color: "bg-gray-100 text-black border border-gray-300"
              },
              {
                title: "Tax Compliance Bots",
                description: "Handle tax calculations, filing, and compliance across different jurisdictions.",
                color: "bg-white text-black border border-gray-300"
              },
              {
                title: "Customer Support AI",
                description: "Intelligent chatbots and support agents that resolve tickets automatically.",
                color: "bg-gray-200 text-black border border-gray-300"
              },
              {
                title: "Document Processing",
                description: "Extract and process data from invoices, contracts, and business documents.",
                color: "bg-gray-100 text-black border border-gray-300"
              },
              {
                title: "Sales & Lead Qualification",
                description: "Score leads, qualify prospects, and automate sales follow-ups.",
                color: "bg-white text-black border border-gray-300"
              },
              {
                title: "Financial Analysis",
                description: "Automated bookkeeping, expense tracking, and financial reporting agents.",
                color: "bg-gray-200 text-black border border-gray-300"
              }
            ].map((useCase, index) => (
              <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader>
                  <Badge className={useCase.color}>{useCase.title}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Simple. Transparent. Value-Driven.</h2>
            <p className="text-xl text-gray-600">Find the right agents for free. Pay only when you're ready to deploy at scale.</p>
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
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-black shadow-xl' : 'border-gray-200'} bg-white`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-black text-white border-0 font-bold">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-black">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-black my-4">{plan.price}</div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full font-bold ${plan.popular ? 'bg-black text-white hover:bg-gray-800' : 'border-black text-black hover:bg-gray-100'}`} variant={plan.popular ? "default" : "outline"}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Start Discovering AI Agents Today</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of startups who have found their perfect AI solutions through OpSweet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-black text-white hover:bg-gray-800 font-bold" asChild>
              <Link to="/dashboard">
                Explore Agent Directory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-black text-black hover:bg-gray-100 font-bold">
              List Your Agent
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold">OpSweet</span>
            </div>
            <p className="text-gray-400">© 2024 OpSweet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
