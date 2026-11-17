import LabStatus from "./LabStatus.jsx";
import SocialLinks from "./SocialLinks.jsx";
import { freelanceProfile } from "../data/clientWork.js";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="section-max container-px flex flex-col items-center gap-6 text-center">
        
        <div>
          <p className="font-display text-xl text-offwhite">
            R. Prithiviraj
          </p>

          <div className="mt-2 flex flex-col gap-2">
            <p className="text-xs text-silver tracking-[0.15em]">
              AGENTIC AI DEVELOPER
            </p>

            <p className="text-xs text-muted tracking-[0.15em]">
              AI AUTOMATION BUILDER
            </p>
          </div>
        </div>

        <LabStatus online />

        <SocialLinks className="justify-center" />

        <p className="text-xs text-muted">
          {freelanceProfile.role} — {freelanceProfile.organization}
        </p>

        <p className="text-[11px] text-muted/70">
          © 2026 R. Prithiviraj
        </p>
      </div>
    </footer>
  );
}