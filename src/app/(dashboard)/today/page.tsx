import { getTodayTasks } from "@/app/actions/get-today-tasks";
import { TaskList } from "@/components/task-list";

export default async function TodayPage() {
  const { todayTasks } = await getTodayTasks();

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-6 py-8">
      <TaskList tasks={todayTasks} />
    </section>
  );
}
