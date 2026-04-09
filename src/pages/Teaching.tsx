import { BookOpen } from 'lucide-react';
import courses from '@/data/courses.json';
import { useI18n } from '@/i18n/I18nContext';

const Teaching = () => {
  const { t, locale } = useI18n();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-2xl font-semibold text-primary mb-12 section-title">
          {t('teaching.hero.title')}
        </h1>

        <p className="text-text-primary mb-8">
          {t('teaching.hero.description')}
        </p>

        {/* Courses */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-primary mb-6 section-title">
            {t('teaching.courses.title')}
          </h2>

          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={course.id} className="bg-white p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className="md:w-1/3">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {course.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-2">
                      {course.nameEn}
                    </p>
                    <p className="text-accent text-sm font-medium">
                      {course.code} | {course.semester}
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-text-primary mb-4">
                      {typeof course.description === 'object' ? course.description[locale] : course.description}
                    </p>
                    {course.syllabus && (
                      <a
                        href={course.syllabus}
                        className="text-link hover:text-primary text-sm font-medium"
                      >
                        {t('teaching.courses.download_syllabus')}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching Achievements */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-primary mb-6 section-title">
            {t('teaching.achievements.title')}
          </h2>
          <div className="bg-white p-6 border border-gray-200">
            <p className="text-text-secondary">
              {t('teaching.achievements.no_data')}
            </p>
          </div>
        </section>

        {/* Student Resources */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-6 section-title">
            {t('teaching.resources.title')}
          </h2>
          <div className="bg-white p-6 border border-gray-200">
            <p className="text-text-secondary">
              {t('teaching.resources.no_data')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teaching;
