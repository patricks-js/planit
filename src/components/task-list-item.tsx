"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarDays } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";

import { markAsComplete } from "@/app/actions/mark-as-complete";
import type { TSelectTaskSchema } from "@/db/schema";
import { Checkbox } from "./ui/checkbox";

type TaskListItemProps = {
  task: TSelectTaskSchema;
};

export function TaskListItem({ task }: TaskListItemProps) {
  const [checked, setChecked] = useState(task.status === "done");
  const { execute } = useAction(markAsComplete, {
    onSuccess: () => {
      toast.success("💪 Isso foi fácil, né? Próxima!", {
        // TODO: Add undo action
      });
    },
    onError: () => {
      toast.error("Algo deu errado, tente novamente.");
    },
  });

  function handleComplete() {
    setChecked(!checked);
    execute({
      taskId: task.id,
    });
  }

  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <Checkbox
        checked={checked}
        onCheckedChange={handleComplete}
        className="size-4 md:size-5"
      />
      <div className="grid gap-2">
        <h4 className="font-medium leading-tight">{task.title}</h4>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          {task.description && (
            <p className="line-clamp-1">{task.description}</p>
          )}
          {task.dueDate && task.description ? <span>•</span> : null}
          {task.dueDate && (
            <span className="inline-flex shrink-0 items-center gap-1">
              <CalendarDays className="size-4 opacity-80" />
              <span>{format(task.dueDate, "PP", { locale: ptBR })}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
