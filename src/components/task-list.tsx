"use client";

import type { TSelectTaskSchema } from "@/db/schema";
import { TaskListItem } from "./task-list-item";

type TaskListProps = {
  tasks: TSelectTaskSchema[];
};

export function TaskList({ tasks }: TaskListProps) {
  return (
    <>
      {tasks.length > 0 ? (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.title}
              className="flex items-center justify-between gap-8 rounded-md bg-card px-4 py-2"
            >
              <TaskListItem
                title={task.title}
                dueDate={task.dueAt}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center">
          <h4 className="font-medium leading-relaxed tracking-tight">
            Your Inbox is Empty!
          </h4>
          <p className="mt-2 text-muted-foreground text-sm">
            🎉 Great job clearing your tasks! Enjoy this quiet moment to relax
            or plan your next move.
          </p>
        </div>
      )}
    </>
  );
}
