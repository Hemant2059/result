"use client";
import { useRouter } from "next/navigation";
import React from "react";
// components/FormComponent.js
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const FormComponent = () => {
  const router = useRouter();
  const [htno, setHtno] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Redirect to the result page with query parameter
    router.push(`/academicresult/result?htno=${encodeURIComponent(htno)}`);
  };

  return (
    <Card>
      <CardContent className="p-5">
        <form onSubmit={handleSubmit}>
          <label>
            Hall Ticket Number:
            <input
              type="text"
              className="p-2 border-2 border-black rounded-xl"
              value={htno}
              onChange={(e) => setHtno(e.target.value)}
              required
            />
          </label>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button size={"lg"}>
          <button type="submit">Submit</button>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FormComponent;
