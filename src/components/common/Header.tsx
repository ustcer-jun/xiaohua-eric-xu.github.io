import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/team', label: '团队成员' },
    { path: '/research', label: '研究成果' },
    { path: '/teaching', label: '教学工作' },
    { path: '/news', label: '新闻与图库' },
    { path: '/links', label: '相关链接' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#003366] rounded-full flex items-center justify-center text-white font-bold text-xl">
                USTC
              </div>
              <div>
                <div className="text-xl font-bold text-[#003366]">USTC-InSAR</div>
                <div className="text-xs text-gray-500">InSAR研究团队</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                  location.pathname === link.path
                    ? 'bg-[#C41E3A] text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-[#C41E3A]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'block px-4 py-3 rounded-md text-base font-medium transition-colors',
                  location.pathname === link.path
                    ? 'bg-[#C41E3A] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
