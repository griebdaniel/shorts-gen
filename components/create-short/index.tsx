import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function CreateShort() {
  async function createShort(formData: FormData) {
    "use server";

    const title = formData.get("title");
    const description = formData.get("description");

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Redirect or show success message

    console.log({ title, description });
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Short</CardTitle>
      </CardHeader>
      <form action={createShort}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your short title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter your short description"
              className="min-h-[120px]"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mood">Mood</Label>
            <Select name="mood" required>
              <SelectTrigger id="mood">
                <SelectValue placeholder="Select a mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="happy">Happy 😊</SelectItem>
                <SelectItem value="sad">Sad 😢</SelectItem>
                <SelectItem value="excited">Excited 🎉</SelectItem>
                <SelectItem value="angry">Angry 😠</SelectItem>
                <SelectItem value="neutral">Neutral 😐</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
