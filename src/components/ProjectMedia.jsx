import { useEffect, useState } from "react";

export default function ProjectMedia({
  image,
  images = [],
  video,
  alt = "",
}) {
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Combine the main image and additional images
  const imageList = [
    ...(image ? [image] : []),
    ...images,
  ].filter(Boolean);

  // Remove duplicate image paths
  const uniqueImages = [...new Set(imageList)];

  // Automatically change images every 3 seconds
  useEffect(() => {
    if (video && !videoError) return;
    if (uniqueImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImage((previous) => {
        return (previous + 1) % uniqueImages.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [video, videoError, uniqueImages.length]);

  // -----------------------------
  // VIDEO
  // -----------------------------
  if (video && !videoError) {
    return (
      <video
        src={video}
        className="w-full h-full object-cover"
        controls
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => {
          console.error(
            "Project video failed to load:",
            video
          );

          setVideoError(true);
        }}
      />
    );
  }

  // -----------------------------
  // IMAGES
  // -----------------------------
  if (uniqueImages.length > 0 && !imageError) {
    const activeImage = uniqueImages[currentImage];

    return (
      <div className="relative w-full h-full overflow-hidden bg-black">
        <img
          key={activeImage}
          src={activeImage}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-700"
          loading="lazy"
          onError={() => {
            console.error(
              "Project image failed to load:",
              activeImage
            );

            setImageError(true);
          }}
        />

        {/* Image indicators */}
        {uniqueImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {uniqueImages.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "w-6 bg-gold"
                    : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // -----------------------------
  // FALLBACK
  // -----------------------------
  return (
    <div className="w-full h-full flex items-center justify-center bg-black/30">
      <span className="text-xs tracking-widest text-muted">
        PROJECT MEDIA
      </span>
    </div>
  );
}