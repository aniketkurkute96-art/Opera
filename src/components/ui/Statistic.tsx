import { cn } from "@/lib/cn";

type StatisticProps = {
  value: string | number;
  label: string;
  className?: string;
  light?: boolean;
};

export function Statistic({ value, label, className, light }: StatisticProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p className={cn("stat-number", light && "text-champagne")}>{value}</p>
      <p
        className={cn(
          "text-[0.68rem] uppercase tracking-[0.2em]",
          light ? "text-champagne/65" : "text-muted",
        )}
      >
        {label}
      </p>
    </div>
  );
}
