import { i18n } from "@/config/i18n";

export function Header() {
  return (
    <div className="flex flex-row items-start space-x-4 w-full mb-16">
      <div className="box-border flex flex-col font-normal items-start text-[color:var(--foreground)] text-left  w-full">
        <p className="text-foreground">{i18n.user.name}</p>
        <p className="text-muted-foreground">{i18n.user.jobTitle}</p>
      </div>
    </div>
  );
}
