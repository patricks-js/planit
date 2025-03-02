"use client";

import { createTaskAction } from "@/app/actions/create-task-action";
import { Plus } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

export function CreateTaskForm() {
  const { execute } = useAction(createTaskAction);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-5" />
          <span className="hidden md:inline">New task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[382px]">
        <form
          action={execute}
          className="mt-4 space-y-5"
        >
          <div className="space-y-2">
            <Input
              name="title"
              type="text"
              placeholder="Task title"
            />
            <Input
              name="dueAt"
              type="date"
            />
          </div>
          <DialogFooter className="ml-auto">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Add task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
