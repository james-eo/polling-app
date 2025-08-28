import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Polling App</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Create and participate in polls with ease
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>View Polls</CardTitle>
              <CardDescription>
                Browse and participate in existing polls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/polls">Browse Polls</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create Poll</CardTitle>
              <CardDescription>
                Create your own poll and share it with others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/create-poll">Create Poll</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Login or register to manage your polls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/auth/register">Register</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
