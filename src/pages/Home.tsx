import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import newsData from '@/data/news.json';
import publicationsData from '@/data/publications.json';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';

const Home = () => {
  const { t, locale } = useI18n();

  // Get latest 3 news items
  const latestNews = newsData.slice(0, 3);
  
  // Get latest 3 publications
  const latestPublications = publicationsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* About Our Group Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-primary mb-6 section-title">
            {t('home.about.title')}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <p className="text-text-primary mb-4 text-lg">
                {t('home.about.paragraph1')}
              </p>
              <p className="text-text-primary mb-4 text-lg">
                {t('home.about.paragraph2')}
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-3">
                {t('home.about.research_directions')}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-text-primary mb-6 text-lg">
                <li>{t('home.about.direction1')}</li>
                <li>{t('home.about.direction2')}</li>
                <li>{t('home.about.direction3')}</li>
              </ul>
            </div>
            
            <div className="md:w-2/3">
              <img 
                src={getImageUrl('/images/gallery/2024/group-1.jpg')} 
                alt="USTC InSAR Group" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-primary section-title">
              {t('home.news.title')}
            </h2>
            <Link 
              to="/news" 
              className="text-link font-medium hover:text-primary text-lg"
            >
              {t('home.news.view_all')}
            </Link>
          </div>
          
          <div className="space-y-6">
            {latestNews.map((item, index) => (
              <div key={item.id} className="pb-6 border-b border-gray-200 last:border-0">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar size={18} className="text-text-secondary" />
                  <span className="text-text-secondary text-base">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {locale === 'en' ? item.title.en : item.title.zh}
                </h3>
                <p className="text-text-primary mb-3 text-lg">
                  {locale === 'en' ? item.summary.en : item.summary.zh}
                </p>
                <Link 
                  to={`/news/${item.id}`} 
                  className="text-link font-medium hover:text-primary text-lg"
                >
                  {t('home.news.read_more')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-primary section-title">
              {t('home.publications.title')}
            </h2>
            <Link 
              to="/research" 
              className="text-link font-medium hover:text-primary text-lg"
            >
              {t('home.publications.view_all')}
            </Link>
          </div>
          
          <div className="space-y-6">
            {latestPublications.map((pub, index) => (
              <div key={pub.id} className="pb-6 border-b border-gray-200 last:border-0">
                <p className="text-text-primary mb-3 text-lg">
                  <span className="font-medium">[{index + 1}]</span> {pub.authors}. ({pub.year}). "{pub.title}", <em>{pub.journal}</em>.
                </p>
                <div className="flex gap-4">
                  {pub.pdf && (
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="text-link hover:text-primary text-base">
                      [PDF]
                    </a>
                  )}
                  {pub.doi && (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-link hover:text-primary text-base">
                      [DOI]
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Photos Section */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-primary mb-6 section-title">
            {t('home.group_photos.title')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src={getImageUrl('/images/gallery/2024/group-1.jpg')} 
              alt="Group Photo 1" 
              className="w-full h-48 object-cover"
            />
            <img 
              src={getImageUrl('/images/research/ustcblue.jpg')} 
              alt="Group Photo 2" 
              className="w-full h-48 object-cover"
            />
            <img 
              src={getImageUrl('/images/research/NISAR.jpg')} 
              alt="Group Photo 3" 
              className="w-full h-48 object-cover"
            />
            <img 
              src={getImageUrl('/images/research/sentinel-1.png')} 
              alt="Group Photo 4" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
