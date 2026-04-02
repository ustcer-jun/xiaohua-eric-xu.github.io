import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, ExternalLink } from 'lucide-react';
import newsData from '@/data/news.json';
import { getImageUrl } from '@/lib/imageUtils';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = newsData.find(item => item.id.toString() === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[#003366] mb-4">新闻不存在</h1>
          <p className="text-xl text-gray-600 mb-8">抱歉，您访问的新闻不存在或已被删除。</p>
          <Link 
            to="/news" 
            className="px-8 py-3 bg-[#C41E3A] text-white rounded-lg font-semibold transition-colors hover:bg-[#A01830]"
          >
            返回新闻列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 text-[#003366] font-semibold hover:text-[#C41E3A] mb-8"
          >
            <ArrowLeft size={20} />
            返回新闻列表
          </Link>

          {/* News Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={cn(
                'px-3 py-1 rounded-full text-xs font-semibold',
                newsItem.category === 'Publication' ? 'bg-blue-100 text-blue-700' :
                newsItem.category === 'Award' ? 'bg-yellow-100 text-yellow-700' :
                newsItem.category === 'Event' ? 'bg-green-100 text-green-700' :
                'bg-gray-100 text-gray-700'
              )}>
                {newsItem.category === 'Publication' ? '论文发表' :
                 newsItem.category === 'Award' ? '荣誉奖项' :
                 newsItem.category === 'Event' ? '团队活动' : '其他'}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Calendar size={14} />
                {newsItem.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
              {newsItem.title}
            </h1>
          </div>

          {/* News Image */}
          {newsItem.image && (
            <div className="mb-8">
              <img 
                src={getImageUrl(newsItem.image)} 
                alt={newsItem.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          )}

          {/* News Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {newsItem.content}
              </p>
              
              {/* Detailed content based on category */}
              {newsItem.category === 'Publication' && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4">论文详情</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>发表期刊：</strong> Geophysical Research Letters
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>发表日期：</strong> {newsItem.date}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>作者：</strong> 徐小华, 张三, 李四
                  </p>
                  <div className="flex gap-3 mt-6">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#003366] text-white rounded-lg transition-colors hover:bg-[#002244] text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      查看全文
                    </a>
                  </div>
                </div>
              )}
              
              {newsItem.category === 'Award' && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4">获奖详情</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>奖项名称：</strong> 优秀研究成果奖
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>颁奖机构：</strong> 中国地球物理学会
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>获奖日期：</strong> {newsItem.date}
                  </p>
                </div>
              )}
              
              {newsItem.category === 'Event' && (
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4">活动详情</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>活动名称：</strong> 团队春季会议
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>活动日期：</strong> {newsItem.date}
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>活动地点：</strong> 中国科学技术大学
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related News */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">相关新闻</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {newsData
                .filter(item => item.id.toString() !== id)
                .slice(0, 2)
                .map((item) => (
                  <Link 
                    key={item.id} 
                    to={`/news/${item.id}`}
                    className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
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
                      </div>
                      <h3 className="text-lg font-bold text-[#003366] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {item.content}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default NewsDetail;
