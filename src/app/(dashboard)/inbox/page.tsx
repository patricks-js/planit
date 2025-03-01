import { getAllPendingTasks } from "@/app/actions/get-all-pending-tasks";
import { CreateTaskForm } from "@/components/create-task-form";
import { SearchCommandBox } from "@/components/search-command-box";
import { TaskList } from "@/components/task-list";

export default async function InboxPage() {
  const { userTasks } = await getAllPendingTasks();

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-6 py-8">
      <div className="flex items-center gap-4">
        <SearchCommandBox />
        {/* <div>Sort by (filters)</div> */}
        {/* <div>Views</div> */}
        <CreateTaskForm />
      </div>
      <TaskList tasks={userTasks} />
    </section>
  );
}
