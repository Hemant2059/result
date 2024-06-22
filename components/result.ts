"use server";
import FormSchema from "@/lib/zod";
import { z } from "zod";

export const result = async (data: z.infer<typeof FormSchema>) => {
  const res = await fetch(
    `https://jntuhresults.up.railway.app/api/academicresult?htno=${data.HallTicket}`
  );
  const result = await res.json();

  return result;
};
