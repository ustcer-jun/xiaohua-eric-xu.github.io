import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Tag, Image as ImageIcon, ChevronRight } from 'lucide-react';
import newsData from '@/data/news.json';
import galleryData from '@/data/gallery.json';
import { getImageUrl } from '@/lib/imageUtils';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Award', 'Publication', 'Event', 'Other'];

  const filteredNews = newsData.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  const galleryCategories = ['Group Photos', 'Conferences', 'Field Work', 'Social Events'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">新闻动态</h1>
            <p className="text-xl text-gray-600">了解团队的最新进展与活动</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-6 py-2 rounded-full text-sm font-medium transition-all',
                  selectedCategory === category
                    ? 'bg-[#C41E3A] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                )}
              >
                {category === 'all' ? '全部' :
                 category === 'Award' ? '荣誉奖项' :
                 category === 'Publication' ? '论文发表' :
                 category === 'Event' ? '团队活动' : '其他'}
              </button>
            ))}
          </div>

          {/* News List */}
          <div className="space-y-6">
            {filteredNews.map((item, index) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="md:flex">
                    {item.image && (
                      <div className="md:w-64 flex-shrink-0">
                        <img 
                          src={getImageUrl(item.image)} 
                          alt={item.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-8 flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={cn(
                          'px-3 py-1 rounded-full text-xs font-semibold',
                          item.category === 'Publication' ? 'bg-blue-100 text-blue-700' :
                          item.category === 'Award' ? 'bg-yellow-100 text-yellow-700' :
                          item.category === 'Event' ? 'bg-green-100 text-green-700' :
                          'bg-gray-100 text-gray-700'
                        )}>
                          {item.category === 'Publication' ? '论文发表' :
                           item.category === 'Award' ? '荣誉奖项' :
                           item.category === 'Event' ? '团队活动' : '其他'}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Calendar size={14} />
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#003366] mb-3 group-hover:text-[#C41E3A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}

            {filteredNews.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
                <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">暂无相关新闻</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">图片库</h2>
            <p className="text-xl text-gray-600">记录团队的精彩瞬间</p>
          </div>

          {/* Gallery Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#C41E3A] flex items-center justify-center">
                  <div className="text-center text-white">
                    <ImageIcon size={48} className="mx-auto mb-3 opacity-80" />
                    <h3 className="text-xl font-bold">{category === 'Group Photos' ? '团队合影' :
                                                         category === 'Conferences' ? '学术会议' :
                                                         category === 'Field Work' ? '野外考察' : '社交活动'}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
                  <ChevronRight className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Items Preview */}
          {galleryData.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">最新相册</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData.map((item, index) => (
                  <Link
                    key={item.id}
                    to={`/gallery/${item.id}`}
                    className="block"
                  >
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                      {item.images.length > 0 && (
                        <div className="aspect-video relative">
                          <img 
                            src={getImageUrl(item.images[0])} 
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                            {item.images.length} 张
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[#C41E3A] font-semibold text-sm">{item.year}</span>
                          <span className="text-gray-500 text-sm">{item.date}</span>
                        </div>
                        <h4 className="text-lg font-bold text-[#003366] mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default News;
