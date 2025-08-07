import { i18n } from "@/config/i18n";

export function Bio() {
  return (
    <div className="text-foreground mb-16 flex flex-col gap-y-6">
      {i18n.user.bio}
    </div>
  );
}
