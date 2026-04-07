import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import newsData from '@/data/news.json';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';

const News = () => {
  const { t, locale } = useI18n();

  // Sort news by date in descending order
  const sortedNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Group news by year
  const newsByYear = sortedNews.reduce((acc, news) => {
    const year = news.date.split('-')[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(news);
    return acc;
  }, {} as Record<string, typeof newsData>);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-2xl font-semibold text-primary mb-12 section-title">
          {t('news.hero.title')}
        </h1>

        <p className="text-text-primary mb-8">
          {t('news.hero.description')}
        </p>

        {/* News List grouped by year */}
        <div className="space-y-12">
          {Object.entries(newsByYear).map(([year, newsList]) => (
            <div key={year}>
              <h2 className="text-xl font-semibold text-accent mb-6 pb-2 border-b border-gray-200">
                {year}
              </h2>
              
              <div className="space-y-6">
                {newsList.map((item) => (
                  <div key={item.id} className="bg-white p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar size={16} className="text-text-secondary" />
                      <span className="text-text-secondary text-sm">{item.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      {locale === 'en' ? item.title.en : item.title.zh}
                    </h3>
                    
                    {item.image && (
                      <div className="mb-4">
                        <img 
                          src={getImageUrl(item.image)} 
                          alt={locale === 'en' ? item.title.en : item.title.zh}
                          className="w-full h-auto border border-gray-200 max-w-md"
                        />
                      </div>
                    )}
                    
                    <p className="text-text-primary mb-4">
                      {locale === 'en' ? item.content.en : item.content.zh}
                    </p>
                    
                    <Link 
                      to={`/news/${item.id}`} 
                      className="text-link hover:text-primary text-sm font-medium"
                    >
                      {t('home.news.read_more')}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {sortedNews.length === 0 && (
          <div className="bg-white p-6 border border-gray-200 text-center">
            <p className="text-text-secondary">{t('news.no_data')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
