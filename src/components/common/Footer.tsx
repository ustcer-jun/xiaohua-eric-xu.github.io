import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#003366] to-[#002244] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#003366] font-bold text-xl">
                USTC
              </div>
              <div>
                <div className="text-xl font-bold">USTC-InSAR</div>
                <div className="text-sm text-gray-300">InSAR研究团队</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              致力于InSAR技术研究与应用，推动地球观测科学发展。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">团队成员</Link></li>
              <li><Link to="/research" className="text-gray-300 hover:text-white transition-colors">研究成果</Link></li>
              <li><Link to="/teaching" className="text-gray-300 hover:text-white transition-colors">教学工作</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-gray-300" />
                <span className="text-gray-300">中国科学技术大学<br />安徽省合肥市</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gray-300" />
                <a href="mailto:xiaohuaxu@ustc.edu.cn" className="text-gray-300 hover:text-white transition-colors">
                  xiaohuaxu@ustc.edu.cn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gray-300" />
                <span className="text-gray-300">+86 551 6360 0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} USTC-InSAR Research Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
