const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="16" cy="16" r="12" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" strokeDasharray="4 2"></circle>
          <path d="M16 4C22.6274 4 28 9.37258 28 16C28 22.6274 22.6274 28 16 28" className="stroke-emerald-500" strokeWidth="2" strokeLinecap="round">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 16 16" to="360 16 16" dur="10s" repeatCount="indefinite"></animateTransform>
          </path>
          <path d="M16 11L19.464 13.5V18.5L16 21L12.536 18.5V13.5L16 11Z" className="fill-slate-800 dark:fill-slate-200"></path>
          <circle cx="16" cy="16" r="5" className="stroke-emerald-500" strokeWidth="1" strokeOpacity="0.5" fill="none">
            <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite"></animate>
            <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"></animate>
          </circle>
        </svg>
      </div>
      <div className="flex items-baseline font-mono tracking-tight">
        <span className="font-bold text-slate-800 dark:text-slate-200">ai</span>
        <span className="font-medium text-emerald-600 dark:text-emerald-400">agents</span>
        <span className="font-bold text-slate-800 dark:text-slate-200">force</span>
      </div>
    </div>
  );
};

export default Logo;
