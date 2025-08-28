"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Mock data - replace with actual data fetching
const mockPolls = [
  {
    id: "1",
    title: "What's your favorite programming language?",
    description: "Vote for your preferred language",
    votes: 150,
    options: ["JavaScript", "Python", "TypeScript", "Go"],
  },
  {
    id: "2",
    title: "Best frontend framework?",
    description: "Which framework do you prefer?",
    votes: 89,
    options: ["React", "Vue", "Angular", "Svelte"],
  },
];

export function PollsList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockPolls.map((poll) => (
        <Card key={poll.id}>
          <CardHeader>
            <CardTitle>{poll.title}</CardTitle>
            <CardDescription>{poll.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {poll.votes} votes • {poll.options.length} options
              </p>
              <Button asChild className="w-full">
                <Link href={`/polls/${poll.id}`}>View Poll</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
