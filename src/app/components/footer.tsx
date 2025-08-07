import { i18n } from "@/config/i18n";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full flex flex-row items-center justify-between border-t border-foreground/50 gap-6 py-6 text-[color:var(--foreground)] opacity-50 text-sm mt-24">
      <div className="flex flex-row items-center gap-3">
        <span className="">
          © {currentYear} - {i18n.user.name}
        </span>
      </div>
      <div className="flex flex-row items-center gap-3">
        <a
          href="https://x.com/jozefini_com"
          target=""
          rel="noopener noreferrer"
        >
          X
        </a>
        <a
          href="https://linkedin.com/in/jozefini"
          target=""
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href={`mailto:${i18n.user.email}`}>Email</a>
      </div>
    </footer>
  );
}
