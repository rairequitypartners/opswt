
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Code, Database, DollarSign, Users, Zap, Shield, BarChart3, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
              One Control Plane to Deploy, Orchestrate, and Monetize AI Agents
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Run Your AI Agents Like
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Products</span>
            <br />
            — Not Just Prompts
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            OpSweet lets you deploy, orchestrate, and monetize AI agents across every team in your business. 
            One platform. All your agents. Fully managed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/dashboard">
                Launch Agent Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Four simple steps to agent mastery</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Register Your Agent",
                description: "Connect any agent — from LangChain, Replit, custom code, or third-party platforms. Define endpoint, auth, and expected behavior.",
                icon: <Code className="h-8 w-8 text-blue-600" />
              },
              {
                step: "02", 
                title: "Orchestrate Tasks",
                description: "Send tasks from your app or dashboard. We handle routing, retries, and logging.",
                icon: <Zap className="h-8 w-8 text-green-600" />
              },
              {
                step: "03",
                title: "Track Outcomes", 
                description: "Monitor what your agents did, when, and for whom. View inputs, outputs, success/failure, and time taken.",
                icon: <BarChart3 className="h-8 w-8 text-orange-600" />
              },
              {
                step: "04",
                title: "Bill Based on Results",
                description: "Monetize based on output, actions, or value delivered — not just compute or token count.",
                icon: <DollarSign className="h-8 w-8 text-purple-600" />
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
            <p className="text-xl text-slate-600">Everything you need to manage AI agents at scale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Agent Registry",
                description: "Register any AI agent with a URL and config. Works with any stack.",
                icon: <Database className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Central Task Router",
                description: "Send tasks from any app. We'll handle retries, timeouts, and routing to the right agent.",
                icon: <Zap className="h-8 w-8 text-green-600" />
              },
              {
                title: "Usage Analytics",
                description: "Visualize performance, usage, and outcomes. Filter by tag, time, agent, or workspace.",
                icon: <BarChart3 className="h-8 w-8 text-orange-600" />
              },
              {
                title: "Billing Engine",
                description: "Define billable actions. Integrate with Stripe or your invoicing tool.",
                icon: <DollarSign className="h-8 w-8 text-purple-600" />
              },
              {
                title: "Secure Multi-Tenancy",
                description: "Each client, workspace, or project stays isolated and permissioned.",
                icon: <Shield className="h-8 w-8 text-red-600" />
              },
              {
                title: "SDK + API Access",
                description: "One-liner integration with your stack. We handle tracking, reporting, and billing logic.",
                icon: <Code className="h-8 w-8 text-indigo-600" />
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Use Cases</h2>
            <p className="text-xl text-slate-600">See how teams use OpSweet to power their AI agents</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Paichex Payroll Agent",
                description: "Run payroll, deduct tax, generate payslips.",
                color: "bg-blue-100 text-blue-800"
              },
              {
                title: "Tax Compliance Bot",
                description: "Interpret local tax rules and submit calculations.",
                color: "bg-green-100 text-green-800"
              },
              {
                title: "HR Onboarding Agent",
                description: "Create offer letters, onboarding schedules, and verify documents.",
                color: "bg-purple-100 text-purple-800"
              },
              {
                title: "Support Agent",
                description: "Automatically resolve tickets or draft replies.",
                color: "bg-orange-100 text-orange-800"
              },
              {
                title: "Sales Qualifier Agent",
                description: "Score leads and route high-value ones to humans.",
                color: "bg-red-100 text-red-800"
              },
              {
                title: "Document Processor",
                description: "Extract data from invoices, contracts, and forms.",
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple. Transparent. Outcome-Based.</h2>
            <p className="text-xl text-slate-600">We charge based on value created — not tokens burned. Start free. Scale when your agents do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Solo developers, testing",
                features: ["5 agents", "100 tasks/mo", "Basic dashboard", "Community support"]
              },
              {
                name: "Growth",
                price: "$49/mo",
                description: "Small teams",
                features: ["20 agents", "2000 tasks/mo", "API access", "Email support", "Advanced analytics"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "AI-first businesses", 
                features: ["Unlimited agents", "Custom limits", "SLA", "Priority support", "Audit compliance"]
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Build Your AgentOps Layer Today</h2>
          <p className="text-xl text-slate-600 mb-10">
            Whether you're deploying one agent or a hundred, OpSweet helps you scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/dashboard">
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Talk to Our Team
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
