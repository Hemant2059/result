"use client";
import { useRouter } from "next/navigation";
import React from "react";
// components/FormComponent.js
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const FormComponentClass = () => {
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
        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col space-y-4"
        >
          <label>Hall Ticket Number:</label>
          <input
            type="text"
            className="p-2 border-2 border-black rounded-xl"
            value={htno}
            onChange={(e) => setHtno(e.target.value)}
            required
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
          <h1 className="absolute -bottom-10 right-0 text-[12px] font-bold">
            by Bishal Pathak &#128420;
          </h1>
        </form>
      </CardContent>
      <CardFooter className="flex items-center justify-center"></CardFooter>
    </Card>
  );
};

export default FormComponentClass;
