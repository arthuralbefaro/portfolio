import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  tone?: "muted" | "emphasis";
  className?: string;
}

export function BulletList({
  items,
  tone = "muted",
  className,
}: BulletListProps) {
  return (
    <ul className={cn("space-y-2", className)}>
      {items.map((item) => (
        <li
          key={item.slice(0, 28)}
          className="text-muted-foreground text-body flex items-start gap-2 leading-relaxed"
        >
          <span aria-hidden className="flex h-6 shrink-0 items-center">
            <span
              className={cn(
                "size-1 rounded-full",
                tone === "emphasis" ? "bg-emphasis" : "bg-muted-foreground",
              )}
            />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
