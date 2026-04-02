import { motion } from 'framer-motion';
import { 
  Globe, 
  ExternalLink, 
  BookOpen, 
  Database, 
  Code,
  GraduationCap,
  Building,
  Link2,
  Download
} from 'lucide-react';

const Links = () => {
  const academicProfiles = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?hl=zh-CN&user=ME1EfdsAAAAJ&view_op=list_works&sortby=pubdate',
      icon: <BookOpen size={28} />,
      description: '查看全部学术论文与引用'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Xiaohua-Eric-Xu',
      icon: <Code size={28} />,
      description: '代码仓库与开源项目'
    },
    {
      name: 'GMTSAR Downloads',
      url: 'https://topex.ucsd.edu/gmtsar/downloads/',
      icon: <Download size={28} />,
      description: 'GMTSAR软件下载'
    }
  ];

  const relatedWebsites = [
    {
      name: '中国科学技术大学',
      url: 'https://www.ustc.edu.cn',
      icon: <Building size={28} />,
      description: 'USTC 官方主页'
    },
    {
      name: '地球和空间科学学院',
      url: 'https://ess.ustc.edu.cn',
      icon: <Globe size={28} />,
      description: '学院官方网站'
    },
    {
      name: '蒙城地球物理国家野外科学观测研究站',
      url: 'http://earthquake.ustc.edu.cn',
      icon: <Database size={28} />,
      description: '地震监测与研究'
    }
  ];

  const sarDataPortals = [
    {
      name: 'ESA Sentinel Data Hub',
      url: 'https://scihub.copernicus.eu',
      icon: <Database size={28} />,
      description: '欧洲空间局哨兵数据'
    },
    {
      name: 'NASA Alaska Satellite Facility',
      url: 'https://search.asf.alaska.edu/#/',
      icon: <Database size={28} />,
      description: 'ASF SAR数据存档'
    },
    {
      name: 'NASA Earthdata',
      url: 'https://earthdata.nasa.gov',
      icon: <Database size={28} />,
      description: 'NASA地球观测数据'
    }
  ];

  const insarTools = [
    {
      name: 'GMT',
      url: 'https://www.generic-mapping-tools.org',
      icon: <Code size={28} />,
      description: '通用地图工具集'
    },
    {
      name: 'GMTSAR',
      url: 'https://topex.ucsd.edu/gmtsar',
      icon: <Code size={28} />,
      description: 'InSAR处理软件 (基于GMT)'
    }
  ];

  const LinkCard = ({ item, color }: { item: any; color: string }) => (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all group"
    >
      <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform', color)}>
        {item.icon}
      </div>
      <h3 className="text-xl font-bold text-[#003366] mb-2 group-hover:text-[#C41E3A] transition-colors">
        {item.name}
      </h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <div className="flex items-center gap-2 text-[#C41E3A] font-semibold">
        访问 <ExternalLink size={16} />
      </div>
    </motion.a>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">相关链接</h1>
          <p className="text-xl text-gray-600">学术资源、数据平台与有用工具</p>
        </div>

        {/* Academic Profiles */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#C41E3A] rounded-lg flex items-center justify-center text-white">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#003366]">学术档案</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicProfiles.map((item, index) => (
              <LinkCard 
                key={index} 
                item={item} 
                color="bg-gradient-to-br from-[#003366] to-[#C41E3A] text-white" 
              />
            ))}
          </div>
        </section>

        {/* Related Websites */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white">
              <Building size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#003366]">相关网站</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedWebsites.map((item, index) => (
              <LinkCard 
                key={index} 
                item={item} 
                color="bg-gradient-to-br from-blue-500 to-blue-700 text-white" 
              />
            ))}
          </div>
        </section>

        {/* SAR Data Portals */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white">
              <Database size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#003366]">SAR数据平台</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sarDataPortals.map((item, index) => (
              <LinkCard 
                key={index} 
                item={item} 
                color="bg-gradient-to-br from-green-500 to-green-700 text-white" 
              />
            ))}
          </div>
        </section>

        {/* InSAR Tools */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white">
              <Code size={24} />
            </div>
            <h2 className="text-3xl font-bold text-[#003366]">InSAR处理工具</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insarTools.map((item, index) => (
              <LinkCard 
                key={index} 
                item={item} 
                color="bg-gradient-to-br from-purple-500 to-purple-700 text-white" 
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Links;
