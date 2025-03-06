import { getAllCompletedTasks } from "@/app/actions/get-all-completed-tasks";
import { TaskList } from "@/components/task-list";

export default async function CompletedPage() {
  const { completedTasks } = await getAllCompletedTasks();

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-6 py-8">
      <h2 className="text-2xl">Completed</h2>
      <TaskList tasks={completedTasks} />
      {/* TODO: Get all completed tasks per date */}
    </section>
  );
}
