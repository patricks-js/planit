import { redirect } from "next/navigation";

export default function Home() {
  redirect("/inbox");

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
