import Image from 'next/image';
import { getResponsiveImagePath, hasOptimizedImages } from '@/lib/image-utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function ResponsiveImage({ 
  src, 
  alt, 
  className = '',
  priority = false,
  sizes = '100vw', 
  fill = false,
  width,
  height
}: ResponsiveImageProps) {
  const useOptimized = hasOptimizedImages();
  
  // For static export without optimized images, fall back to Next.js Image
  if (!useOptimized) {
    return (
      <Image 
        src={src}
        alt={alt}
        className={className}
        priority={priority}
        sizes={sizes}
        fill={fill}
        width={width}
        height={height}
      />
    );
  }

  // Use responsive image with multiple formats and sizes
  const { webpSrcSet, fallbackSrc } = getResponsiveImagePath(src);

  if (fill) {
    return (
      <div className={`${className} relative`} style={{ width: '100%', height: '100%' }}>
        <picture>
          <source 
            srcSet={webpSrcSet} 
            sizes={sizes} 
            type="image/webp" 
          />
          <img
            src={fallbackSrc}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading={priority ? 'eager' : 'lazy'}
          />
        </picture>
      </div>
    );
  }
  
  return (
    <picture>
      <source 
        srcSet={webpSrcSet} 
        sizes={sizes} 
        type="image/webp" 
      />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
      />
    </picture>
  );
}