import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/i18n/I18nContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { path: '/', key: 'header.home' },
    { path: '/team', key: 'header.team' },
    { path: '/research', key: 'header.research' },
    { path: '/teaching', key: 'header.teaching' },
    { path: '/news', key: 'header.news' },
    { path: '/links', key: 'header.links' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-primary text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              USTC InSAR Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-semibold transition-colors hover:text-blue-200 relative',
                  location.pathname === link.path && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent'
                )}
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="flex items-center space-x-3 ml-4">
              <button
                onClick={() => setLocale('en')}
                className={cn(
                  'px-4 py-2 rounded text-base font-semibold transition-colors border border-white',
                  locale === 'en' ? 'bg-white text-primary' : 'bg-transparent hover:bg-primaryDark'
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('zh')}
                className={cn(
                  'px-4 py-2 rounded text-base font-semibold transition-colors border border-white',
                  locale === 'zh' ? 'bg-white text-primary' : 'bg-transparent hover:bg-primaryDark'
                )}
              >
                中
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-primaryDark transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-primaryDark">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'block px-4 py-3 text-base font-medium transition-colors',
                  location.pathname === link.path ? 'text-accent bg-primaryDark' : 'text-white hover:bg-primaryDark'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="px-4 flex space-x-3">
              <button
                onClick={() => {
                  setLocale('en');
                  setIsMenuOpen(false);
                }}
                className={cn(
                  'flex-1 px-4 py-3 rounded text-sm font-medium transition-colors border border-white',
                  locale === 'en' ? 'bg-white text-primary' : 'bg-transparent hover:bg-primaryDark'
                )}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLocale('zh');
                  setIsMenuOpen(false);
                }}
                className={cn(
                  'flex-1 px-4 py-3 rounded text-sm font-medium transition-colors border border-white',
                  locale === 'zh' ? 'bg-white text-primary' : 'bg-transparent hover:bg-primaryDark'
                )}
              >
                中
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
