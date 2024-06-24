"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const ButtonPrint = () => {
  return (
    <Button onClick={() => window.print()} size={"sm"} className="print:hidden">
      Download
    </Button>
  );
};

export default ButtonPrint;
