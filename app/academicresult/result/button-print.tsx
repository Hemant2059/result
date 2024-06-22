"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const ButtonPrint = () => {
  return <Button onClick={() => window.print()}>Print</Button>;
};

export default ButtonPrint;
