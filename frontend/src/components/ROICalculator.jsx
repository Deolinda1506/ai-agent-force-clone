iimport { useState } from 'react';
import { Clock, DollarSign, Users, Calculator } from 'lucide-react';

const ROICalculator = () => {
  const [monthlyHours, setMonthlyHours] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [teamSize, setTeamSize] = useState(5);
  const [investment, setInvestment] = useState(1000);

  const monthlySavings = (monthlyHours * hourlyRate * teamSize * 0.3).toFixed(2);
  const annualSavings = (monthlySavings * 12).toFixed(2);
  const roi = ((annualSavings - investment) / investment * 100).toFixed(2);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,emerald-50/10_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,transparent_0%,emerald-900/10_50%,transparent_100%)]"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
            Calculate Your{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">ROI</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">Check how much you can save with AI Agents</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-zinc-900/50 p-8">
            <div className="space-y-8">
              <InputSlider
                icon={Clock}
                label="Monthly Hours"
                value={monthlyHours}
                setValue={setMonthlyHours}
                min={1}
                max={160}
                step={1}
                unit="hours"
                description="Time spent on tasks monthly per team member"
              />
              <InputSlider
                icon={DollarSign}
                label="Hourly Rate"
                value={hourlyRate}
                setValue={setHourlyRate}
                min={10}
                max={250}
                step={1}
                unit="$"
                description="Average hourly cost per team member"
              />
              <InputSlider
                icon={Users}
                label="Team Size"
                value={teamSize}
                setValue={setTeamSize}
                min={1}
                max={50}
                step={1}
                unit="members"
                description="Number of team members who will use AI agents"
              />
              <InputSlider
                icon={Calculator}
                label="Investment"
                value={investment}
                setValue={setInvestment}
                min={5}
                max={5000}
                step={5}
                unit="$"
                description="Total investment in AI agent implementation"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-zinc-900/50 p-8">
            <div className="space-y-8">
              <ResultCard
                label="Monthly Savings"
                value={`$${monthlySavings}`}
                icon={DollarSign}
              />
              <ResultCard
                label="Annual Savings"
                value={`$${annualSavings}`}
                icon={DollarSign}
              />
              <ResultCard
                label="Return on Investment"
                value={`${roi}%`}
                icon={ChartBar}
                highlight
              />
              <div className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3">
                <Info className="h-4 w-4 mt-0.5 shrink-0" />
                <p>Calculations assume 30% time savings through AI implementation. Actual results may vary based on specific use cases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputSlider = ({ icon: Icon, label, value, setValue, min, max, step, unit, description }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-medium text-slate-900 dark:text-white">{label}</span>
        </div>
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer dark:bg-emerald-700"
      />
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
};

const ResultCard = ({ label, value, icon: Icon, highlight = false }) => {
  return (
    <div className={`p-4 rounded-lg ${highlight ? 'bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-400 dark:to-emerald-600' : 'bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50'}`}>
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-md ${highlight ? 'bg-white/20' : 'bg-emerald-100 dark:bg-emerald-900/50'}`}>
          <Icon className={`h-5 w-5 ${highlight ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
        </div>
        <div>
          <p className={`text-sm ${highlight ? 'text-white/90' : 'text-slate-600 dark:text-slate-400'}`}>{label}</p>
          <p className={`text-lg font-semibold ${highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
