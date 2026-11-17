// TODO: Replace the GitHub and LinkedIn placeholder URLs below with your real profile links.
const links = [
  { label: "GitHub", href: "https://github.com/prithvirajr203-pixel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prithiviraj-r-5999362a3?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { label: "Prithiviraj AI Lab", href: "https://prithiviraj-ai-lab.netlify.app/" },
];

export default function SocialLinks({ className = "", vertical = false }) {
  return (
    <div className={`flex ${vertical ? "flex-col items-start gap-3" : "items-center gap-6"} ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-silver hover:text-gold transition-colors duration-300 tracking-wide"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
