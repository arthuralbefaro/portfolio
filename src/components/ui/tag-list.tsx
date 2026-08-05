import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TagListProps {
  items: string[];
  className?: string;
}

export function TagList({ items, className }: TagListProps) {
  return (
    <ul className={cn("flex list-none flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Badge variant="outline">{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
