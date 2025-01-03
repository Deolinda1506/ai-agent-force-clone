import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "What is an AI agent?",
      answer: "An AI agent is an autonomous software program powered by artificial intelligence that can perform specific tasks or solve problems independently. Unlike traditional software, AI agents can learn, adapt, and make decisions based on their environment and past experiences. They can handle complex tasks like data analysis, customer service, content creation, and process automation while continuously improving their performance over time."
    },
    {
      question: "What is an AI Agents Marketplace?",
      answer: "An AI Agents Marketplace is a platform where businesses can discover, purchase, and deploy pre-trained AI agents for various tasks. These agents are specialized AI assistants that can automate workflows, enhance productivity, and streamline business operations across different departments and industries."
    },
    {
      question: "How can AI Agents benefit my business?",
      answer: "AI Agents can significantly improve your business efficiency by automating repetitive tasks, providing 24/7 customer support, analyzing data for insights, and streamlining workflows. They can reduce operational costs, increase productivity, and allow your team to focus on more strategic, high-value activities."
    },
    {
      question: "How quickly can I implement AI Agents in my workflow?",
      answer: "Implementation time varies based on your specific needs, but most AI Agents can be integrated within days. Our marketplace provides pre-trained agents that require minimal setup, and we offer comprehensive support to ensure smooth deployment and team adoption."
    },
    {
      question: "What types of AI Agents are available?",
      answer: "Our marketplace offers a diverse range of AI Agents, including customer service agents, data analysis agents, content creation agents, sales automation agents, and workflow optimization agents. Each agent is specialized for specific business functions and can be customized to your needs."
    },
    {
      question: "How do I choose the right AI Agent for my business?",
      answer: "Consider your specific business needs, workflow challenges, and goals. Our marketplace provides detailed agent descriptions, use cases, and performance metrics to help you make informed decisions. You can also contact our team for personalized recommendations based on your requirements."
    },
    {
      question: "What is the ROI of implementing AI Agents?",
      answer: "The ROI varies by implementation, but businesses typically see significant returns through reduced operational costs and increased productivity. Our ROI calculator can help estimate potential savings based on your team size and current workflows. Many businesses report 30% or more improvement in efficiency."
    },
    {
      question: "Can AI Agents integrate with existing software?",
      answer: "Yes, our AI Agents are designed to integrate seamlessly with popular business tools and platforms. They support standard APIs and protocols, making it easy to connect with your existing software ecosystem, including CRM systems, communication tools, and productivity suites."
    },
    {
      question: "How are AI Agents different from traditional automation tools?",
      answer: "AI Agents are more sophisticated than traditional automation tools, offering adaptive learning, natural language processing, and decision-making capabilities. They can handle complex tasks, understand context, and improve over time through machine learning, providing more intelligent and flexible automation solutions."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,emerald-50/10_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,transparent_0%,emerald-900/10_50%,transparent_100%)]"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Find answers to common questions about our AI Agents platform</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-zinc-900/50 px-6 shadow-sm"
              >
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="flex flex-1 items-center justify-between text-sm font-medium hover:underline text-left text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-4 w-full"
                >
                  <span className="text-base font-medium">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 ${openItem === index ? 'rotate-180' : ''}`} />
                </button>
                {openItem === index && (
                  <div className="pb-4 text-sm text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
