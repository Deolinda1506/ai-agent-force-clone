const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/30 via-white to-white dark:from-emerald-900/20 dark:via-zinc-900 dark:to-black"></div>
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322C55E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-emerald-100/20 dark:bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 overflow-hidden mix-blend-overlay dark:mix-blend-color">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full" style={{background: "radial-gradient(circle at center, rgba(16,185,129,0.05) 0%, rgba(16,185,129,0) 70%)"}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full" style={{background: "radial-gradient(circle at center, rgba(52,211,153,0.05) 0%, rgba(52,211,153,0) 70%)"}}></div>
        </div>
      </div>
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/70 dark:bg-emerald-900/50 border border-emerald-200/70 dark:border-emerald-600/50 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Coming Soon</span>
          </div>
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="block text-gray-600 dark:text-white mb-2 leading-[1.2]">Discover & Deploy</span>
              <span className="block bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent leading-[1.2]">AI Agents</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">Your marketplace for discovering, comparing, and connecting with powerful AI agents</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
