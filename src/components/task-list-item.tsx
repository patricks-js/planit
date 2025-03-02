"use client";

import { markAsComplete } from "@/app/actions/mark-as-complete";
import type { TSelectTaskSchema } from "@/db/schema";
import { format, isBefore, isToday, isTomorrow, isYesterday } from "date-fns";
import { Trash2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

type TaskListItemProps = {
  task: TSelectTaskSchema;
};

export function TaskListItem({ task }: TaskListItemProps) {
  const due = formatDate(task.dueAt);
  const [checked, setChecked] = useState(task.completed);
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
    <div className="group flex items-center justify-between gap-4 rounded-md bg-card px-4 py-2 shadow-sm">
      <div className="flex items-center gap-4">
        <Checkbox
          checked={checked}
          onCheckedChange={handleComplete}
          className="size-4 md:size-5"
        />
        <p className="font-medium leading-loose">{task.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
        >
          <Trash2 className="invisible size-4 translate-x-1 opacity-60 transition-transform duration-200 group-hover:visible group-hover:translate-x-0" />
        </Button>
      </div>
    </div>
  );
}

function formatDate(date: Date) {
  if (isToday(date)) {
    return <Badge className="bg-amber-400">Today</Badge>;
  }

  if (isYesterday(date)) {
    return <Badge className="bg-rose-500 text-foreground">Yesterday</Badge>;
  }

  if (isTomorrow(date)) {
    return <Badge className="bg-emerald-400">Tomorrow</Badge>;
  }

  if (isBefore(date, new Date())) {
    return (
      <Badge className="bg-rose-500/40 text-primary">
        {format(date, "iii, d MMM")}
      </Badge>
    );
  }

  return <Badge variant="secondary">{format(date, "iii, d MMM")}</Badge>;
}
