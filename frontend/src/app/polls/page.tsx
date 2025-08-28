import { PollsList } from "@/components/polls/polls-list";

export default function PollsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Polls</h1>
      <PollsList />
    </div>
  );
}
