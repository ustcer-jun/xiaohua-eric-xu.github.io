import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import newsData from '@/data/news.json';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, locale } = useI18n();
  const newsItem = newsData.find(item => item.id.toString() === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-2xl font-semibold text-primary mb-4">{t('news.not_found.title')}</h1>
          <p className="text-text-secondary mb-8">{t('news.not_found.message')}</p>
          <Link 
            to="/news" 
            className="text-link hover:text-primary font-medium"
          >
            {t('news.not_found.back')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/news" 
          className="inline-flex items-center gap-2 text-link hover:text-primary mb-8 font-medium"
        >
          <ArrowLeft size={16} />
          {t('news.back_to_list')}
        </Link>

        {/* News Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={16} className="text-text-secondary" />
            <span className="text-text-secondary text-sm">{newsItem.date}</span>
          </div>
          <h1 className="text-2xl font-semibold text-primary mb-6 pb-2 border-b border-gray-200">
            {locale === 'en' ? newsItem.title.en : newsItem.title.zh}
          </h1>
        </div>

        {/* News Image */}
        {newsItem.image && (
          <div className="mb-8">
            <img 
              src={getImageUrl(newsItem.image)} 
              alt={locale === 'en' ? newsItem.title.en : newsItem.title.zh}
              className="w-full h-auto border border-gray-200"
            />
          </div>
        )}

        {/* News Content */}
        <div className="bg-white p-6 border border-gray-200 mb-8">
          <p className="text-text-primary leading-relaxed mb-6">
            {locale === 'en' ? newsItem.content.en : newsItem.content.zh}
          </p>
        </div>

        {/* Related News */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-primary mb-6 section-title">
            {t('news.related')}
          </h2>
          <div className="space-y-4">
            {newsData
              .filter(item => item.id.toString() !== id)
              .slice(0, 2)
              .map((item) => (
                <Link 
                  key={item.id} 
                  to={`/news/${item.id}`}
                  className="block bg-white p-4 border border-gray-200 hover:border-primary transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {locale === 'en' ? item.title.en : item.title.zh}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {item.date}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
