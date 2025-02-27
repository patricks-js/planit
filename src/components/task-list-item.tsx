import { format, isBefore, isToday, isTomorrow, isYesterday } from "date-fns";
import { EllipsisVertical } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

type TaskListItemProps = {
  title: string;
  dueDate: string;
};

export function TaskListItem({ title, dueDate }: TaskListItemProps) {
  const due = formatDate(new Date(dueDate));

  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 rounded-md bg-card p-1 shadow-sm">
        <div className="flex items-center gap-4">
          <Checkbox className="size-4 md:size-5" />
          <p className="font-medium leading-loose">{title}</p>
        </div>
        <div className="flex items-center gap-2">
          {due}
          <Button
            size="icon"
            variant="ghost"
          >
            <EllipsisVertical className="size-4" />
          </Button>
        </div>
      </div>
    </>
  );
}

function formatDate(date: Date) {
  if (isToday(date)) {
    return <Badge className="bg-emerald-400">Today</Badge>;
  }

  if (isYesterday(date)) {
    return <Badge className="bg-emerald-400">Yesterday</Badge>;
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

  return format(date, "iii, d MMM");
}
