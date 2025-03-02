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
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskListItem task={task} />
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
