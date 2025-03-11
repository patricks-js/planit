"use client";

import { Plus } from "lucide-react";
import { useAction } from "next-safe-action/hooks";

import { createTaskAction } from "@/app/actions/create-task-action";
import { DatePicker } from "./date-picker";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

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
      <DialogContent className="p-4">
        <DialogHeader>
          <DialogTitle className="sr-only">Nova tarefa</DialogTitle>
        </DialogHeader>
        <form
          action={execute}
          className="space-y-5 px-4 pb-2"
        >
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              name="title"
              placeholder="Título da tarefa"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">
              Description{" "}
              <span className="text-muted-foreground text-sm leading-0">
                (opcional)
              </span>
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descrição da tarefa"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dueDate">Data de vencimento</Label>
            <DatePicker name="dueDate" />
          </div>
          <DialogFooter className="flex flex-row justify-end p-0">
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
