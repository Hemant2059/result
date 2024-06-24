import React from "react";
import TableComponent from "./table-data";
import { Button } from "@/components/ui/button";
import ButtonPrint from "./button-print";

const resultPage = async ({ searchParams }: any) => {
  const htno = searchParams.htno;
  const res = await fetch(
    `https://jntuhresults.up.railway.app/api/classresult?semester=2-1&htnos=22u21r00a8,22u21r00a9,22u21r00b0`
  );
  const result = await res.json();
  console.log(result);
  return (
    <div className="py-5">
      <div className="">{/* <TableComponent result={result} /> */}</div>
      <div className="flex items-center justify-center">
        <ButtonPrint />
      </div>
    </div>
  );
};

export default resultPage;
