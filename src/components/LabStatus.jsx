export default function LabStatus({ online = true, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs tracking-[0.2em] ${className}`}
      role="status"
      aria-label={online ? "Online" : "Offline"}
    >
      <span className="relative flex h-2 w-2">
        {online && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-pulseGold" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            online ? "bg-gold" : "bg-silver/50"
          }`}
        />
      </span>
      <span className={online ? "text-silver-light" : "text-muted"}>
        {online ? "ONLINE" : "OFFLINE"}
      </span>
    </div>
  );
}
