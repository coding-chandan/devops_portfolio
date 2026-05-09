import { cn } from "@/lib/utils";

export function Button({ className, children, ...props }: any) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-md transition-all active:scale-95 text-sm font-bold tracking-wide uppercase",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}