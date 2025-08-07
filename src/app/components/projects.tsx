import { i18n } from "@/config/i18n";

export function Projects() {
  return (
    <section className="mb-16">
      <h3 className="text-muted-foreground text-xs uppercase tracking-widest">
        {i18n.projects.title}
      </h3>
      <div className="">
        {i18n.projects.items.map((item, i) => (
          <div
            className="flex items-center gap-3 relative overflow-hidden pt-2 pb-2 transition-none rounded-lg outline-none"
            key={i}
          >
            <a
              href={item.url || `#${item.title}`}
              target={
                item.url.startsWith("#") || !item.url ? undefined : "_blank"
              }
            >
              {item.title}
            </a>
            <div className="flex-grow relative border-[0.5px] border-border"></div>
            <div className="text-end text-muted-foreground">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
