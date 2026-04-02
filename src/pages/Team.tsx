import { motion } from 'framer-motion';
import { Mail, Globe, User } from 'lucide-react';
import teamMembers from '@/data/team-members.json';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';

const Team = () => {
  const { t } = useI18n();

  const categories = [
    { key: 'professor', labelKey: 'team.categories.professor' },
    { key: 'associate', labelKey: 'team.categories.associate' },
    { key: 'postdoc', labelKey: 'team.categories.postdoc' },
    { key: 'phd', labelKey: 'team.categories.phd' },
    { key: 'master', labelKey: 'team.categories.master' },
    { key: 'undergraduate', labelKey: 'team.categories.undergraduate' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">{t('team.hero.title')}</h1>
          <p className="text-xl text-gray-600">{t('team.hero.description')}</p>
        </div>

        {categories.map((category) => {
          const members = teamMembers.filter(m => m.category === category.key);
          if (members.length === 0) return null;

          return (
            <div key={category.key} className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#003366] flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#C41E3A] rounded-full"></span>
                  {t(category.labelKey)}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {members.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                      {member.photo ? (
                        <img 
                          src={getImageUrl(member.photo)} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <span className="text-gray-400 font-medium">{member.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-[#003366]">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.nameEn}</p>
                      </div>
                      <p className="text-[#C41E3A] font-semibold mb-3">{member.positionCn}</p>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.research}</p>
                      <div className="flex gap-3">
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-[#C41E3A] hover:text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <Mail size={16} />
                          {t('team.email')}
                        </a>
                        {member.homepage && (
                          <a 
                            href={member.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-[#003366] hover:text-white rounded-lg transition-colors"
                          >
                            <Globe size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
