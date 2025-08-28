import { CreatePollForm } from "@/components/polls/create-poll-form";

export default function CreatePollPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Create New Poll</h1>
        <CreatePollForm />
      </div>
    </div>
  );
}
