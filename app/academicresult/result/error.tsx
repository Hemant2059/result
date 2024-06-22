"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <h1>Something Went Wrong</h1>
      <Link href={"/"}>
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default error;
