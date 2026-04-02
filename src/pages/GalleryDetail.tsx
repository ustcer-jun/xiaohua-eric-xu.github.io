import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import galleryData from '@/data/gallery.json';
import { getImageUrl } from '@/lib/imageUtils';

const GalleryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const galleryItem = galleryData.find(item => item.id.toString() === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!galleryItem) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[#003366] mb-4">相册不存在</h1>
          <p className="text-xl text-gray-600 mb-8">抱歉，您访问的相册不存在或已被删除。</p>
          <Link 
            to="/news" 
            className="px-8 py-3 bg-[#C41E3A] text-white rounded-lg font-semibold transition-colors hover:bg-[#A01830]"
          >
            返回图库
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItem.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItem.images.length) % galleryItem.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            返回图库
          </Link>

          {/* Gallery Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#003366] mb-2">
              {galleryItem.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-500">
              <span>{galleryItem.date}</span>
              <span>•</span>
              <span>{galleryItem.year}</span>
              <span>•</span>
              <span>{galleryItem.category}</span>
              <span>•</span>
              <span>{galleryItem.images.length} 张照片</span>
            </div>
            <p className="mt-4 text-gray-600">
              {galleryItem.description}
            </p>
          </div>

          {/* Main Image */}
          {galleryItem.images.length > 0 && (
            <div className="mb-8">
              <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={getImageUrl(galleryItem.images[currentImageIndex])} 
                  alt={`${galleryItem.title} - 图片 ${currentImageIndex + 1}`}
                  className="w-full h-[500px] object-contain"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <ArrowRight size={24} />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {galleryItem.images.length}
                </div>
              </div>
            </div>
          )}

          {/* Thumbnails */}
          {galleryItem.images.length > 1 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#003366] mb-4">相册图片</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {galleryItem.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      'aspect-square rounded-lg overflow-hidden cursor-pointer transition-all',
                      index === currentImageIndex 
                        ? 'ring-2 ring-[#C41E3A] ring-offset-2' 
                        : 'opacity-70 hover:opacity-100'
                    )}
                  >
                    <img 
                      src={getImageUrl(image)} 
                      alt={`缩略图 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Related Galleries */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">相关相册</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {galleryData
                .filter(item => item.id.toString() !== id)
                .slice(0, 3)
                .map((item) => (
                  <Link 
                    key={item.id} 
                    to={`/gallery/${item.id}`}
                    className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                  >
                    {item.images.length > 0 && (
                      <div className="aspect-video">
                        <img 
                          src={getImageUrl(item.images[0])} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-[#003366] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {item.date} • {item.images.length} 张
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

export default GalleryDetail;
