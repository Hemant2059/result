import React from "react";
import TableComponent from "./table-data";
import { Button } from "@/components/ui/button";
import ButtonPrint from "./button-print";

const resultPage = async ({ searchParams }: any) => {
  const htno = searchParams.htno;
  const res = await fetch(
    `https://jntuhresults.up.railway.app/api/academicresult?htno=${htno}`
  );
  const result = await res.json();
  return (
    <div className="py-5">
      <div className="">
        <TableComponent result={result} />
      </div>
      <div className="flex items-center justify-center">
        <ButtonPrint />
      </div>
    </div>
  );
};

export default resultPage;
