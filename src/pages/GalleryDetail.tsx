import { useParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { getImageUrl } from '@/lib/imageUtils';
import { useI18n } from '@/i18n/I18nContext';
import { useState } from 'react';

const GalleryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery data with images
  const galleryData = {
    '2024': {
      name: '2024',
      images: [
        '/images/USTC_InSAR_share/2024/1.JPG',
        '/images/USTC_InSAR_share/2024/2.JPG'
      ]
    },
    '2025': {
      name: '2025',
      images: [
        '/images/USTC_InSAR_share/2025/1.JPG',
        '/images/USTC_InSAR_share/2025/2.JPG',
        '/images/USTC_InSAR_share/2025/3.JPG',
        '/images/USTC_InSAR_share/2025/4.jpg',
        '/images/USTC_InSAR_share/2025/5.jpg'
      ]
    },
    '2026': {
      name: '2026',
      images: [
        '/images/USTC_InSAR_share/2026/1.jpg'
      ]
    },
    'AGU': {
      name: 'AGU',
      images: [
        '/images/USTC_InSAR_share/AGU/1.jpg',
        '/images/USTC_InSAR_share/AGU/2.jpg',
        '/images/USTC_InSAR_share/AGU/3.jpg',
        '/images/USTC_InSAR_share/AGU/4.jpg',
        '/images/USTC_InSAR_share/AGU/5.jpg',
        '/images/USTC_InSAR_share/AGU/6.jpg',
        '/images/USTC_InSAR_share/AGU/7.jpg',
        '/images/USTC_InSAR_share/AGU/8.jpg'
      ]
    },
    'GMTSAR': {
      name: 'GMTSAR',
      images: [
        '/images/USTC_InSAR_share/GMTSAR/1.png',
        '/images/USTC_InSAR_share/GMTSAR/2.png',
        '/images/USTC_InSAR_share/GMTSAR/3.jpeg',
        '/images/USTC_InSAR_share/GMTSAR/4.jpeg',
        '/images/USTC_InSAR_share/GMTSAR/5.jpg',
        '/images/USTC_InSAR_share/GMTSAR/6.jpg'
      ]
    }
  };

  const gallery = galleryData[id as keyof typeof galleryData];

  if (!gallery) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-semibold text-primary mb-6">
            Gallery Not Found
          </h1>
          <button 
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primaryDark transition-colors"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-primary">
            {gallery.name} Gallery
          </h1>
          <button 
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primaryDark transition-colors"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.images.map((image, index) => (
            <div key={index} className="relative">
              <img 
                src={getImageUrl(image)} 
                alt={`${gallery.name} ${index + 1}`} 
                className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(getImageUrl(image))}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;