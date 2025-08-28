import { PollDetail } from "@/components/polls/poll-detail";

interface PollPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PollPage({ params }: PollPageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto py-8">
      <PollDetail pollId={id} />
    </div>
  );
}
