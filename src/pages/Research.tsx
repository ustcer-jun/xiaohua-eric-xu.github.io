import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  FileText, 
  ExternalLink, 
  Download,
  Calendar,
  Quote
} from 'lucide-react';
import publications from '@/data/publications.json';

const Research = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
      title: 'InSAR技术与应用',
      description: '我们开发和优化InSAR处理算法，提高形变监测的精度和效率。研究包括大气延迟校正、相位解缠、时间序列分析等关键技术。',
      image: '/images/research/sentinel-1.png'
    },
    {
      title: '地震大地测量',
      description: '利用InSAR数据研究地震的同震形变、震后滑移及地震周期。我们的研究为理解地震机制和地震危险性评估提供重要依据。',
      image: '/images/research/NISAR.jpg'
    },
    {
      title: '火山形变监测',
      description: '通过持续监测火山地表形变，研究岩浆活动过程，为火山喷发预警提供科学支持。我们监测全球多个活火山的活动状态。',
      image: '/images/research/ustcblue.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#003366] to-[#002244] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            研究成果
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            我们的研究方向与学术发表
          </motion.p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">研究领域</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">我们专注于以下核心研究方向</p>
          </div>

          <div className="space-y-12">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={area.image} 
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">{area.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">学术发表</h2>
            <p className="text-gray-600">我们团队的研究论文发表情况</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="搜索论文标题、作者或期刊..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Year Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent outline-none bg-white"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? '全部年份' : year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#C41E3A] focus:border-transparent outline-none bg-white"
                >
                  <option value="all">全部类型</option>
                  <option value="journal">期刊论文</option>
                  <option value="conference">会议论文</option>
                </select>
              </div>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#C41E3A] rounded-lg flex items-center justify-center text-white">
                      <FileText size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={cn(
                        'px-3 py-1 rounded-full text-xs font-semibold',
                        pub.type === 'journal' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                      )}>
                        {pub.type === 'journal' ? '期刊论文' : '会议论文'}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar size={14} />
                        {pub.year}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Quote size={14} />
                        {pub.citations} 引用
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#003366] mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-[#C41E3A] font-medium mb-4">{pub.journal}</p>
                    <div className="flex gap-3">
                      {pub.doi && (
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-[#003366] hover:bg-[#002244] text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <ExternalLink size={16} />
                          DOI
                        </a>
                      )}
                      {pub.pdf && (
                        <a
                          href={pub.pdf}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium"
                        >
                          <Download size={16} />
                          PDF
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredPublications.length === 0 && (
              <div className="text-center py-16">
                <Search size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">没有找到匹配的论文</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Research;
