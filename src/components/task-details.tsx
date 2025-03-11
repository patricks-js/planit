"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import type { TSelectTaskSchema } from "@/db/schema";
import { DatePicker } from "./date-picker";
import { Label } from "./ui/label";

type TaskDetailsProps = {
  task: TSelectTaskSchema;
};

export function TaskDetails({ task }: TaskDetailsProps) {
  const id = "asdasd";

  return (
    <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
      <SheetHeader className="contents space-y-0 text-left">
        <SheetTitle className="border-b px-6 py-4 text-base">
          {task.title}
        </SheetTitle>
      </SheetHeader>
      <SheetDescription className="sr-only">
        Faça as alterações da sua tarefa aqui.
      </SheetDescription>
      <div className="overflow-y-auto">
        <div className="px-6 pt-4 pb-6">
          <form className="space-y-4">
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-title`}>Title</Label>
              <Input
                id={`${id}-first-name`}
                placeholder="Título da tarefa"
                defaultValue={task.title}
                required
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-bio`}>
                Descrição
                <span className="font-normal text-muted-foreground text-xs leading-[inherit]">
                  (opcional)
                </span>
              </Label>
              <Textarea
                id={`${id}-bio`}
                placeholder="Descrição da tarefa"
                defaultValue={task.description ?? ""}
                aria-describedby={`${id}-description`}
              />
            </div>
            <div className="*:not-first:mt-2">
              <Label htmlFor={`${id}-due-date`}>
                Data de vencimento
                <span className="font-normal text-muted-foreground text-xs leading-[inherit]">
                  (opcional)
                </span>
              </Label>
              <DatePicker
                name="dueDate"
                defaultValue={task.dueDate ?? undefined}
              />
            </div>
          </form>
        </div>
      </div>
      <SheetFooter className="border-t px-6 py-4">
        <SheetClose asChild>
          <Button
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button type="button">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
