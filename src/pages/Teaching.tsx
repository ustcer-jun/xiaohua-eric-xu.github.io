import { motion } from 'framer-motion';
import { BookOpen, FileText, Award, ExternalLink } from 'lucide-react';
import courses from '@/data/courses.json';
import { useI18n } from '@/i18n/I18nContext';

const Teaching = () => {
  const { t } = useI18n();

  const teachingAchievements = [
    {
      title: '校级教学成果奖',
      description: '2023年获得中国科学技术大学校级教学成果二等奖',
      year: 2023
    },
    {
      title: '精品课程建设',
      description: '《卫星遥感与地球观测》被评为校级精品课程',
      year: 2022
    },
    {
      title: '优秀教学奖',
      description: '连续多年获得学院优秀教学评价',
      year: 2021
    }
  ];

  const studentResources = [
    {
      category: '推荐读物',
      items: [
        'Synthetic Aperture Radar Interferometry - Rosen et al.',
        'GPS Satellite Surveying - Leick',
        'Introduction to Earthquake Engineering - Bolt'
      ]
    },
    {
      category: '软件工具',
      items: [
        'GMTSAR - InSAR处理软件',
        'ISCE - InSAR科学计算环境',
        'SNAP - ESA哨兵应用平台',
        'MATLAB - 科学计算'
      ]
    },
    {
      category: '数据资源',
      items: [
        'ESA Sentinel Data Hub',
        'NASA Alaska Satellite Facility',
        'NASA Earthdata',
        'Vertex - ASF数据门户'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">{t('teaching.hero.title')}</h1>
          <p className="text-xl text-gray-600">{t('teaching.hero.description')}</p>
        </div>

        {/* Courses */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#C41E3A] rounded-lg flex items-center justify-center text-white">
              <BookOpen size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#003366]">{t('teaching.courses.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-[#003366] text-white text-sm font-semibold rounded-full mb-3">
                        {course.code}
                      </span>
                      <h3 className="text-2xl font-bold text-[#003366] mb-1">{course.name}</h3>
                      <p className="text-gray-500">{course.nameEn}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-[#C41E3A] font-semibold">{course.semester}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  {course.syllabus && (
                    <a
                      href={course.syllabus}
                      className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:text-[#C41E3A] transition-colors"
                    >
                      <FileText size={18} />
                      {t('teaching.courses.download_syllabus')}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Teaching Achievements */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#003366]">{t('teaching.achievements.title')}</h2>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-600">{t('teaching.achievements.no_data')}</p>
          </div>
        </section>

        {/* Student Resources */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#003366] rounded-lg flex items-center justify-center text-white">
              <FileText size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#003366]">{t('teaching.resources.title')}</h2>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-600">{t('teaching.resources.no_data')}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teaching;
