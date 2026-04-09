import { useState } from 'react';
import { Search } from 'lucide-react';
import publications from '@/data/publications.json';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';

const Research = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { t, locale } = useI18n();

  const years = ['all', ...new Set(publications.map(p => p.year.toString()))].sort((a, b) => {
    if (a === 'all') return -1;
    if (b === 'all') return 1;
    return parseInt(b) - parseInt(a);
  });

  const filteredPublications = publications.filter(p => {
    const matchesYear = selectedYear === 'all' || p.year.toString() === selectedYear;
    const matchesType = selectedType === 'all' || p.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesType && matchesSearch;
  });

  const researchAreas = [
    {
      titleKey: 'research.areas.insar.title',
      descriptionKey: 'research.areas.insar.description',
      image: '/images/research/sentinel-1.png'
    },
    {
      titleKey: 'research.areas.earthquake.title',
      descriptionKey: 'research.areas.earthquake.description',
      image: '/images/research/Ridgecrest.png'
    },
    {
      titleKey: 'research.areas.ai.title',
      descriptionKey: 'research.areas.ai.description',
      image: '/images/research/AI.png'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Research Areas */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-2xl font-semibold text-primary mb-12 section-title">
            {t('research.hero.title')}
          </h1>

          <p className="text-text-primary mb-8">
            {t('research.hero.description')}
          </p>

          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/5">
                  <img 
                    src={getImageUrl(area.image)} 
                    alt={t(area.titleKey)}
                    className="w-full h-auto border border-gray-200"
                  />
                </div>
                <div className="md:w-3/5">
                  <h2 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-200">
                    {t(area.titleKey)}
                  </h2>
                  <p className="text-text-primary leading-relaxed">
                    {t(area.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-primary mb-8 section-title">
            {t('research.publications.title')}
          </h2>

          {/* Filters */}
          <div className="bg-white p-6 mb-8 border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                  <input
                    type="text"
                    placeholder={t('research.publications.search')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                  />
                </div>
              </div>

              {/* Year Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-white"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? t('research.publications.year_filter') : year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 focus:ring-1 focus:ring-primary focus:border-primary outline-none bg-white"
                >
                  <option value="all">{t('research.publications.type_filter')}</option>
                  <option value="journal">{t('research.publications.filters.journal')}</option>
                  <option value="conference">{t('research.publications.filters.conference')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <div key={pub.id} className="bg-white p-6 border border-gray-200">
                <p className="text-text-primary mb-3">
                  <span className="font-medium">[{index + 1}]</span> {pub.authors}. ({pub.year}). "{pub.title}", <em>{pub.journal}</em>.
                </p>
                <div className="flex gap-4">
                  {pub.pdf && (
                    <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="text-link hover:text-primary text-sm">
                      [PDF]
                    </a>
                  )}
                  {pub.doi && (
                    <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-link hover:text-primary text-sm">
                      [DOI]
                    </a>
                  )}
                </div>
              </div>
            ))}

            {filteredPublications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-secondary">{t('research.publications.no_results')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
