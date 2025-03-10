import { Badge } from "@/components/ui/badge";
import { cva, type VariantProps } from "class-variance-authority";
import { format, isPast, isToday, isTomorrow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckIcon } from "lucide-react";

const variants = cva("size-1.5 rounded-full", {
  variants: {
    variant: {
      default: "bg-emerald-500",
      tomorrow: "bg-amber-500",
      today: "bg-red-500",
      late: "bg-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type DueDateBadgeProps = {
  dueDate: Date;
  completed: boolean;
};

export function DueDateBadge({ dueDate, completed }: DueDateBadgeProps) {
  let variant: VariantProps<typeof variants>["variant"] = "default";
  let formattedDate = format(dueDate, "PP", { locale: ptBR });

  if (isToday(dueDate)) {
    variant = "today";
    formattedDate = "Hoje";
  } else if (isTomorrow(dueDate)) {
    variant = "tomorrow";
    formattedDate = "Amanhã";
  } else if (isPast(dueDate)) {
    variant = "late";
  }

  return (
    <Badge
      variant="outline"
      className="gap-1.5"
    >
      {completed ? (
        <CheckIcon
          className="text-emerald-500"
          size={12}
          aria-hidden="true"
        />
      ) : (
        <span
          aria-hidden="true"
          className={variants({ variant })}
        />
      )}
      {formattedDate}
    </Badge>
  );
}
