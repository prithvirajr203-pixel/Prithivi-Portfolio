import { motion } from "framer-motion";

export default function CertificateCard({ cert, active, onImageClick }) {
  const hasImage = Boolean(cert?.image);

  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.94,
        opacity: active ? 1 : 0.55,
      }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col rounded-2xl overflow-hidden bg-surface border transition-colors duration-300 ${
        active ? "border-gold shadow-gold-sm" : "border-line"
      } h-full`}
    >
      <button
        type="button"
        onClick={() => hasImage && onImageClick?.(cert)}
        disabled={!hasImage}
        className="aspect-[4/3] w-full bg-black/20 overflow-hidden"
        aria-label={
          hasImage ? `View ${cert.title} certificate` : undefined
        }
      >
        {hasImage ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-contain"
            onError={(e) => {
              console.error(
                "Certificate image failed:",
                cert.image
              );
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-[10px] tracking-[0.14em] text-muted">
              ADD CERTIFICATE IMAGE
            </span>
          </div>
        )}
      </button>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] tracking-[0.16em] text-gold mb-2">
          {cert.category?.toUpperCase()}
        </p>

        <h3 className="font-display text-lg text-offwhite mb-1 leading-snug">
          {cert.title}
        </h3>

        <p className="text-xs text-muted mb-4">
          {cert.organization}
        </p>

        {cert.certificateUrl ? (
          <a
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-sm text-silver-light hover:text-gold transition-colors w-fit"
          >
            View Certificate →
          </a>
        ) : (
          <span className="mt-auto text-sm text-muted/60 w-fit">
            Certificate available above →
          </span>
        )}
      </div>
    </motion.div>
  );
}