import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-gradient-to-b from-[#003366] to-[#002244] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#003366] font-bold text-xl">
                USTC
              </div>
              <div>
                <div className="text-xl font-bold">USTC-InSAR</div>
                <div className="text-sm text-gray-300">InSAR Research Team</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">{t('header.home')}</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">{t('header.team')}</Link></li>
              <li><Link to="/research" className="text-gray-300 hover:text-white transition-colors">{t('header.research')}</Link></li>
              <li><Link to="/teaching" className="text-gray-300 hover:text-white transition-colors">{t('header.teaching')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact_us')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-gray-300" />
                <span className="text-gray-300">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-300" />
                <a href="mailto:xiaohua-xu@ustc.edu.cn" className="text-gray-300 hover:text-white transition-colors">
                  xiaohua-xu@ustc.edu.cn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} USTC-InSAR Research Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
