"use client";

import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = keyof typeof Icons;

export function DynamicIcon({ name, ...props }: LucideProps & { name: string }) {
  const Icon = Icons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  const Fallback = Icons.Sparkles;
  const Component = Icon ?? Fallback;
  return <Component {...props} />;
}
