import { Mail, Globe, X } from 'lucide-react';
import teamMembers from '@/data/team-members.json';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';
import { useState } from 'react';

const Team = () => {
  const { t, locale } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { key: 'professor', label: 'Group Leader' },
    { key: 'associate', label: 'Research Associates' },
    { key: 'postdoc', label: 'Postdoctoral Fellows' },
    { key: 'phd', label: 'PhD Students' },
    { key: 'master', label: 'Master Students' },
    { key: 'undergraduate', label: 'Undergraduate Students' }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-semibold text-primary mb-12 section-title">
          {t('team.hero.title')}
        </h1>

        {categories.map((category) => {
          const members = teamMembers.filter(m => m.category === category.key);
          if (members.length === 0) return null;

          return (
            <div key={category.key} className="mb-12">
              <h2 className="text-2xl font-semibold text-accent mb-6 pb-2 border-b border-gray-200">
                {category.label}
              </h2>

              {(category.key === 'professor' || category.key === 'associate') ? (
                // Group Leader and Research Associates - larger display
                <div className="space-y-8">
                  {members.map((member) => (
                    <div key={member.id} className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/4 flex justify-end">
                        <div className="w-48 h-48">
                          <img 
                            src={getImageUrl(member.photo)} 
                            alt={member.name}
                            className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setSelectedImage(getImageUrl(member.photo))}
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <a 
                          href={member.homepage || '#'} 
                          target={member.homepage ? '_blank' : '_self'}
                          rel={member.homepage ? 'noopener noreferrer' : ''}
                          className="text-xl font-semibold text-primary mb-3 block hover:underline"
                        >
                          {member.name} ({member.nameEn})
                        </a>
                        <p className="text-text-primary mb-4 text-lg">
                          {member.position} / {member.positionCn}
                        </p>
                        <p className="text-text-primary mb-5 text-lg">
                          {member.research}
                        </p>
                        <div className="flex flex-col gap-3">
                          <a 
                            href={`mailto:${member.email}`}
                            className="text-link hover:text-primary flex items-center gap-2 text-lg"
                          >
                            <Mail size={18} />
                            {member.email}
                          </a>
                          {member.homepage && (
                            <a 
                              href={member.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-link hover:text-primary flex items-center gap-2 text-lg"
                            >
                              <Globe size={18} />
                              {t('team.website')}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Other members - grid format
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {members.map((member) => (
                    <div key={member.id} className="flex flex-col items-center p-3">
                      <div className="w-48 h-48 mb-3">
                        <img 
                          src={getImageUrl(member.photo)} 
                          alt={member.name}
                          className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={() => setSelectedImage(getImageUrl(member.photo))}
                        />
                      </div>
                      <a 
                        href={member.homepage || '#'} 
                        target={member.homepage ? '_blank' : '_self'}
                        rel={member.homepage ? 'noopener noreferrer' : ''}
                        className="text-lg font-semibold text-primary mb-1 text-center w-full truncate hover:underline"
                      >
                        {locale === 'zh' ? member.name : member.nameEn}
                      </a>
                      <p className="text-text-secondary text-sm mb-2 text-center w-full truncate">
                        {locale === 'zh' ? member.positionCn : member.position}
                      </p>
                      <p className="text-text-primary text-sm mb-2 text-center w-full h-16 overflow-hidden">
                        {member.research}
                      </p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-link hover:text-primary text-sm text-center w-full truncate"
                      >
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
