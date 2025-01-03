import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#business-benefits" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
            Benefits
          </Link>
          <Link to="#roi-calculator" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
            ROI Calculator
          </Link>
          <Link to="#faq" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="md:hidden"></div>
      </div>
    </header>
  );
};

export default Header;
