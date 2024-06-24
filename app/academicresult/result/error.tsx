"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <h1>HallTicket Not Found</h1>
      <Link href={"/"}>
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default error;
