import { SectionContainer } from "@/components/page-container";
import { TaskListItem } from "@/components/task-list-item";

type Task = {
  title: string;
  timestamp: string;
  tag: string;
  done: false;
};

async function getInboxTasks() {
  const res = await fetch("https://www.jsondataai.com/api/8fnb0u3");
  const data = (await res.json()) as Task[];

  return data;
}

export default async function InboxPage() {
  const tasks = await getInboxTasks();

  return (
    <SectionContainer>
      <h2 className="mb-8 font-medium text-xl">Inbox</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.title}
            className="flex items-center justify-between gap-8 rounded-md bg-card px-4 py-2"
          >
            <TaskListItem
              title={task.title}
              dueDate={task.timestamp}
            />
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}
