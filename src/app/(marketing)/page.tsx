import { redirect } from "next/navigation";

export default function LandingPage() {
  redirect("/sign-in");

  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
}
