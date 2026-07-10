import { cn } from "@/lib/cn";
import { spacing } from "@/styles/spacing";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(spacing.container, className)}>{children}</div>;
}
