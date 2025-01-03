import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The ultimate marketplace for discovering, comparing, and connecting with powerful AI agents
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} AI Agents Force. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
