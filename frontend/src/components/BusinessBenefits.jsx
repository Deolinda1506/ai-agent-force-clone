import { Clock, DollarSign, BarChartIcon as ChartBar } from 'lucide-react';

const BusinessBenefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and workflows with AI agents, freeing up valuable time for strategic work."
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Lower operational costs by leveraging AI agents for routine tasks and process automation."
    },
    {
      icon: ChartBar,
      title: "Boost Productivity",
      description: "Enhance team efficiency and output with AI-powered assistance and automation."
    }
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,emerald-50/10_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,transparent_0%,emerald-900/10_50%,transparent_100%)]"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">AI Agents</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Harness the power of AI to streamline operations, reduce costs, and drive growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-zinc-900/50 p-8 hover:bg-white hover:dark:bg-zinc-900 transition-colors">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/50 mb-6">
                  <benefit.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 dark:from-emerald-400/0 dark:via-emerald-400/5 dark:to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
