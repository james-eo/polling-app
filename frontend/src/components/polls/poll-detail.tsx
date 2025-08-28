"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Mock data - replace with actual data fetching
const mockPoll = {
  id: "1",
  title: "What's your favorite programming language?",
  description: "Vote for your preferred language",
  options: [
    { id: "1", text: "JavaScript", votes: 45 },
    { id: "2", text: "Python", votes: 32 },
    { id: "3", text: "TypeScript", votes: 28 },
    { id: "4", text: "Go", votes: 15 },
  ],
};

interface PollDetailProps {
  pollId: string;
}

export function PollDetail({ pollId }: PollDetailProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (selectedOption) {
      // TODO: Implement voting logic
      console.log("Voted for option:", selectedOption);
      setHasVoted(true);
    }
  };

  const totalVotes = mockPoll.options.reduce(
    (sum, option) => sum + option.votes,
    0
  );

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>{mockPoll.title}</CardTitle>
          <CardDescription>{mockPoll.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {!hasVoted ? (
            <div className="space-y-4">
              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
              >
                {mockPoll.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id}>{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button onClick={handleVote} disabled={!selectedOption}>
                Vote
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Results</h3>
              {mockPoll.options.map((option) => {
                const percentage =
                  totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0;
                return (
                  <div key={option.id} className="space-y-1">
                    <div className="flex justify-between">
                      <span>{option.text}</span>
                      <span>
                        {option.votes} votes ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
              <p className="text-sm text-muted-foreground">
                Total votes: {totalVotes}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
