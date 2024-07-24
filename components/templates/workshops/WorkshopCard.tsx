import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import RegisterButton from "components/RegisterButton";

export type Workshop = {
  title: string;
  description: string;
  badge: string;
  audience?: string[]; // audience is optional
};

const WorkshopCard: React.FC<Workshop> = (data) => {
  // Default to an empty array if audience is undefined
  const audienceList = data.audience ?? [];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary">Beginner</Badge>
        <span className="pl-8">
          <RegisterButton />
        </span>
        {audienceList.length > 0 && (
          <div className="mt-4">
            <h4 className="font-semibold">Target Audience</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              {audienceList.map((audienceItem, idx) => (
                <li key={idx}>{audienceItem}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkshopCard;
