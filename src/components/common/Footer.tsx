import { useI18n } from '@/i18n/I18nContext';

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-4">
          <p className="text-sm mb-2">
            {t('footer.contact')}: xuxh@ustc.edu.cn | {t('footer.phone')}: +86-551-XXXX
          </p>
          <p className="text-sm">
            {t('footer.address')}
          </p>
        </div>
        <div className="pt-4 border-t border-primaryDark">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} USTC InSAR Group. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Powered by React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
