import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Satellite, 
  AlertTriangle, 
  Mountain, 
  BookOpen,
  ArrowRight,
  Calendar
} from 'lucide-react';
import newsData from '@/data/news.json';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';

const Home = () => {
  const { t } = useI18n();

  const researchAreas = [
    {
      icon: <Satellite size={32} />,
      titleKey: 'home.research_areas.areas.insar.title',
      descriptionKey: 'home.research_areas.areas.insar.description'
    },
    {
      icon: <AlertTriangle size={32} />,
      titleKey: 'home.research_areas.areas.earthquake.title',
      descriptionKey: 'home.research_areas.areas.earthquake.description'
    },
    {
      icon: <BookOpen size={32} />,
      titleKey: 'home.research_areas.areas.crustal.title',
      descriptionKey: 'home.research_areas.areas.crustal.description'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={getImageUrl('/images/research/ustcblue.jpg')} 
            alt="USTC Campus" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/80 to-[#C41E3A]/70"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">USTC-InSAR</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('home.hero.subtitle')}
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/research" 
                className="px-8 py-4 bg-[#C41E3A] hover:bg-[#A01830] text-white rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                {t('home.hero.btn_research')} <ArrowRight size={20} />
              </Link>
              <Link 
                to="/team" 
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold backdrop-blur-sm border border-white/30 transition-all flex items-center justify-center gap-2"
              >
                {t('home.hero.btn_team')} <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">{t('home.welcome.title')}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('home.welcome.paragraph1')}
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('home.welcome.paragraph2')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('home.welcome.paragraph3')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={getImageUrl('/images/research/NISAR.jpg')} 
                  alt="NISAR Satellite" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#C41E3A] rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">{t('home.research_areas.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.research_areas.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#003366] to-[#C41E3A] rounded-xl flex items-center justify-center text-white mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{t(area.titleKey)}</h3>
                <p className="text-gray-600">{t(area.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-2">{t('home.news.title')}</h2>
              <p className="text-gray-600">{t('home.news.description')}</p>
            </div>
            <Link 
              to="/news" 
              className="text-[#C41E3A] font-semibold hover:text-[#A01830] flex items-center gap-2"
            >
              {t('home.news.btn_all')} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={cn(
                      'px-3 py-1 rounded-full text-xs font-semibold',
                      item.category === 'Publication' ? 'bg-blue-100 text-blue-700' :
                      item.category === 'Award' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    )}>
                      {item.category === 'Publication' ? '论文发表' :
                       item.category === 'Award' ? '荣誉奖项' : '团队活动'}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <Calendar size={14} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#003366] mb-3 group-hover:text-[#C41E3A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#003366] to-[#002244]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('home.cta.title')}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/team" 
                className="px-8 py-4 bg-[#C41E3A] hover:bg-[#A01830] text-white rounded-lg font-semibold transition-all"
              >
                {t('home.cta.btn_team')}
              </Link>
              <Link 
                to="/research" 
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold backdrop-blur-sm border border-white/30 transition-all"
              >
                {t('home.cta.btn_research')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Home;
