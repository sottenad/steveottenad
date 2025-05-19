/**
 * Get responsive image paths for a source image
 * This is used for responsive images in a static export
 */
export function getResponsiveImagePath(imagePath: string): {
  originalSrc: string;
  webpSrcSet: string;
  fallbackSrc: string;
} {
  // Extract the file name and extension
  const parts = imagePath.split('/');
  const filename = parts[parts.length - 1];
  const filenameParts = filename.split('.');
  const name = filenameParts[0];
  const ext = filenameParts.length > 1 ? `.${filenameParts[filenameParts.length - 1]}` : '';
  const directory = imagePath.substring(0, imagePath.lastIndexOf('/'));

  // Build the set of responsive sources
  const webpSrcSet = [
    `${directory}/optimized/${name}-xs.webp 320w`,
    `${directory}/optimized/${name}-sm.webp 640w`,
    `${directory}/optimized/${name}-md.webp 960w`,
    `${directory}/optimized/${name}-lg.webp 1280w`,
  ].join(', ');

  // Fallback image for browsers that don't support webp
  const fallbackSrc = `${directory}/optimized/${name}-md${ext}`;

  return {
    originalSrc: imagePath,
    webpSrcSet,
    fallbackSrc,
  };
}

/**
 * A simple function to determine if optimized images are available
 * In development or if not yet optimized, this will return false
 */
export function hasOptimizedImages(): boolean {
  // In a static export, we can't determine this at runtime, so we assume
  // the optimization script has been run if in production
  return process.env.NODE_ENV === 'production';
}