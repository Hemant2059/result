import React from "react";
import TableComponent from "./table-data";

const resultPage = async ({ searchParams }: any) => {
  const htno = searchParams.htno;
  const res = await fetch(
    `https://jntuhresults.up.railway.app/api/academicresult?htno=${htno}`
  );
  const result = await res.json();
  return (
    <div>
      <div>
        <TableComponent result={result} />
      </div>
    </div>
  );
};

export default resultPage;
