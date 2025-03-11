"use client";

import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";

import { markAsComplete } from "@/app/actions/mark-as-complete";
import type { TSelectTaskSchema } from "@/db/schema";
import { DueDateBadge } from "./due-date-badge";
import { TaskDetails } from "./task-details";
import { Checkbox } from "./ui/checkbox";
import { Dialog, DialogTrigger } from "./ui/dialog";

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
    <Dialog>
      <div className="flex items-start gap-4 px-4 py-2">
        <Checkbox
          checked={checked}
          onCheckedChange={handleComplete}
          className="size-4 md:size-5"
        />
        <DialogTrigger asChild>
          <div className="grid grow gap-1">
            <h4 className="font-medium leading-tight">{task.title}</h4>
            {task.description && (
              <p className="line-clamp-1 max-w-lg text-muted-foreground text-xs">
                {task.description}
              </p>
            )}
          </div>
        </DialogTrigger>
        <div className="ml-auto">
          {task.dueDate && (
            <DueDateBadge
              dueDate={task.dueDate}
              completed={task.status === "done"}
            />
          )}
        </div>
        <TaskDetails task={task} />
      </div>
    </Dialog>
  );
}
