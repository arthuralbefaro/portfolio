import * as React from "react";

import { cn } from "@/lib/utils";

type MetaLabelElement = "p" | "h2" | "h3" | "span";

interface MetaLabelProps extends React.HTMLAttributes<HTMLElement> {
  as?: MetaLabelElement;
}

export function MetaLabel({
  as: Tag = "p",
  className,
  ...props
}: MetaLabelProps) {
  return (
    <Tag
      className={cn(
        "text-muted-foreground text-meta font-mono uppercase",
        className,
      )}
      {...props}
    />
  );
}
